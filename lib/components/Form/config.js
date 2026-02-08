import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    alignItems: "stretch",
    marginHorizontal: 16,
    gap: 16,
  },
  description: {
    textAlign: 'center',
  },
  inputContainer: {
    width: "100%",
  },
  inputContainerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputContainerVertical: {
    flexDirection: 'column',
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '800',
    color: '#333',
  },
  labelHorizontal: {
    minWidth: 80,
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
  inputHorizontal: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
});
