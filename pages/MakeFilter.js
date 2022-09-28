import { View, Text, Pressable, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

function MakeFilter({ navigation }) {
  const make = require("../MOCK_DATA.json").map((item) => item.make);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("ModelFilter")}
        >
          <Text>Press to choose model</Text>
        </Pressable>
      </View>
      <View style={styles.bla}>
        <Text>Select a make</Text>
        <SelectDropdown
          data={make}
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

export default MakeFilter;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 40,
    width: "100%",
    flex: 1,
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
