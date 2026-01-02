import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import SlideView from '../../lib/components/animations/SlideView';
import Button from '../../lib/components/Button';

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
