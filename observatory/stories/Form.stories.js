import { useState } from 'react';
import { View, StyleSheet } from "react-native";
import Form from "../../lib/components/Form";

export default {
  title: "Components/Form",
  component: Form,
};

export const Default = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Form>
        <Form.Title>Basic Form</Form.Title>
        <Form.Description>Fill out the form below</Form.Description>
        <Form.TextInput
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Form.TextInput
          label="Description"
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />
        <Form.SubmitButton onPress={() => alert(`Name: ${name}, Description: ${description}`)}>
          Submit
        </Form.SubmitButton>
      </Form>
    </View>
  );
};

export const WithIcon = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Form>
        <Form.Title>Login Form</Form.Title>
        <Form.Description>Enter your credentials</Form.Description>
        <Form.TextInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Form.TextInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Form.SubmitButton
          icon={{ name: "arrow-forward", position: "right" }}
          onPress={() => alert('Login submitted')}
        >
          Login
        </Form.SubmitButton>
      </Form>
    </View>
  );
};

export const HorizontalLabels = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const ageError = age && parseInt(age) < 0 ? 'Age cannot be negative' : '';

  return (
    <View style={styles.container}>
      <Form>
        <Form.Title>Horizontal Labels</Form.Title>
        <Form.Description>Labels positioned to the left of inputs</Form.Description>
        <Form.TextInput
          label="First Name"
          labelPosition="horizontal"
          placeholder="John"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Form.TextInput
          label="Last Name"
          labelPosition="horizontal"
          placeholder="Doe"
          value={lastName}
          onChangeText={setLastName}
        />
        <Form.TextInput
          label="Age"
          labelPosition="horizontal"
          keyboardType="number-pad"
          placeholder="25"
          value={age}
          onChangeText={setAge}
          error={ageError}
        />
        <Form.SubmitButton onPress={() => alert('Submitted')}>
          Submit
        </Form.SubmitButton>
      </Form>
    </View>
  );
};

export const InputTypes = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <Form>
        <Form.Title>Keyboard Types</Form.Title>
        <Form.Description>Different keyboard types for different inputs</Form.Description>
        <Form.TextInput
          label="Email"
          keyboardType="email-address"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
        />
        <Form.TextInput
          label="Phone"
          keyboardType="phone-pad"
          placeholder="(555) 123-4567"
          value={phone}
          onChangeText={setPhone}
        />
        <Form.TextInput
          label="Age"
          keyboardType="number-pad"
          placeholder="25"
          value={age}
          onChangeText={setAge}
        />
        <Form.SubmitButton onPress={() => alert('Submitted')}>
          Submit
        </Form.SubmitButton>
      </Form>
    </View>
  );
};

export const WithValidation = () => {
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const ageError = age && parseInt(age) < 0 ? 'Age cannot be negative' : '';
  const emailError = email && !email.includes('@') ? 'Please enter a valid email' : '';

  return (
    <View style={styles.container}>
      <Form>
        <Form.Title>Form Validation</Form.Title>
        <Form.Description>Try entering a negative age or invalid email</Form.Description>
        <Form.TextInput
          label="Age"
          keyboardType="number-pad"
          placeholder="25"
          value={age}
          onChangeText={setAge}
          error={ageError}
        />
        <Form.TextInput
          label="Email"
          keyboardType="email-address"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          error={emailError}
        />
        <Form.SubmitButton onPress={() => alert('Submitted')}>
          Submit
        </Form.SubmitButton>
      </Form>
    </View>
  );
};

export const MultipleInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Form>
        <Form.Title>Registration</Form.Title>
        <Form.Description>Create your account</Form.Description>
        <Form.TextInput
          label="First Name"
          placeholder="Enter first name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Form.TextInput
          label="Last Name"
          placeholder="Enter last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Form.TextInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Form.TextInput
          label="Phone"
          placeholder="(555) 123-4567"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Form.SubmitButton
          icon={{ name: "check-circle", position: "right" }}
          onPress={() => alert('Registration submitted')}
        >
          Register
        </Form.SubmitButton>
      </Form>
    </View>
  );
};

export const WithCustomFont = () => {
  const [huntName, setHuntName] = useState('');
  const [huntDescription, setHuntDescription] = useState('');

  return (
    <View style={styles.container}>
      <Form>
        <Form.Title fontFamily="Chewy">Hunt Creation</Form.Title>
        <Form.Description>
          Setup your first hunt here. Pick a name and a description so players know what adventure they're in for!
        </Form.Description>
        <Form.TextInput
          label="Hunt Name"
          placeholder="Enter hunt name"
          value={huntName}
          onChangeText={setHuntName}
        />
        <Form.TextInput
          label="Description (optional)"
          placeholder="Enter description"
          value={huntDescription}
          onChangeText={setHuntDescription}
        />
        <Form.SubmitButton
          icon={{ name: "arrow-forward", position: "right" }}
          onPress={() => alert('Hunt created')}
        >
          Continue
        </Form.SubmitButton>
      </Form>
    </View>
  );
};

export const NoLabels = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Form>
        <Form.Title>Without Labels</Form.Title>
        <Form.Description>Form inputs without labels</Form.Description>
        <Form.TextInput
          placeholder="Enter something"
          value={value}
          onChangeText={setValue}
        />
        <Form.SubmitButton onPress={() => alert(`Value: ${value}`)}>
          Go
        </Form.SubmitButton>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
});
