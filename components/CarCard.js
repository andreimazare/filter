import { View, Text, StyleSheet } from "react-native";

function CarCard({ make, model, color, year }) {
  return (
    <View style={styles.container}>
      <Text>Make: {make}</Text>

      <Text>Model: {model}</Text>

      <Text>Color: {color}</Text>

      <Text>Year: {year}</Text>
    </View>
  );
}

export default CarCard;
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: "100%",
  },
});
