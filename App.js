import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Students from './src/Screens/Students';
import StudentDetail from './src/Screens/StudentDetail';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import useFonts from './src/hooks/useFonts';
// import useStorage from './src/hooks/useStorage';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import Authentication from './src/components/Authentication';

const Stack = createNativeStackNavigator();

const App = () => {
  const { loaded } = useFonts();

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
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Authentication>
            <Stack.Navigator
              initialRouteName="Login"
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
          </Authentication>
      </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
