import { View, Text, Pressable, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

function ColorFilter({ navigation }) {
  const color = require("../MOCK_DATA.json").map((item) => item.color);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Filtered")}
        >
          <Text>See your choices</Text>
        </Pressable>
      </View>
      <View style={styles.bla}>
        <Text>Press to select a color</Text>
        <SelectDropdown
          data={color}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
          rowTextForSelection={(item) => {
            return item;
          }}
        />
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
  bla: {
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
