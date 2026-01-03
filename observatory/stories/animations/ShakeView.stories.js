import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import ShakeView from '../../../lib/components/animations/ShakeView';
import Button from '../../../lib/components/Button';

export default {
  title: 'Animations/ShakeView',
  component: ShakeView,
};

export const Default = {
  render: () => {
    const [shake, setShake] = useState(false);

    const triggerShake = () => {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    };

    return (
      <View style={styles.container}>
        <Button onPress={triggerShake} style={styles.button}>
          Trigger Shake
        </Button>
        <ShakeView shake={shake}>
          <View style={styles.box}>
            <Text style={styles.text}>Default Shake</Text>
          </View>
        </ShakeView>
      </View>
    );
  },
};

export const DifferentDurations = {
  render: () => {
    const [shake, setShake] = useState(false);

    const triggerShake = () => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    };

    return (
      <View style={styles.container}>
        <Button onPress={triggerShake} style={styles.button}>
          Trigger Shakes
        </Button>
        <ShakeView shake={shake} duration={30}>
          <View style={[styles.box, { backgroundColor: '#2196F3' }]}>
            <Text style={styles.text}>Fast (30ms)</Text>
          </View>
        </ShakeView>

        <ShakeView shake={shake} duration={50}>
          <View style={[styles.box, { backgroundColor: '#4CAF50' }]}>
            <Text style={styles.text}>Medium (50ms)</Text>
          </View>
        </ShakeView>

        <ShakeView shake={shake} duration={100}>
          <View style={[styles.box, { backgroundColor: '#FF9800' }]}>
            <Text style={styles.text}>Slow (100ms)</Text>
          </View>
        </ShakeView>
      </View>
    );
  },
};

export const DifferentDistances = {
  render: () => {
    const [shake, setShake] = useState(false);

    const triggerShake = () => {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    };

    return (
      <View style={styles.container}>
        <Button onPress={triggerShake} style={styles.button}>
          Trigger Shakes
        </Button>
        <ShakeView shake={shake} distance={5}>
          <View style={[styles.box, { backgroundColor: '#E91E63' }]}>
            <Text style={styles.text}>Subtle (5px)</Text>
          </View>
        </ShakeView>

        <ShakeView shake={shake} distance={10}>
          <View style={[styles.box, { backgroundColor: '#9C27B0' }]}>
            <Text style={styles.text}>Normal (10px)</Text>
          </View>
        </ShakeView>

        <ShakeView shake={shake} distance={20}>
          <View style={[styles.box, { backgroundColor: '#3F51B5' }]}>
            <Text style={styles.text}>Aggressive (20px)</Text>
          </View>
        </ShakeView>
      </View>
    );
  },
};

export const DifferentIntensities = {
  render: () => {
    const [shake, setShake] = useState(false);

    const triggerShake = () => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    };

    return (
      <View style={styles.container}>
        <Button onPress={triggerShake} style={styles.button}>
          Trigger Shakes
        </Button>
        <ShakeView shake={shake} intensity={2}>
          <View style={[styles.box, { backgroundColor: '#00BCD4' }]}>
            <Text style={styles.text}>Quick (2 shakes)</Text>
          </View>
        </ShakeView>

        <ShakeView shake={shake} intensity={4}>
          <View style={[styles.box, { backgroundColor: '#009688' }]}>
            <Text style={styles.text}>Normal (4 shakes)</Text>
          </View>
        </ShakeView>

        <ShakeView shake={shake} intensity={6}>
          <View style={[styles.box, { backgroundColor: '#8BC34A' }]}>
            <Text style={styles.text}>Intense (6 shakes)</Text>
          </View>
        </ShakeView>
      </View>
    );
  },
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
  button: {
    marginBottom: 16,
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
