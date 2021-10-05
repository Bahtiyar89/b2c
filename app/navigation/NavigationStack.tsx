/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';

import { navigationRef } from './NavigationService';
import Login from 'app/screens/Login';
import Dashboard from 'app/screens/Dashboard';
import ForgotPassword from 'app/screens/ForgotPassword';
//import DrawerNavigation from '../navigationScreens'
import ThemeController from '../components/ThemeController';
import { Image, StatusBar, Text } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';
import Rollouts from 'app/screens/Rollouts';
import AgentsObjectives from 'app/screens/AgentsObjectives';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import LogoIcon from './logoIcon';
import Registration from 'app/screens/Registration';

const Drawer = createDrawerNavigator();
const AuthDrawer = createDrawerNavigator();

const homeOptions = {
  title: 'Dashboard',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const AuthDrawerNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthDrawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
      <Drawer.Screen name="Registration" component={Registration} />
    </AuthDrawer.Navigator>
  );
};

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Drawer.Navigator
        drawerStyle={{
          width: 260,
          backgroundColor: '#3c4b64',
        }}
        drawerContentOptions={{
          activeTintColor: 'grey',
        }}
        screenOptions={{
          headerShown: isLoggedIn ? true : false,
          swipeEnabled: false,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3c4b64',
          },

          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        drawerContent={props => (
          <>
            <LogoIcon height={150} width={120} />
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label=""
                style={{ marginTop: 10 }}
                onPress={onLogout}
                icon={() => (
                  <>
                    <Image
                      source={require('../assets/lock.png')} //Change your icon image here
                      style={styles.icon}
                    />
                    <Text style={styles.logout}>Logout</Text>
                  </>
                )}
              />
              <DrawerItem
                label=""
                style={{ marginTop: 100 }}
                icon={() => <ThemeController />}
              />
            </DrawerContentScrollView>
          </>
        )}
        initialRouteName="Login">
        {isLoggedIn ? (
          <>
            <Drawer.Screen
              name="Dashboard"
              options={{
                title: 'Dashboard',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/speedometer.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={Dashboard}
            />
            <Drawer.Screen
              name="Rollouts"
              options={{
                title: 'Rollouts',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/options.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={Rollouts}
            />
            <Drawer.Screen
              name="Agents objectives"
              options={{
                title: 'Agents Objectives',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/color-circle.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={AgentsObjectives}
            />
          </>
        ) : (
          <Drawer.Screen name="Login" component={AuthDrawerNavigator} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
