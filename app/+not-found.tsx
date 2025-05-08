import { Link, Stack } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
        <ThemedText type="title">This screen does not exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginBottom: 20, // Add spacing between the logo and the text
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
