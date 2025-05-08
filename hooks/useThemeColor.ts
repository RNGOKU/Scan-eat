/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';

export function useThemeColor(
  props: {  main?: string },
  colorName: keyof typeof Colors.main
) {
  const colorFromProps = props.main;

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors.main[colorName];
  }
}
