import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  // theme хэрэглэхгүй → шууд өгөгдсөн өнгө эсвэл default #fff
  const backgroundColor = lightColor || darkColor || "#fff";

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
