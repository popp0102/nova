import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import SlideView from '../../../lib/components/animations/SlideView';
import Button from '../../../lib/components/Button';

export default {
  title: 'Animations/SlideView',
  component: SlideView,
};

export const Default = {
  render: () => {
    const [key, setKey] = useState(0);

    return (
      <View style={styles.container}>
        <Button onPress={() => setKey(k => k + 1)} style={styles.button}>
          Restart Animation
        </Button>
        <SlideView key={key}>
          <View style={styles.box}>
            <Text style={styles.text}>Default Slide</Text>
          </View>
        </SlideView>
      </View>
    );
  },
};

export const SlideLeft = {
  render: () => {
    const [key, setKey] = useState(0);

    return (
      <View style={styles.container}>
        <Button onPress={() => setKey(k => k + 1)} style={styles.button}>
          Restart Animations
        </Button>
        <SlideView key={`slide-left-1-${key}`} direction="left" duration={1000}>
          <View style={[styles.box, { backgroundColor: '#2196F3' }]}>
            <Text style={styles.text}>Slide Left (1s)</Text>
          </View>
        </SlideView>

        <SlideView key={`slide-left-2-${key}`} direction="left" duration={500}>
          <View style={[styles.box, { backgroundColor: '#4CAF50' }]}>
            <Text style={styles.text}>Slide Left (0.5s)</Text>
          </View>
        </SlideView>

        <SlideView key={`slide-left-3-${key}`} direction="left" duration={2000}>
          <View style={[styles.box, { backgroundColor: '#FF9800' }]}>
            <Text style={styles.text}>Slide Left (2s)</Text>
          </View>
        </SlideView>
      </View>
    );
  },
};

export const SlideRight = {
  render: () => {
    const [key, setKey] = useState(0);

    return (
      <View style={styles.container}>
        <Button onPress={() => setKey(k => k + 1)} style={styles.button}>
          Restart Animations
        </Button>
        <SlideView key={`slide-right-1-${key}`} direction="right" duration={1000}>
          <View style={[styles.box, { backgroundColor: '#E91E63' }]}>
            <Text style={styles.text}>Slide Right (1s)</Text>
          </View>
        </SlideView>

        <SlideView key={`slide-right-2-${key}`} direction="right" duration={500}>
          <View style={[styles.box, { backgroundColor: '#9C27B0' }]}>
            <Text style={styles.text}>Slide Right (0.5s)</Text>
          </View>
        </SlideView>

        <SlideView key={`slide-right-3-${key}`} direction="right" duration={2000}>
          <View style={[styles.box, { backgroundColor: '#3F51B5' }]}>
            <Text style={styles.text}>Slide Right (2s)</Text>
          </View>
        </SlideView>
      </View>
    );
  },
};

export const SlideUp = {
  render: () => {
    const [key, setKey] = useState(0);

    return (
      <View style={styles.container}>
        <Button onPress={() => setKey(k => k + 1)} style={styles.button}>
          Restart Animations
        </Button>
        <SlideView key={`slide-up-1-${key}`} direction="up" duration={1000}>
          <View style={[styles.box, { backgroundColor: '#00BCD4' }]}>
            <Text style={styles.text}>Slide Up (1s)</Text>
          </View>
        </SlideView>

        <SlideView key={`slide-up-2-${key}`} direction="up" duration={500}>
          <View style={[styles.box, { backgroundColor: '#009688' }]}>
            <Text style={styles.text}>Slide Up (0.5s)</Text>
          </View>
        </SlideView>

        <SlideView key={`slide-up-3-${key}`} direction="up" duration={2000}>
          <View style={[styles.box, { backgroundColor: '#8BC34A' }]}>
            <Text style={styles.text}>Slide Up (2s)</Text>
          </View>
        </SlideView>
      </View>
    );
  },
};

export const SlideDown = {
  render: () => {
    const [key, setKey] = useState(0);

    return (
      <View style={styles.container}>
        <Button onPress={() => setKey(k => k + 1)} style={styles.button}>
          Restart Animations
        </Button>
        <SlideView key={`slide-down-1-${key}`} direction="down" duration={1000}>
          <View style={[styles.box, { backgroundColor: '#FFEB3B' }]}>
            <Text style={styles.text}>Slide Down (1s)</Text>
          </View>
        </SlideView>

        <SlideView key={`slide-down-2-${key}`} direction="down" duration={500}>
          <View style={[styles.box, { backgroundColor: '#FFC107' }]}>
            <Text style={styles.text}>Slide Down (0.5s)</Text>
          </View>
        </SlideView>

        <SlideView key={`slide-down-3-${key}`} direction="down" duration={2000}>
          <View style={[styles.box, { backgroundColor: '#FF5722' }]}>
            <Text style={styles.text}>Slide Down (2s)</Text>
          </View>
        </SlideView>
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
