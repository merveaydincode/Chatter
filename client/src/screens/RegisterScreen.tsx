import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Login', { name, email, password });
  };

  return (

    <View style={tw`flex-1 justify-center p-4 bg-black`}>
      <Text style={tw`text-2xl font-bold p-3 text-white`}>Kayıt</Text>
      <View style={tw`bg-indigo-200 p-10 rounded-3xl w-full max-w-md`}>
        <TextInput
          style={tw`border border-white rounded-xl p-3 w-full mb-4`}
          placeholder="Ad"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={tw`border border-white rounded-xl p-3 w-full mb-4`}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={tw`border border-white rounded-xl p-3 w-full mb-4`}
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={tw`bg-indigo-400 rounded-xl p-2 mt-4 w-40 mx-auto h-12 justify-center`}
          onPress={handleRegister}
        >
          <Text style={tw`text-white text-center  `}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
