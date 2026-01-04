import { View, StyleSheet } from "react-native";
import Subtitle from "../../lib/components/Subtitle";

export default {
  title: "Components/Subtitle",
  component: Subtitle,
};

export const Default = () => (
  <View style={styles.container}>
    <Subtitle>This is a default subtitle with gray italic text</Subtitle>
  </View>
);

export const Sizes = () => (
  <View style={styles.container}>
    <Subtitle size="small">Small subtitle (12px)</Subtitle>
    <Subtitle size="medium">Medium subtitle (14px) - default</Subtitle>
    <Subtitle size="large">Large subtitle (16px)</Subtitle>
  </View>
);

export const WithCustomColor = () => (
  <View style={styles.container}>
    <Subtitle color="blue">Blue subtitle</Subtitle>
    <Subtitle color="green">Green subtitle</Subtitle>
    <Subtitle color="red">Red subtitle</Subtitle>
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
