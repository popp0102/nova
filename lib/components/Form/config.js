import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
  },
  description: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  inputContainerHorizontal: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
    paddingBottom: 8,
  },
  inputContainerVertical: {
    width: "100%",
    flexDirection: 'column',
    gap: 4,
    marginBottom: 24,
    paddingBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '800',
    color: '#333',
  },
  labelHorizontal: {
    minWidth: 80,
  },
  required: {
    color: '#dc3545',
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#000",
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    minHeight: 50,
  },
  textArea: {
    minHeight: 100,
    paddingTop: 14,
  },
  inputError: {
    borderColor: "#dc3545",
    borderWidth: 2,
  },
  inputHorizontal: {
    flex: 1,
  },
  errorText: {
    color: "#dc3545",
    fontSize: 14,
    marginTop: 4,
  },
  title: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 4,
  },
  submitButton: {
    minWidth: 100,
  },
});
