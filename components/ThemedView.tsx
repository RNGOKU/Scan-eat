import { useThemeColor } from '@/hooks/useThemeColor';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  mainColor?: string;
};

export function ThemedView({ style, mainColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ main: mainColor }, 'background');

  return (
    <LinearGradient
      colors={['#3d5436', '#b1d9a7']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[style, { flex: 1 }]} 
    >
      <View  {...otherProps} />
    </LinearGradient>
  );
  
}
