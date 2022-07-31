import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Students from './src/Screens/Students';
import StudentDetail from './src/Screens/StudentDetail';
import { View, Text, I18nManager } from 'react-native';
import { Provider } from 'react-redux'
import useFonts from './src/hooks/useFonts';
import { store } from './src/redux/store'
import Authentication from './src/components/Authentication';
import './src/translation/i18n';
import { removeLang } from './src/hooks/useStorage';


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

  const remove = async () => {
    await removeLang()
  }

  // remove()

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
