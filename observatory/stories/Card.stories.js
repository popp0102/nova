import { View, Text, StyleSheet } from "react-native";
import Card from "../../lib/components/Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = () => (
  <View style={styles.container}>
    <Card>
      <Text style={styles.title}>Default Card</Text>
      <Text style={styles.body}>
        This is a basic card with white background and rounded corners.
      </Text>
    </Card>
  </View>
);

export const Pressable = () => (
  <View style={styles.container}>
    <Card onPress={() => alert("Card pressed!")}>
      <Text style={styles.title}>Pressable Card</Text>
      <Text style={styles.body}>
        Tap me! This card has an onPress handler and shows opacity feedback.
      </Text>
    </Card>
  </View>
);

export const WithCustomStyle = () => (
  <View style={styles.container}>
    <Card style={styles.customCard}>
      <Text style={styles.title}>Custom Styled Card</Text>
      <Text style={styles.body}>
        This card has custom padding and border styling.
      </Text>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  body: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  customCard: {
    padding: 24,
    borderWidth: 2,
    borderColor: "blue",
  },
});
