import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home ({ navigation }) {
    return (
        <View style={styles.container}>
        <Text>Hello from home!</Text>

        <Button 
            title="Go To Profile"
            onPress={
            () => navigation.navigate( 'Profile' )
            }
        />

        <Button 
            title="Go To Feed"
            onPress={
            () => navigation.navigate( 'Feed', {
                username: 'Mark Zuckerberg'
            } )
            }
        />

        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});