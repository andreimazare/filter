import { View, Text, Pressable, StyleSheet } from "react-native";

function ColorFilter({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("LandingPage")}
        >
          <Text>Go back to main page</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ColorFilter;
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 40,
    width: "100%",
  },
  button: {
    padding: 20,
    borderWidth: 0.2,
    backgroundColor: "#cccccc",
    width: "50%",
    borderRadius: 30,

    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
