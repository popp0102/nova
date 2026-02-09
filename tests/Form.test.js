import { render, fireEvent } from '@testing-library/react-native';
import Form from '@nova/Form';

describe('Form', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <Form>
        <Form.Title>Test Form</Form.Title>
      </Form>
    );
    expect(getByText('Test Form')).toBeTruthy();
  });

  it('renders Form.Title', () => {
    const { getByText } = render(<Form.Title>Form Title</Form.Title>);
    expect(getByText('Form Title')).toBeTruthy();
  });

  it('renders Form.Description', () => {
    const { getByText } = render(<Form.Description>Form description text</Form.Description>);
    expect(getByText('Form description text')).toBeTruthy();
  });

  it('renders Form.TextInput with placeholder', () => {
    const { getByPlaceholderText } = render(
      <Form.TextInput placeholder="Enter text" />
    );
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('renders Form.TextInput with label', () => {
    const { getByText, getByPlaceholderText } = render(
      <Form.TextInput label="Username" placeholder="Enter username" />
    );
    expect(getByText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Enter username')).toBeTruthy();
  });

  it('renders Form.TextInput with horizontal label', () => {
    const { getByText } = render(
      <Form.TextInput label="Email" labelPosition="horizontal" placeholder="Enter email" />
    );
    expect(getByText('Email')).toBeTruthy();
  });

  it('renders Form.TextInput without label', () => {
    const { getByPlaceholderText } = render(
      <Form.TextInput placeholder="Enter text" />
    );
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('handles Form.TextInput value changes', () => {
    const mockOnChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <Form.TextInput
        placeholder="Enter text"
        value=""
        onChangeText={mockOnChangeText}
      />
    );

    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'new value');
    expect(mockOnChangeText).toHaveBeenCalledWith('new value');
  });

  it('renders Form.SubmitButton', () => {
    const { getByText } = render(
      <Form.SubmitButton>Submit</Form.SubmitButton>
    );
    expect(getByText('Submit')).toBeTruthy();
  });

  it('calls onPress when Form.SubmitButton is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Form.SubmitButton onPress={mockOnPress}>Submit</Form.SubmitButton>
    );

    fireEvent.press(getByText('Submit'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders complete form with all components', () => {
    const mockOnPress = jest.fn();
    const mockOnChangeText = jest.fn();

    const { getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Complete Form</Form.Title>
        <Form.Description>This is a test form</Form.Description>
        <Form.TextInput
          placeholder="Name"
          value=""
          onChangeText={mockOnChangeText}
        />
        <Form.SubmitButton onPress={mockOnPress}>Submit</Form.SubmitButton>
      </Form>
    );

    expect(getByText('Complete Form')).toBeTruthy();
    expect(getByText('This is a test form')).toBeTruthy();
    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();
  });

  it('displays error message when error prop is provided', () => {
    const { getByText } = render(
      <Form.TextInput
        label="Age"
        placeholder="Enter age"
        value="-5"
        onChangeText={() => {}}
        error="Age cannot be negative"
      />
    );
    expect(getByText('Age cannot be negative')).toBeTruthy();
  });

  it('does not display error message when error prop is empty', () => {
    const { queryByText } = render(
      <Form.TextInput
        label="Age"
        placeholder="Enter age"
        value="25"
        onChangeText={() => {}}
        error=""
      />
    );
    expect(queryByText('Age cannot be negative')).toBeNull();
  });
});
