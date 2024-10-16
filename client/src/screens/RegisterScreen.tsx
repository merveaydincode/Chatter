import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); 

  const handleRegister = () => {
    Alert.alert('Kayıt Başarılı!', `Ad: ${name}\nE-posta: ${email}`);
    navigation.navigate('Login', { name, email, password });
  };
  
  return (
    <View style={tw`flex-1 justify-center items-center p-4 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Kayıt Ol</Text>
      
      <TextInput
        style={tw`border border-gray-300 rounded p-2 w-full mb-4`}
        placeholder="Ad"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={tw`border border-gray-300 rounded p-2 w-full mb-4`}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={tw`border border-gray-300 rounded p-2 w-full mb-4`}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
