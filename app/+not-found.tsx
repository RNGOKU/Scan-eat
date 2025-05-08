import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


import { LinearGradient } from 'expo-linear-gradient';
import { Link, Stack } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      {/* Gradient in the background */}
      <LinearGradient
          colors={['#3d5436', '#b1d9a7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />

     
      {/* Content */}
      <View style={styles.content}>
        <ThemedText type="title" style={styles.text}>
          Oops...
        </ThemedText>
        <ThemedText type="title" style={styles.text}>
          Cette page n'existe pas
        </ThemedText>
        <Image source={require('@/assets/images/sad.png')} style={styles.logo} />
        <Link href="/" asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="home" style={styles.buttonText} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Ensures child elements can use absolute positioning
  },
  gradient: {
    ...StyleSheet.absoluteFillObject, // Makes the gradient fill the entire screen
    zIndex: -2, // Gradient is the furthest back
  },
  logo: {
    width: 400,
    height: 400,
    margin: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0, // Content is above both the gradient and wallpaper
  },

  text: {
    fontSize: 34,
    color: '#111111', // Green text00000
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#3d5436', // Green background
    borderRadius: 15,
  },
  buttonText: {
    color: '#6a8d5d', // Light green text
    fontSize: 48,
    textAlign: 'center',
  },
});