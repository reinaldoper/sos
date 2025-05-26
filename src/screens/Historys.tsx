import React from 'react';
import {useTasks} from '../hooks/useTask';
import {View, ScrollView, Text} from 'react-native';
import TaskItem from '../components/TaskItem';
import LogoutButton from '../components/LogoutButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MSG_LOCATION } from '../constants/constants';
import PressableComponent from '../components/Pressable';

const Historys = () => {
  const {locations, removeLocation} = useTasks();

  return (
    <>
      <PressableComponent />
      <View className="flex-1 bg-slate-100 px-4 pt-4">
        <Text className="text-2xl font-bold mb-4 text-slate-800">
          Histórico de Localizações
        </Text>
        <ScrollView className="bg-white rounded-2xl shadow-lg p-4 flex-1">
          {locations.length > 0 ? (
            locations.map(task => (
              <View key={task.id} className="mb-4">
                <TaskItem task={task} onRemove={removeLocation} />
              </View>
            ))
          ) : (
            <View className="flex-1 items-center justify-center py-16">
              <Icon name="location-off" size={64} color="#94a3b8" />
              <Text className="text-slate-400 text-lg mt-4 text-center">
                {MSG_LOCATION}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
      <LogoutButton />
    </>
  );
};

export default Historys;
