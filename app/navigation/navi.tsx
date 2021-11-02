import React, { useContext } from 'react';
import { View, Button, StatusBar } from 'react-native';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ThemeController from '../components/ThemeController';
import AuthContext from '../context/auth/AuthContext';

import Login from 'app/screens/Login';
import ForgotPassword from 'app/screens/ForgotPassword';
import Registration from '../screens/Registration';
import Home from './drawer';
import CareOfGraves from '../screens/customer/Dashboard/careOfGraves';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const AuthNavigator = () => {
  const authContext = useContext(AuthContext);
  const { isSigned, signOut, user } = authContext;
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Профиль',
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isSigned ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />

      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          title: 'Регистрация',
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isSigned ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = (isSigned: any) => {
  return (
    <LoggedInStack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        options={{
          title: '',
        }}
        component={Home}
      />
      <Stack.Screen
        name="CareOfGraves"
        options={{
          title: '222',
        }}
        component={CareOfGraves}
      />
    </LoggedInStack.Navigator>
  );
};

interface IProps {
  theme: Theme;
}
const Navigation: React.FC<IProps> = (props: IProps) => {
  const authContext = useContext(AuthContext);
  const { isSigned, signOut, user } = authContext;
  const { theme } = props;
  console.log('isSigned:', isSigned);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator headerMode="none">
        {isSigned ? (
          <Stack.Screen name="Home" component={LoggedInNavigator} />
        ) : (
          <Stack.Screen
            name="Home"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
