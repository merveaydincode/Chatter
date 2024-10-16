import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tw from 'twrnc';

const SettingsScreen: React.FC = () => {


    return (
        <View style={tw`flex-1 bg-black justify-center items-center`}>
            <Text style={styles.header}>Ayarlar</Text>
            <View style={tw`bg-indigo-200 p-4 mt-4 rounded`}>
                <Text style={styles.label}>Ad:</Text>
                <Text style={styles.label}>E-posta:</Text>              
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    label: {
        fontWeight: 'bold',
    },
    info: {
        marginBottom: 10,
    },
});

export default SettingsScreen;
