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

Form.TextInput = function FormTextInput({ label, labelPosition = 'vertical', style, placeholderTextColor = '#999', value, onChangeText, keyboardType = 'default', error, required, ...props }) {
  const isHorizontal = labelPosition === 'horizontal';
  const containerStyle = isHorizontal ? styles.inputContainerHorizontal : styles.inputContainerVertical;
  const labelStyle = isHorizontal ? [styles.label, styles.labelHorizontal] : styles.label;
  const inputStyle = isHorizontal ? [styles.input, styles.inputHorizontal] : styles.input;
  const hasError = error && error.length > 0;
  const wrapperStyle = isHorizontal ? { flex: 1 } : { width: '100%' };

  const inputField = (
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
        {inputField}
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={labelStyle}>{label}</Text>
        <Text style={[styles.required, !required && { opacity: 0 }]}>*</Text>
      </View>
      {inputField}
    </View>
  );
};

Form.TextArea = function FormTextArea({ label, labelPosition = 'vertical', style, placeholderTextColor = '#999', value, onChangeText, error, required, ...props }) {
  const isHorizontal = labelPosition === 'horizontal';
  const containerStyle = isHorizontal ? styles.inputContainerHorizontal : styles.inputContainerVertical;
  const labelStyle = isHorizontal ? [styles.label, styles.labelHorizontal] : styles.label;
  const inputStyle = isHorizontal ? [styles.input, styles.inputHorizontal] : styles.input;
  const hasError = error && error.length > 0;
  const wrapperStyle = isHorizontal ? { flex: 1 } : { width: '100%' };

  const inputField = (
    <View style={wrapperStyle}>
      <TextInput
        style={[inputStyle, styles.textArea, hasError && styles.inputError, style]}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        {...props}
      />
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );

  if (!label) {
    return (
      <View style={{ width: '100%', marginBottom: 16 }}>
        {inputField}
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={labelStyle}>{label}</Text>
        <Text style={[styles.required, !required && { opacity: 0 }]}>*</Text>
      </View>
      {inputField}
    </View>
  );
};

Form.SubmitButton = function FormSubmitButton({ children, icon, disabled, ...props }) {
  return (
    <View style={styles.buttonContainer}>
      <Button icon={icon} disabled={disabled} {...props}>{children}</Button>
    </View>
  );
};
