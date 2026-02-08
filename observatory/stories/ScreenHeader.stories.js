import { View, Text, StyleSheet } from "react-native";
import ScreenHeader from "../../lib/components/ScreenHeader";

export default {
  title: "Components/ScreenHeader",
  component: ScreenHeader,
};

export const Default = () => (
  <View style={styles.container}>
    <ScreenHeader title="Default Screen" />
  </View>
);

export const WithBackButton = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Settings"
      leftIcon={{ onSelect: () => alert('Back pressed') }}
    />
  </View>
);

export const WithRightIcon = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Trial Name"
      leftIcon={{ onSelect: () => alert('Back pressed') }}
      rightIcon={{ name: "check-circle", color: "green" }}
    />
  </View>
);

export const CustomColors = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Custom Colors"
      titleColor="#FF5733"
      leftIcon={{ color: "#900C3F", onSelect: () => alert('Back pressed') }}
    />
  </View>
);

export const CustomFont = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Custom Font"
      titleFontFamily="Arial"
      leftIcon={{ onSelect: () => alert('Back pressed') }}
    />
  </View>
);

export const WithPressableIcon = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Settings"
      leftIcon={{ onSelect: () => alert('Back pressed') }}
      rightIcon={{
        name: "more-vert",
        color: "#4A2C0A",
        onSelect: () => alert('Menu pressed')
      }}
    />
  </View>
);

export const AllFeatures = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="All Features"
      leftIcon={{ onSelect: () => alert('Back pressed') }}
      rightIcon={{ name: "star", color: "#FFD700" }}
      titleColor="#4A2C0A"
    />
  </View>
);

export const LongTitleTruncation = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="This Is A Very Long Title That Should Truncate With Ellipsis"
      leftIcon={{ onSelect: () => alert('Back pressed') }}
      rightIcon={{ name: "check-circle", color: "green" }}
      titleColor="#4A2C0A"
    />
  </View>
);

export const WithChewyFont = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Your Hunts"
      titleFontFamily="Chewy"
      leftIcon={{ onSelect: () => alert('Back pressed') }}
      titleColor="#4A2C0A"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
});
