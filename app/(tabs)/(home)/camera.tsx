import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <ThemedView style={styles.overlay} />
        <View style={styles.buttonHomeContainer}>
          <Link href="/">
            <Ionicons name="arrow-back-circle-outline" size={50} color="#bfdcc1" />
          </Link>
        </View>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonSwitchCamContainer}>
          <TouchableOpacity style={styles.buttonSwitchCam} onPress={toggleCameraFacing}>
            <Ionicons name="camera-reverse" size={40} color="#a35a60" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonTakePictureContainer}>
          <TouchableOpacity style={ styles.buttonTakePicture} >
            <Ionicons name="scan-circle-outline" size={90} color="black" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align the camera view to the bottom of the screen
  },
  camera: {
    flex: 0.9, // Set camera to take 90% of the screen
    zIndex: 2, // Ensure the camera is above other elements
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Cover the entire screen
    zIndex: 1, // Place the overlay below the camera
  },
  buttonSwitchCamContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'transparent',
    zIndex: 3, // Ensure buttons are above the camera
  },
  buttonTakePictureContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 3, // Ensure buttons are above the camera
  },
  buttonHomeContainer: {
    position: 'absolute',
    top: 30,
    left: 15,
    backgroundColor: 'transparent',
    zIndex: 3, // Ensure buttons are above the camera
  },
  buttonTakePicture: {
    opacity: 0.7,
    backgroundColor: '#d5d5d5d5',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  


  buttonSwitchCam: {
    backgroundColor: '#ffaaa5',
    opacity: 0.8,
    borderRadius: 50,
    padding: 3,
    borderColor: '#a35a60',
    borderWidth: 3,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
});
