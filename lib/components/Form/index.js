import { Text, TextInput, View } from 'react-native';
import Card from '../Card';
import Heading from '../Heading';
import Button from '../Button';
import { styles } from './config';

export default function Form({ children, style }) {
  return (
    <Card style={[styles.card, style]}>
      {children}
    </Card>
  );
}

Form.Title = function FormTitle({ children, ...props }) {
  return <Heading size="h3" {...props}>{children}</Heading>;
};

Form.Description = function FormDescription({ children, style }) {
  return <Text style={[styles.description, style]}>{children}</Text>;
};

Form.TextInput = function FormTextInput({ label, labelPosition = 'vertical', type, style, placeholderTextColor = '#999', value, onChangeText, keyboardType, ...props }) {
  const isHorizontal = labelPosition === 'horizontal';
  const containerStyle = isHorizontal ? styles.inputContainerHorizontal : styles.inputContainerVertical;
  const labelStyle = isHorizontal ? [styles.label, styles.labelHorizontal] : styles.label;
  const inputStyle = isHorizontal ? [styles.input, styles.inputHorizontal] : styles.input;

  // Map type to keyboardType if not explicitly provided
  let finalKeyboardType = keyboardType;
  if (type === 'number' && !keyboardType) {
    finalKeyboardType = 'number-pad';
  } else if (type === 'email' && !keyboardType) {
    finalKeyboardType = 'email-address';
  } else if (type === 'phone' && !keyboardType) {
    finalKeyboardType = 'phone-pad';
  }

  if (!label) {
    return (
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        keyboardType={finalKeyboardType}
        {...props}
      />
    );
  }

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={[inputStyle, style]}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        keyboardType={finalKeyboardType}
        {...props}
      />
    </View>
  );
};

Form.SubmitButton = function FormSubmitButton({ children, icon, ...props }) {
  return (
    <View style={styles.buttonContainer}>
      <Button icon={icon} {...props}>{children}</Button>
    </View>
  );
};
