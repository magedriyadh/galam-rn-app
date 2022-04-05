import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Students from './src/Screens/Students';
import StudentDetail from './src/Screens/StudentDetail';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import useFonts from './src/hooks/useFonts';


const Stack = createNativeStackNavigator();

const App = () => {
  const { loaded } = useFonts()

  console.log(loaded)
  if (!loaded) {
    return (
      <View>
        <Text>
          Loadding ...
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StudentDetail"
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Students"
            component={Students}
            tabBar={() => null}
            options={{
              headerShown: false,
            }}
          />        
          <Stack.Screen
            name="StudentDetail"
            component={StudentDetail}
            tabBar={() => null}
            options={{
              headerShown: false,
            }}
          />        
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
