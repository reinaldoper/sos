import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Geolocation from '@react-native-community/geolocation';
import {mapsLink} from '../constants/mapsLink';
import {whatsappLink} from '../constants/whatsApp';
import {handleErrorWhatsapp, handleErrorLocation} from '../styles/toasts';
import LogoutButton from '../components/LogoutButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTasks} from '../hooks/useTask';
import {Contact} from '../types/types';
import { MSG_CONTACTS } from '../constants/constants';
import PressableComponent from '../components/Pressable';

export default function ContactsScreens() {
  const [contacts, setContacts] = useState<Contact[] | null>([]);

  const {addLocation} = useTasks();

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const contactPerm = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      const locationPerm = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      return (
        contactPerm === PermissionsAndroid.RESULTS.GRANTED &&
        locationPerm === PermissionsAndroid.RESULTS.GRANTED
      );
    }
    return true;
  };

  useEffect(() => {
    const loadContacts = async () => {
      const granted = await requestPermissions();
      if (!granted) {
        handleErrorLocation();
        return;
      }

      const list = await Contacts.getAll();
      setContacts(list);
    };
    loadContacts();
  }, []);

  const sendLocationViaWhatsApp = (phone: string) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        addLocation(latitude, longitude);
        const link = mapsLink({latitude, longitude});
        const message = `Minha localização atual é: ${link}`;
        const whatsapp = whatsappLink(phone, message);
        Linking.openURL(whatsapp);
      },
      error => {
        handleErrorWhatsapp();
        console.error('Erro ao obter localização:', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <>
      <PressableComponent />
      <View className="flex-1 p-5 pt-12 bg-white">
        <Text className="text-2xl font-bold mb-5">Contatos</Text>
        <ScrollView className="flex-1 bg-blue-300 rounded-xl p-4">
          {contacts && contacts.length > 0 ? (
            contacts.map(item => {
              const phone = item.phoneNumbers[0]?.number;
              if (!phone) {
                return null;
              }
              return (
                <TouchableOpacity
                  key={item.recordID}
                  className="mb-5 p-4 bg-slate-100 rounded-xl shadow flex-col"
                  onPress={() => sendLocationViaWhatsApp(phone)}>
                  <Text className="text-lg font-bold">{item.displayName}</Text>
                  <Text className="text-base text-gray-500">{phone}</Text>
                  <Text className="mt-2 text-blue-600 font-medium">
                    📍 Enviar localização via WhatsApp
                  </Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <View className="flex-1 items-center justify-center py-16">
              <Icon name="location-off" size={64} color="#94a3b8" />
              <Text className="text-slate-400 text-lg mt-4 text-center">
                {MSG_CONTACTS}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
      <LogoutButton />
    </>
  );
}
