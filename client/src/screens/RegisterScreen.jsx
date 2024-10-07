import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc'; 

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <Text style={tw`text-md text-white mb-5`}>Register</Text>

      <TextInput
        style={tw`bg-white w-4/5 p-3 mb-4 rounded`}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={tw`bg-white w-4/5 p-3 mb-4 rounded`}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={tw`bg-blue-500 w-4/5 p-3 rounded`} onPress={handleRegister}/>
    </View>
  );
};

export default RegisterScreen;
