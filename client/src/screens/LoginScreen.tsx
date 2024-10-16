import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import tw from 'twrnc';

const LoginScreen: React.FC = () => {
  const route = useRoute();
  const { name = '', email = '', password = '' } = route.params || {};

  const [emailValue, setEmailValue] = useState(email);
  const [passwordValue, setPasswordValue] = useState(password);

  const handleLogin = () => {
    if (emailValue === email && passwordValue === password) {
      Alert.alert('Giriş Başarılı!', `E-posta: ${emailValue}`);
    } else {
      Alert.alert('Giriş Başarısız!', 'Geçersiz e-posta veya şifre.');
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-4 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Giriş Yap</Text>
      
      <TextInput
        style={tw`border border-gray-300 rounded p-2 w-full mb-4`}
        placeholder="E-posta"
        value={emailValue}
        onChangeText={setEmailValue}
        keyboardType="email-address"
      />
      
      <TextInput
        style={tw`border border-gray-300 rounded p-2 w-full mb-4`}
        placeholder="Şifre"
        value={passwordValue}
        onChangeText={setPasswordValue}
        secureTextEntry
      />
      
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
