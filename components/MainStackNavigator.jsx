import { createStackNavigator } from "@react-navigation/stack";
import { Loader } from "../screens/Loader";
import { Home } from "../screens/Home";
import { Demo } from "../screens/Demo";
import { Demo2 } from "../screens/Demo2";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Loader">
      <Stack.Screen
        name="Loader"
        component={Loader}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Demo"
        component={Demo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Demo2"
        component={Demo2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
