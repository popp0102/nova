import { View, Text, StyleSheet } from 'react-native';
import FadeView from '../../lib/components/animations/FadeView';

export default {
  title: 'Animations/FadeView',
  component: FadeView,
};

export const Default = {
  render: () => (
    <View style={styles.container}>
      <FadeView>
        <View style={styles.box}>
          <Text style={styles.text}>Default Fade In</Text>
        </View>
      </FadeView>
    </View>
  ),
};

export const FadeIn = {
  render: () => (
    <View style={styles.container}>
      <FadeView direction="in" duration={1000}>
        <View style={[styles.box, { backgroundColor: '#2196F3' }]}>
          <Text style={styles.text}>Fade In (1s)</Text>
        </View>
      </FadeView>

      <FadeView direction="in" duration={500}>
        <View style={[styles.box, { backgroundColor: '#4CAF50' }]}>
          <Text style={styles.text}>Fade In (0.5s)</Text>
        </View>
      </FadeView>

      <FadeView direction="in" duration={2000}>
        <View style={[styles.box, { backgroundColor: '#FF9800' }]}>
          <Text style={styles.text}>Fade In (2s)</Text>
        </View>
      </FadeView>
    </View>
  ),
};

export const FadeOut = {
  render: () => (
    <View style={styles.container}>
      <FadeView direction="out" duration={1000}>
        <View style={[styles.box, { backgroundColor: '#E91E63' }]}>
          <Text style={styles.text}>Fade Out (1s)</Text>
        </View>
      </FadeView>

      <FadeView direction="out" duration={500}>
        <View style={[styles.box, { backgroundColor: '#9C27B0' }]}>
          <Text style={styles.text}>Fade Out (0.5s)</Text>
        </View>
      </FadeView>

      <FadeView direction="out" duration={2000}>
        <View style={[styles.box, { backgroundColor: '#3F51B5' }]}>
          <Text style={styles.text}>Fade Out (2s)</Text>
        </View>
      </FadeView>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    padding: 20,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
    backgroundColor: '#FF5722',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
