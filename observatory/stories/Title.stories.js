import { View, StyleSheet } from "react-native";
import Title from "../../lib/components/Title";

export default {
  title: "Components/Title",
  component: Title,
};

export const Default = () => (
  <View style={styles.container}>
    <Title>This is a default title with bold black text</Title>
  </View>
);

export const Sizes = () => (
  <View style={styles.container}>
    <Title size="small">Small title (20px)</Title>
    <Title size="medium">Medium title (24px) - default</Title>
    <Title size="large">Large title (28px)</Title>
  </View>
);

export const WithCustomColor = () => (
  <View style={styles.container}>
    <Title color="blue">Blue title</Title>
    <Title color="green">Green title</Title>
    <Title color="red">Red title</Title>
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
