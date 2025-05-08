/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const gray = '#4a4a4a';
const lightBeige = '#fffdf3';
const beige = '#f2ecd7';
const darkBeige = '#e5ddd2';
const lightGreen = '#bfdcc1';
const green = '#6a8d5d';
const darkGreen = '#3d5436';
const lightSalmon = '#efd2c0';
const salmon = '#ecbcaa';
const greenLogo = '#b1d9a7';
const salmonLogo = '#feb897';


export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  main: {
    text: gray,
    background: green,
    tint: tintColorLight,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    mainButton: darkGreen,
    mainButtonText: salmonLogo,
  }
};
