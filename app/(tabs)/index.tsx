import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons'; // Import camera icon
import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
      />
      </View>
      
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Scan'Eat</Text>
        
        <View style={styles.sloganContainer}>
          <Text style={styles.slogan}>Scannez, découvrez, dégustez !</Text> 
        </View>
      </View>

      <TouchableOpacity style={styles.cameraButton}>
        <Ionicons name="camera" size={24} color="#fffdf3" />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  centerContainer: {
    backgroundColor: 'rgba(220, 220, 220, 0.2)', 
    padding: 26,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
  },
  sloganContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slogan: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center', // Center the text
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center', // Center the text
  },
  cameraButton: {
    bottom: 32,
    backgroundColor: '#6a8d5d',
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
