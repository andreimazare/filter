import CarCard from "../components/CarCard";

import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
function LandingPage({ navigation }) {
  const carsData = require("../MOCK_DATA.json");
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Your car list</Text>
        </View>

        <View style={styles.filterButton}>
          <Pressable
            onPress={() => navigation.navigate("MakeFilter")}
            style={styles.button}
          >
            <Text style={styles.filterText}>
              Press here to choose your details{" "}
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={carsData}
          renderItem={(itemData) => {
            return (
              <CarCard
                id={itemData.item.id}
                make={itemData.item.make}
                model={itemData.item.model}
                color={itemData.item.color}
                year={itemData.item.year}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 30,
    marginBottom: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cccccc",
    width: "100%",
  },
  title: {
    fontSize: "25",
    fontWeight: "500",
    marginBottom: 30,
  },
  filterButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    borderRadius: 30,
    backgroundColor: "pink",
  },
  filterText: {
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    width: "100%",
  },
});
