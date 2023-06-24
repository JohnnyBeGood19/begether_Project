import { createStackNavigator } from "@react-navigation/stack";
import { Loader } from "../screens/Loader";
import { Home } from "../screens/Home";
import { Demo } from "../screens/Demo";
import { Demo2 } from "../screens/Demo2";
import { Demo3 } from "../screens/Demo3";
import { Demo4 } from "../screens/Demo4";
import { Loader2 } from "../screens/Loader2";
import { HomePage } from "../screens/HomePage";




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
      <Stack.Screen
        name="Demo3"
        component={Demo3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Demo4"
        component={Demo4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Loader2"
        component={Loader2}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
