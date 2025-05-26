import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {
  MSG_NEW_REGISTER,
  MSG_OPEN_LOGIN,
  MSG_EMAIL,
  MSG_PASSWORD,
  MSG_FORMAT_EMAIL,
  MSG_SGIN,
} from '../constants/constants';
import {useTasks} from '../hooks/useTask';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../styles/colors';
import {styles} from '../styles/style';
import LottieView from 'lottie-react-native';
import animation from '../assets/animations/login.json';
import { handleLogin, handleLoginError } from '../styles/toasts';

/**
 * Component to render the login screen with a form to login and a button to navigate to the register screen.
 * @returns {JSX.Element}
 */
export default function LoginScreen() {
  const {login} = useTasks();
  const {
    control,
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function onSubmit(data: any) {
    try {
      setLoading(true);
      await login(data.email, data.password);
      handleLogin();
      navigation.navigate('Home' as never);
    } catch (error: any) {
      handleLoginError();
    } finally {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={require('../assets/images/sos.jpeg')}
      resizeMode="cover"
      style={styles.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}>
        <View className="w-full max-w-md bg-lime-400 rounded-lg p-6 shadow-lg">
        <LottieView
          autoPlay
          loop
          source={animation}
          style={styles.lottie}
        />
          <Text className="text-3xl font-bold text-center text-blue-600 mb-6">
            {MSG_SGIN}
          </Text>
          <View className="gap-4">
            <Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{
                required: `${MSG_EMAIL}`,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: `${MSG_FORMAT_EMAIL}`,
                },
              }}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <View className="mb-5 px-5">
                  <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    value={value}
                    editable={!loading}
                    className="w-full border border-gray-300 p-3 rounded-md text-base bg-white"
                  />
                  {error && (
                    <Text className="text-red-500 text-sm mt-1">
                      {error.message}
                    </Text>
                  )}
                </View>
              )}
            />
            <Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{required: `${MSG_PASSWORD}`}}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <View className="px-5">
                  <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    editable={!loading}
                    className="w-full border border-gray-300 p-3 rounded-md text-base bg-white"
                  />
                  {error && (
                    <Text className="text-red-500 text-sm mt-1">
                      {error.message}
                    </Text>
                  )}
                </View>
              )}
            />
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              disabled={loading}
              className={`flex-row justify-center items-center bg-green-600 p-3 rounded-md ${
                loading ? 'opacity-50' : ''
              }`}>
              <Icon name="login" size={24} color={colors.white} />
              <Text className="text-white ml-2">{MSG_OPEN_LOGIN}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register' as never)}
              className="mt-4">
              <Text className="text-center text-blue-600 underline">
                {MSG_NEW_REGISTER}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
