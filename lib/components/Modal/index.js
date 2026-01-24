import { View, Text, Modal as RNModal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../Button";
import { styles } from './config';

export default function Modal({ visible, title, onConfirm, onClose, children, includeFooter = true }) {
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
          { includeFooter &&
            <View style={styles.footer}>
              <Button style={styles.button} onPress={onClose} type="secondary">Cancel</Button>
              <Button style={styles.button} onPress={onConfirm}>Ok</Button>
            </View>
          }
        </View>
     </SafeAreaView>
    </RNModal>
  );
}
