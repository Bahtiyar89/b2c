import React, { useContext } from 'react';
import { Button, View, Text, Image, StatusBar } from 'react-native';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import { ILoginState } from 'app/models/reducers/login';
import LogoIcon from './logoIcon';
import ThemeController from '../components/ThemeController';
import Rollouts from 'app/screens/Rollouts';
import OpMain from 'app/screens/OpMain';
import ZnpMain from 'app/screens/ZnpMain';
import TombFind from 'app/screens/TombFind';
import RitualGoods from 'app/screens/RitualGoods';
import MainPerformer from 'app/screens/MainPerformer';
import Dashboard from 'app/screens/Dashboard';
import styles from './styles';
import Login from 'app/screens/Login';
import ForgotPassword from 'app/screens/ForgotPassword';
import Registration from 'app/screens/Registration/regist';
import AuthContext from '../context/auth/AuthContext';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}

interface IProps {
  theme: Theme;
}

interface IState {
  loginReducer: ILoginState;
}

const Navigation: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  const authContext = useContext(AuthContext);
  const { isSigned } = authContext;

  const signOut = () => {
    onLogout();
  };
  return (
    <NavigationContainer theme={theme}>
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
          headerShown: isSigned,
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
        initialRouteName="Root"
        drawerContent={props => {
          return (
            <>
              <LogoIcon height={100} width={100} />
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                  label=""
                  style={{ marginTop: 10 }}
                  onPress={() => {
                    props.navigation.closeDrawer();
                    signOut();
                  }}
                  icon={() => (
                    <>
                      <Image
                        source={require('../assets/lock.png')} //Change your icon image here
                        style={styles.icon}
                      />
                      <Text style={styles.logout}>Выйти</Text>
                    </>
                  )}
                />
                <DrawerItem
                  label=""
                  onPress={() => console.log('pressed')}
                  style={{ marginTop: 0 }}
                  icon={() => <ThemeController />}
                />
              </DrawerContentScrollView>
            </>
          );
        }}>
        {isSigned ? (
          <>
            <Drawer.Screen
              name="Dashboard"
              options={{
                title: 'Главная',
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
                title: 'Узм главная',
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
              name="Op Main"
              options={{
                title: 'Оп главная',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/color-circle.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={OpMain}
            />

            <Drawer.Screen
              name="Zp Main"
              options={{
                title: 'Знп главная',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/main-idea.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={ZnpMain}
            />

            <Drawer.Screen
              name="Find Tomb"
              options={{
                title: 'Найти могилу',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/gravestone.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={TombFind}
            />

            <Drawer.Screen
              name="Ritual goods"
              options={{
                title: 'Ритуальные товары',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/ritual.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={RitualGoods}
            />

            <Drawer.Screen
              name="Main Performer"
              options={{
                title: 'Гл-й исполнитель',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/growth.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={MainPerformer}
            />
          </>
        ) : (
          <Drawer.Screen name="Root" component={Root} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
