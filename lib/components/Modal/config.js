import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  container: {
    width: "75%",
    padding: 8,
    borderRadius: 24,
    backgroundColor: "#fef8f0",
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
