import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MessageItem from './MessageItem';

interface MessageListProps {
    data: { id: string; name: string; message: string }[];
}

const MessageList: React.FC<MessageListProps> = ({ data }) => {
    const navigation = useNavigation();

    const renderItem = ({ item }: { item: { id: string; name: string; message: string } }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Chat', { name: item.name, message: item.message })}>
            <MessageItem name={item.name} message={item.message} />
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

export default MessageList;
