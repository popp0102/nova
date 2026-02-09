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
  return (
    <View style={styles.title}>
      <Heading size="h3" {...props}>{children}</Heading>
    </View>
  );
};

Form.Description = function FormDescription({ children, style }) {
  return <Text style={[styles.description, style]}>{children}</Text>;
};

Form.TextInput = function FormTextInput({ label, labelPosition = 'vertical', style, placeholderTextColor = '#999', value, onChangeText, keyboardType = 'default', error, ...props }) {
  const isHorizontal = labelPosition === 'horizontal';
  const containerStyle = isHorizontal ? styles.inputContainerHorizontal : styles.inputContainerVertical;
  const labelStyle = isHorizontal ? [styles.label, styles.labelHorizontal] : styles.label;
  const inputStyle = isHorizontal ? [styles.input, styles.inputHorizontal] : styles.input;
  const hasError = error && error.length > 0;
  const wrapperStyle = isHorizontal ? { flex: 1 } : { width: '100%' };

  const inputWithError = (
    <View style={wrapperStyle}>
      <TextInput
        style={[inputStyle, hasError && styles.inputError, style]}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...props}
      />
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );

  if (!label) {
    return (
      <View style={{ width: '100%', marginBottom: 16 }}>
        {inputWithError}
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      {inputWithError}
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
