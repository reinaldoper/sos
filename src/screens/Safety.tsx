import {View, Text, ScrollView} from 'react-native';
import {safetyTips} from '../components/safetyTips';
import LogoutButton from '../components/LogoutButton';
import PressableComponent from '../components/Pressable';

const Safety = () => {

  return (
    <>
      <PressableComponent />
      <View className="flex-1 bg-slate-400 justify-center items-center px-4 pt-8">
        <Text className="text-3xl font-bold mb-2">🛡️ Aplicativo SOS</Text>
        <Text className="text-2xl font-semibold mb-6">
          💡 Dicas de Segurança
        </Text>
        <ScrollView className="w-full bg-white rounded-2xl p-4 shadow-lg max-h-[70%]">
          {safetyTips.map((tip, index) => (
            <View key={index} className="mb-4 border-l-4 border-blue-500 pl-3">
              <Text className="text-lg text-slate-700">{tip}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <LogoutButton />
    </>
  );
};

export default Safety;
