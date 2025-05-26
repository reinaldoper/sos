import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoutButton from '../components/LogoutButton';


export function Home(){
  const navigation = useNavigation();

  const buttons = [
    { title: '💡 Segurança', route: 'Safety' },
    { title: '👥 Contatos', route: 'Contacts' },
    { title: '🗺️ Histórico', route: 'History' },
  ];

  const handleNavigation = (route: string) => {
    navigation.navigate(route as never);
  };

  return (
    <>
    <View className="flex-1 bg-slate-400 p-4 justify-center items-center">
      <Text className="text-3xl font-bold mb-2">🛡️ Aplicativo SOS</Text>
      <Text className="text-2xl mb-8 text-center">Segurança pessoal na palma da sua mão</Text>
      <View className="w-full items-center">
        {buttons.map((btn) => (
          <TouchableOpacity
            key={btn.route}
            className="bg-blue-600 w-64 py-4 rounded-xl mb-4 shadow-lg active:bg-blue-700"
            onPress={() => handleNavigation(btn.route)}
            activeOpacity={0.85}
          >
            <Text className="text-white text-lg font-semibold text-center">{btn.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    <LogoutButton />
    </>
  );
}
