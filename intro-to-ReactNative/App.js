import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import MenuItems from "./Components/MenuItems";
import Feedback from "./Components/Feedback";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{
            headerStyle: { backgroundColor: "#F4CE14" },
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="Menu" component={MenuItems} />
          <Stack.Screen name="Feedback" component={Feedback} />
        </Stack.Navigator>
      </View> */}
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon : ({ focused, color, size}) => {
            let iconName;
            if (route.name === "Menu") {
              iconName = focused ?
              "ios-information-circle" :
              "ios-information-circle-outline"
            } else if (route.name ==="Feedback") {
              iconName ="ios-list"
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        })}>
          <Tab.Screen name="Menu" component={MenuItems} />
          <Tab.Screen name="Feedback" component={Feedback} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
