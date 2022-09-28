import { StyleSheet, View } from "react-native";
import LandingPage from "./pages/LandingPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MakeFilter from "./pages/MakeFilter";
import ModelFilter from "./pages/ModelFilter";
import ColorFilter from "./pages/ColorFilter";
import Filtered from "./pages/Filtered";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="MakeFilter" component={MakeFilter} />
        <Stack.Screen name="ModelFilter" component={ModelFilter} />
        <Stack.Screen name="ColorFilter" component={ColorFilter} />
        <Stack.Screen name="Filtered" component={Filtered} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
