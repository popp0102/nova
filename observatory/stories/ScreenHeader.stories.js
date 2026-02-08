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

export const WithSubtitle = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Your Hunts"
      subtitle="Create and manage your adventures"
    />
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

export const WithBackButtonAndSubtitle = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="My Hunt"
      subtitle="5 Trials"
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
      subtitle="With custom styling"
      titleColor="#FF5733"
      subtitleColor="#C70039"
      backIconColor="#900C3F"
      onBack={() => alert('Back pressed')}
    />
  </View>
);

export const CustomFont = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="Custom Font"
      subtitle="Using Arial"
      titleFontFamily="Arial"
      onBack={() => alert('Back pressed')}
    />
  </View>
);

export const AllFeatures = () => (
  <View style={styles.container}>
    <ScreenHeader
      title="All Features"
      subtitle="Back button, subtitle, and right content"
      onBack={() => alert('Back pressed')}
      rightContent={<Text style={{ color: '#4A2C0A', fontWeight: 'bold' }}>⭐</Text>}
      titleColor="#4A2C0A"
      subtitleColor="#2C1810"
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
