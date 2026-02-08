import { View, Text, StyleSheet } from "react-native";
import ScreenHeader from "../../lib/components/ScreenHeader";
import Badge from "../../lib/components/Badge";

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
      onBack={() => alert('Back pressed')}
    />
  </View>
);

export const WithRightContent = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Trial Name"
      onBack={() => alert('Back pressed')}
      rightContent={<Badge leftIcon="check-circle" backgroundColor="green">Solved</Badge>}
    />
  </View>
);

export const CustomColors = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Custom Colors"
      titleColor="#FF5733"
      backIconColor="#900C3F"
      onBack={() => alert('Back pressed')}
    />
  </View>
);

export const CustomFont = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Custom Font"
      titleFontFamily="Arial"
      onBack={() => alert('Back pressed')}
    />
  </View>
);

export const AllFeatures = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="All Features"
      onBack={() => alert('Back pressed')}
      rightContent={<Text style={{ color: '#4A2C0A', fontWeight: 'bold' }}>⭐</Text>}
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
