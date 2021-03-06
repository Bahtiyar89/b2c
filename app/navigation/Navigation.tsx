import React, { useContext } from 'react';
import { Button, View, Text, Image, StatusBar } from 'react-native';
import { NavigationContainer, Theme, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Portal, FAB, DefaultTheme, Avatar } from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
//import { useDispatch, useSelector } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';

//import * as loginActions from 'app/store/actions/loginActions';
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
import RegistrationExecutor from 'app/screens/Registration/executor';
import AuthContext from '../context/auth/AuthContext';

import CustomerDashboard from '../screens/customer/Dashboard';
import CustomerAddCard from '../screens/customer/AddCard';
import CustomerBasket from '../screens/customer/Basket';
import CustomerOrderHistory from '../screens/customer/OrderHistory';
import CustomerSelected from '../screens/customer/Selected';
import CustomerSettings from '../screens/customer/Settings';
import CustomerSupport from '../screens/customer/Support';
//main page customer
import CareOfGraves from '../screens/customer/Dashboard/careOfGraves';
import RitualGoodsCustomer from '../screens/customer/Dashboard/ritualGoods/index';
import ChooseService from '../screens/customer/Dashboard/ChooseService';
import CareOfGravesPhoto from '../screens/customer/Dashboard/careOfGravesPhoto';
import GeneratedOrder from '../screens/customer/generatedOrder';
import ServiceForYourself from '../screens/customer/Dashboard/serviceForYourself';
import ServiceForYourselfSub from 'app/screens/customer/Dashboard/serviceForYourselfSub';
import ProductOpts from 'app/screens/customer/Dashboard/serviceForYourselfSub/productOpts';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function NotSignedIn() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '???????? ?? ????????????????????',
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          title: '???????????? ????????????',
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{
          title: '??????????????????????',
        }}
        name="Registration"
        component={Registration}
      />
      <Stack.Screen
        options={{
          title: '?????????????????????? ??????????????????????',
        }}
        name="RegistrationExecutor"
        component={RegistrationExecutor}
      />
      <Stack.Screen
        options={{
          title: 'careOfGraves',
        }}
        name="careOfGraves"
        component={CareOfGraves}
      />
    </Stack.Navigator>
  );
}

function SignedIn() {
  return (
    <Stack.Navigator initialRouteName="customerDashboard" headerMode="none">
      {/* customer dashboard menu */}
      <Stack.Screen
        options={{
          title: '????????',
        }}
        name="customerDashboard"
        component={CustomerDashboard}
      />
      <Stack.Screen
        options={{
          title: '?????????? ??????????',
        }}
        name="ChooseService"
        component={ChooseService}
      />
      <Stack.Screen
        options={{
          title: 'CareOfGraves',
        }}
        name="CareOfGraves"
        component={CareOfGraves}
      />
      <Stack.Screen
        options={{
          title: 'CareOfGravesPhoto',
        }}
        name="CareOfGravesPhoto"
        component={CareOfGravesPhoto}
      />

      <Stack.Screen
        options={{
          title: 'RitualGoodsCustomer',
        }}
        name="RitualGoodsCustomer"
        component={RitualGoodsCustomer}
      />

      <Stack.Screen
        options={{
          title: '??????',
        }}
        name="GeneratedOrder"
        component={GeneratedOrder}
      />
      <Stack.Screen
        options={{
          title: 'ServiceForYourself',
        }}
        name="ServiceForYourself"
        component={ServiceForYourself}
      />
      <Stack.Screen
        options={{
          title: 'ServiceForYourselfSub',
        }}
        name="ServiceForYourselfSub"
        component={ServiceForYourselfSub}
      />
      <Stack.Screen
        options={{
          title: 'productOps',
        }}
        name="productOps"
        component={ProductOpts}
      />
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
  //const isLoggedIn = useSelector((state: IState) => state.loginReducer.isLoggedIn);
  //const dispatch = useDispatch();
  //const onLogout = () => dispatch(loginActions.logOut());

  const authContext = useContext(AuthContext);
  const { isSigned, signOut, user, menuHamburger } = authContext;

  const toast = useToast();

  const signOutUser = () => {
    //onLogout();
    signOut();
  };

  console.log('menuHamburger ', menuHamburger);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        backgroundColor="grey"
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      <Drawer.Navigator
        drawerStyle={{
          width: 260,
          backgroundColor: '#3c4b64',
        }}
        drawerContentOptions={{
          activeTintColor: 'grey',
        }}
        screenOptions={{
          headerShown: menuHamburger,
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
        initialRouteName="CustomerDashboard"
        drawerContent={props => {
          return (
            <>
              {isSigned && (
                <Avatar.Image
                  size={100}
                  source={require('../assets/growth.png')}
                />
              )}
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                {isSigned && (
                  <DrawerItem
                    label=""
                    style={{ marginTop: 10 }}
                    onPress={() => {
                      props.navigation.closeDrawer();
                      signOutUser();
                    }}
                    icon={() => (
                      <>
                        <Image
                          source={require('../assets/lock.png')} //Change your icon image here
                          style={styles.icon}
                        />
                        <Text style={styles.logout}>??????????</Text>
                      </>
                    )}
                  />
                )}
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
        {!isSigned && (
          <>
            <Drawer.Screen
              name="Login"
              options={{
                title: '??????????',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/lock.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={NotSignedIn}
            />
          </>
        )}
        <Drawer.Screen
          name="CustomerDashboard"
          options={{
            title: '??????????????',
            drawerIcon: focused => (
              <View>
                <Image
                  source={require('../assets/speedometer.png')} //Change your icon image here
                  style={styles.icon}
                />
              </View>
            ),
          }}
          component={SignedIn}
        />
        {isSigned && (
          <>
            <Drawer.Screen
              name="CustomerOrderHistory"
              options={{
                title: '?????????????? ??????????????',
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
                title: '??????????????????',
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
                title: '??????????????',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/vegetables.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={CustomerBasket}
            />
            {/*
            <Drawer.Screen
              name="CustomerAddCard"
              options={{
                title: '???????????????? ??????????',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/map.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={CustomerAddCard}
            />
            */}
            <Drawer.Screen
              name="CustomerSettings"
              options={{
                title: '??????????????????',
                drawerIcon: focused => (
                  <Image
                    source={require('../assets/setting.png')} //Change your icon image here
                    style={styles.icon}
                  />
                ),
              }}
              component={CustomerSettings}
            />
          </>
        )}
        <Drawer.Screen
          name="CustomerSupport"
          options={{
            title: '???????????? ??????????????????',
            drawerIcon: focused => (
              <Image
                source={require('../assets/call-center.png')} //Change your icon image here
                style={styles.icon}
              />
            ),
          }}
          component={CustomerSupport}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
