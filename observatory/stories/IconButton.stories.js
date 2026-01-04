import { View, StyleSheet, Alert } from "react-native";
import IconButton from "../../lib/components/IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
};

export const Default = () => (
  <View style={styles.container}>
    <IconButton name="arrow-back" onPress={() => Alert.alert("Back pressed!")} />
  </View>
);

export const DifferentIcons = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <IconButton name="arrow-back" onPress={() => Alert.alert("Back")} />
      <IconButton name="close" onPress={() => Alert.alert("Close")} />
      <IconButton name="menu" onPress={() => Alert.alert("Menu")} />
      <IconButton name="search" onPress={() => Alert.alert("Search")} />
      <IconButton name="settings" onPress={() => Alert.alert("Settings")} />
    </View>
  </View>
);

export const Sizes = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <IconButton name="star" size={16} onPress={() => {}} />
      <IconButton name="star" size={24} onPress={() => {}} />
      <IconButton name="star" size={32} onPress={() => {}} />
      <IconButton name="star" size={40} onPress={() => {}} />
    </View>
  </View>
);

export const WithCustomColor = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <IconButton name="favorite" color="red" onPress={() => {}} />
      <IconButton name="favorite" color="blue" onPress={() => {}} />
      <IconButton name="favorite" color="green" onPress={() => {}} />
      <IconButton name="favorite" color="purple" onPress={() => {}} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
});
