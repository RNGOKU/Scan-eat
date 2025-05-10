import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function account() {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Information</Text>
            <Text style={styles.info}>Name: {user.name}</Text>
            <Text style={styles.info}>Email: {user.email}</Text>
            <Button title="Log Out" onPress={() => { /* Handle logout */ }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    info: {
        fontSize: 18,
        marginBottom: 16,
    },
});
