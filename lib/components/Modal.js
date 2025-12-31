import { View, Text, Modal as RNModal, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Modal({ visible, title, onClose, children }) {
  return (
    <RNModal visible={visible} transparent={true} onRequestClose={onClose}>
      <SafeAreaView style={styles.backdrop}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.body}>
            {children}
          </View>
        </View>
     </SafeAreaView>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    paddingVertical: 16,
    borderRadius: 24,
    backgroundColor: 'yellow',
  },
  header: {
    width: "100%",
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  body: {
    marginTop: 8,
    paddingHorizontal: 16,
    gap: 8,
  },
});

