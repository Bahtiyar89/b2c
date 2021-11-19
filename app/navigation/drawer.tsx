import React, { Fragment, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Portal, FAB, DefaultTheme, Avatar } from 'react-native-paper';
import LogoIcon from './logoIcon';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import styles from './styles';
import ThemeController from '../components/ThemeController';
import AuthContext from '../context/auth/AuthContext';

import CustomerDashboard from '../screens/customer/Dashboard';
import CustomerBasket from '../screens/customer/Basket';
import CustomerOrderHistory from '../screens/customer/OrderHistory';
import CustomerSelected from '../screens/customer/Selected';
import CustomerSettings from '../screens/customer/Settings';
import CustomerSupport from '../screens/customer/Support';
import CareOfGraves from '../screens/customer/Dashboard/careOfGraves';

import Rollouts from 'app/screens/Rollouts';
import OpMain from 'app/screens/OpMain';
import ZnpMain from 'app/screens/ZnpMain';
import TombFind from 'app/screens/TombFind';
import RitualGoods from 'app/screens/RitualGoods';
import MainPerformer from 'app/screens/MainPerformer';
import Dashboard from 'app/screens/Dashboard';
import Login from 'app/screens/Login';
import ForgotPassword from 'app/screens/ForgotPassword';
import Registration from 'app/screens/Registration/regist';
import RegistrationExecutor from 'app/screens/Registration/executor';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const Drawer = createDrawerNavigator();
  const authContext = useContext(AuthContext);
  const { isSigned, signOut, user } = authContext;

  return (
    <Fragment>
      <Drawer.Navigator
        drawerStyle={{
          width: 260,
          backgroundColor: '#3c4b64',
        }}
        drawerContentOptions={{
          activeTintColor: 'grey',
        }}
        screenOptions={{
          headerShown: true,
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
        drawerContent={props => {
          return (
            <>
              <Avatar.Image
                size={100}
                source={require('../assets/gubin.png')}
              />
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                  label=""
                  style={{ marginTop: 10 }}
                  onPress={() => console.log('sss')}
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
        {isSigned && user.role.length > 2 ? (
          <>
            <Drawer.Screen
              name="CustomerDashboard"
              options={{
                title: 'Главная',
                drawerIcon: focused => (
                  <View>
                    <Image
                      source={require('../assets/speedometer.png')} //Change your icon image here
                      style={styles.icon}
                    />
                  </View>
                ),
              }}
              component={CustomerDashboard}
            />
            <Drawer.Screen
              name="CustomerOrderHistory"
              options={{
                title: 'История заказов',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/checklist.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={CustomerOrderHistory}
            />
            <Drawer.Screen
              name="Dashboard"
              options={{
                title: 'Избранное',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/rating.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={CustomerSelected}
            />
            <Drawer.Screen
              name="CustomerBasket"
              options={{
                title: 'Корзина',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/vegetables.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={CustomerBasket}
            />

            <Drawer.Screen
              name="CustomerSettings"
              options={{
                title: 'Настройка',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/setting.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={CustomerSettings}
            />
            <Drawer.Screen
              name="CustomerSupport"
              options={{
                title: 'Служба поддержки',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/call-center.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={CustomerSupport}
            />
          </>
        ) : (
          <>
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
        )}
      </Drawer.Navigator>
    </Fragment>
  );
};

export default Home;
