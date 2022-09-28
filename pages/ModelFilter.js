import { View, Text, Pressable, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

function ModelFilter({ navigation }) {
  const model = require("../MOCK_DATA.json").map((item) => item.model);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("ColorFilter")}
        >
          <Text>Press to choose color</Text>
        </Pressable>
      </View>
      <View style={styles.bla}>
        <Text>Select a make</Text>
        <SelectDropdown
          data={model}
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

export default ModelFilter;
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
