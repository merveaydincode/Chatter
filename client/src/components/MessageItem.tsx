import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

interface MessageItemProps {
    name: string;
    message: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ name, message }) => {
    return (
        <View style={tw`bg-indigo-200 p-4 mb-2 rounded`}>
            <Text style={tw`font-bold mb-1`}>{name}</Text>
            <Text>{message}</Text>
        </View>
    );
};

export default MessageItem;
