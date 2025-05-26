import { useEffect, useState } from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc, query, orderBy, getDocs, where } from 'firebase/firestore';
import { db, auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Location } from '../types/types';
import { MSG_ERROR_DATES, MSG_ERROR_FIREBASE, MSG_USER_NOT_FOUND } from '../constants/constants';



/**
 * Custom hook that manages user authentication and location data.
 *
 * This hook provides functionalities for user sign-up, login, logout,
 * and location management within a Firebase Firestore database.
 * It maintains a list of locations associated with the current user
 * and updates in real-time using Firestore's onSnapshot listener.
 *
 * Returns:
 * - `locations`: An array of `Location` objects associated with the current user.
 * - `addLocation(latitude: number, longitude: number)`: Adds a new location for the current user.
 * - `removeLocation(id: string)`: Removes a location by its ID.
 * - `createUser(email: string, password: string)`: Registers a new user with email and password.
 * - `login(email: string, password: string)`: Logs in a user with email and password.
 * - `logout()`: Logs out the current user.
 * - `getAllLocation()`: Retrieves all locations from the database.
 */

export function useTasks() {
  const [locations, setLocation] = useState<Location[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'checkins'), orderBy('createdAt', 'desc'));
    const user = auth.currentUser;
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list: Location[] = [];
      querySnapshot.forEach((docTask) => {
        const data = docTask.data();
        if (data.uid === user?.uid) {
          list.push({
            id: docTask.id,
            latitude: data.latitude,
            longitude: data.longitude,
            createdAt: data.createdAt.toDate(),
          });
        }
      });
      setLocation(list);
    });

    return () => unsubscribe();
  }, []);

  async function addLocation(latitude: number, longitude: number) {
    const user = auth.currentUser;
    if (!user) {
      throw new Error(MSG_USER_NOT_FOUND);
    }
    await addDoc(collection(db, 'checkins'), {
      uid: user.uid,
      latitude,
      longitude,
      createdAt: new Date(),
    });
  }

  async function getAllLocation() {
    const q = query(collection(db, 'checkins'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const list: Location[] = [];
    querySnapshot.forEach((docTask) => {
      const data = docTask.data();
      list.push({
        id: docTask.id,
        latitude: data.latitude,
        longitude: data.longitude,
        createdAt: data.createdAt.toDate(),
      });
    });
    return list;
  }

  async function createUser(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      await addDoc(collection(db, 'users_locations'), {
        uid: user.uid,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      throw new Error(MSG_ERROR_FIREBASE);
    }
  }

  async function login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      const q = query(collection(db, 'users_locations'), where('uid', '==', user.uid));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        throw new Error(MSG_ERROR_DATES);
      }
    } catch (error) {
      throw new Error(MSG_ERROR_FIREBASE);
    }
  }


  async function removeLocation(id: string) {
    const taskRef = doc(db, 'checkins', id);
    await deleteDoc(taskRef);
  }

  async function logout() {
    try {
      await auth.signOut();
    } catch (error) {
      throw new Error(MSG_ERROR_FIREBASE);
    }
  }

  return { locations, addLocation, removeLocation, createUser, logout, login, getAllLocation };
}
