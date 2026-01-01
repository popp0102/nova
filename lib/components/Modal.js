import { View, Text, Modal as RNModal, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "./Button";

export default function Modal({ visible, title, onConfirm, onClose, children }) {
  function handleOnConfirm() {
    onConfirm();
    onClose();
  }

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
          <View style={styles.footer}>
            <Button style={styles.button} onPress={onClose} type="secondary">Cancel</Button>
            <Button style={styles.button} onPress={handleOnConfirm}>Ok</Button>
          </View>
        </View>
     </SafeAreaView>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    width: "75%",
    padding: 8,
    borderRadius: 24,
    backgroundColor: "#CCCCCC",
  },
  header: {
    width: "100%",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  body: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    paddingVertical: 8,
  },
  button: {
    flex: 0.25,
  },
});

