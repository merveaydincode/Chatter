import React from 'react';
import { FlatList } from 'react-native';
import MessageItem from './MessageItem';

interface MessageListProps {
    data: { id: string; name: string; message: string }[];
}

const MessageList: React.FC<MessageListProps> = ({ data }) => {
    const renderItem = ({ item }: { item: { id: string; name: string; message: string } }) => (
        <MessageItem name={item.personalName} message={item.message} />
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
