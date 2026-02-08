import { View, StyleSheet } from "react-native";
import Heading from "../../lib/components/Heading";

export default {
  title: "Components/Heading",
  component: Heading,
};

export const Default = () => (
  <View style={styles.container}>
    <Heading>This is a default heading with bold black text</Heading>
  </View>
);

export const Sizes = () => (
  <View style={styles.container}>
    <Heading size="h1">H1 Heading (64px)</Heading>
    <Heading size="h2">H2 Heading (48px)</Heading>
    <Heading size="h3">H3 Heading (36px)</Heading>
    <Heading size="h4">H4 Heading (24px) - default</Heading>
    <Heading size="h5">H5 Heading (20px)</Heading>
    <Heading size="h6">H6 Heading (16px)</Heading>
  </View>
);

export const WithCustomColor = () => (
  <View style={styles.container}>
    <Heading color="blue">Blue heading</Heading>
    <Heading color="green">Green heading</Heading>
    <Heading color="red">Red heading</Heading>
  </View>
);

export const WithCustomFontFamily = () => (
  <View style={styles.container}>
    <Heading fontFamily="Courier">Courier font heading</Heading>
    <Heading fontFamily="Georgia">Georgia font heading</Heading>
    <Heading fontFamily="Verdana">Verdana font heading</Heading>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
});
