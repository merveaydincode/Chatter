import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons'; 

const BackHeader: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`justify-start p-3 mt-10`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BackHeader;
