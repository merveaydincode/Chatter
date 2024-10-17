import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';

interface TabButtonsProps {
    activeTab: 'personal' | 'group';
    setActiveTab: (tab: 'personal' | 'group') => void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ activeTab, setActiveTab }) => {
    return (
        <View style={tw`flex-row justify-between mb-4`}>
            <TouchableOpacity
                style={tw`flex-1 p-2 ${activeTab === 'personal' ? 'bg-indigo-400' : 'bg-gray-700'} rounded-lg`}
                onPress={() => setActiveTab('personal')}
            >
                <Text style={tw`text-center text-white`}>Kişisel Mesajlar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={tw`flex-1 p-2 ${activeTab === 'group' ? 'bg-indigo-400' : 'bg-gray-700'} rounded-lg`}
                onPress={() => setActiveTab('group')}
            >
                <Text style={tw`text-center text-white`}>Grup Mesajları</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TabButtons;
