import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useTasks } from '../hooks/useTask';
import { Logout, handleErrorLogout } from '../styles/toasts';

export default function LogoutButton() {
  const router = useNavigation();
  const { logout } = useTasks();

  const handleLogout = async () => {
    try {
      await logout();
      router.navigate('Login' as never);
      Logout();
    } catch (error: any) {
      handleErrorLogout();
    }
  };

  return (
    <TouchableOpacity className="flex bg-red-400 p-2 text-center justify-center" onPress={handleLogout}>
      <Text className="flex text-slate-50 text-2xl text-center justify-center">🚪 Logout</Text>
    </TouchableOpacity>
  );
}

