import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const PressableComponent = () => {
  const navigation = useNavigation();
    const handleRoute = () => {
      navigation.navigate('Home' as never);
    };
  return (
    <Pressable
      className="bg-blue-500 mt-10 mb-6 ml-4 self-start p-2 pr-4 rounded-s-full shadow-md active:bg-blue-600 flex-row items-center"
      onPress={handleRoute}>
      <Icon name="arrow-back" size={28} color="white" />
      <Text className="text-white text-base font-semibold ml-2">Voltar</Text>
    </Pressable>
  );
};

export default PressableComponent;
