import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button, TextInput, HelperText } from 'react-native-paper';
import Modal from 'react-native-modal';
import { TextInputMask } from 'react-native-masked-text';

//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AuthContext from '../../context/auth/AuthContext';
import NavigationService from 'app/navigation/NavigationService';
import AppStyles from '../../config/styles';
import styles from './styles';

interface IProps {
  navigation: any;
}
const MainScreen: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  //const dispatch = useDispatch();
  // const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onRegistrationExecutor = () =>
    navigation.navigate('RegistrationExecutor');
  //const onForgot = () => NavigationService.navigate('ForgotPassword');
  const authContext = useContext(AuthContext);
  const {
    register,
    approveVarify,
    varifyId,
    loading,
    modalVarify,
    modalVarifyUser,
    approveVarifyUser,
  } = authContext;

  const elements = {
    email: '',
    phone: '',
    password: '',
    password_confirm: '',
  };
  const [user, seTuser] = useState({ ...elements });

  const validationElements = {
    email: false,
    phone: false,
    password: false,
    password_confirm: false,
  };
  const [validObj, seTvalidObj] = useState({ ...validationElements });

  const validation = () => {
    let err = false;
    if (!user.email.includes('@')) {
      err = true;
      seTvalidObj({ ...validObj, email: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, email: false });
      }, 1000);
      return err;
    }

    if (user.phone.length < 6) {
      err = true;
      err = true;
      seTvalidObj({ ...validObj, phone: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, phone: false });
      }, 1000);
      return err;
    }
    if (user.password.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, password: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, password: false });
      }, 1000);
    }
    if (user.password !== user.password_confirm) {
      err = true;
      seTvalidObj({ ...validObj, password_confirm: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, password_confirm: false });
      }, 1000);
    }
    return err;
  };

  const registerUser = () => {
    let err = validation();

    if (err) {
    } else {
      const userObject = {
        email: '',
        password: '',
        phone: '',
      };
      userObject.phone = parseInt(user.phone.replace(/[^\d]+/g, '')).toString();
      userObject.email = user.email;
      userObject.password = user.password;

      register(userObject);
    }
  };
  const [varify, seTvarify] = useState(varifyId);
  const [varifyIdCode, seTvarifyIdCode] = useState({
    id: '',
    code: '12345',
  });
  const varifyCode = () => {
    approveVarify(varify);
  };
  const varifyUser = () => {
    approveVarifyUser(varifyIdCode, navigation);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Spinner
            visible={loading}
            textContent={'??????????????????????...'}
            textStyle={{ color: '#3498db' }}
          />
          <Text style={styles.loginHeaderText}>??????????????????????</Text>

          <View
            style={{ flexDirection: 'row', width: AppStyles.width90.width }}>
            <Text style={{ flex: 1 }}>E-mail</Text>
            <HelperText
              style={{ alignItems: 'flex-end' }}
              type="error"
              visible={validObj.email}>
              Email ??????????????????????????????!
            </HelperText>
          </View>
          <TextInput
            mode="outlined"
            style={{ width: AppStyles.width90.width }}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, email: val })}
            value={user.email}
          />

          <View
            style={{ flexDirection: 'row', width: AppStyles.width90.width }}>
            <Text style={{ flex: 1 }}>??????????????</Text>
            <HelperText
              style={{ alignItems: 'flex-end' }}
              type="error"
              visible={validObj.phone}>
              ?????????????? ??????????????????????????????!
            </HelperText>
          </View>
          <TextInput
            mode="outlined"
            style={{ width: AppStyles.width90.width }}
            render={props => (
              <TextInputMask
                type={'custom'}
                options={{
                  mask: '+9 (999) 999 99 99',
                }}
                onChangeText={val => seTuser({ ...user, phone: val })}
                placeholder="+ 7 (123) 123 12 34"
                value={user.phone}
              />
            )}
          />

          <View
            style={{ flexDirection: 'row', width: AppStyles.width90.width }}>
            <Text style={{ flex: 1 }}>????????????</Text>
            <HelperText
              style={{ alignItems: 'flex-end' }}
              type="error"
              visible={validObj.password}>
              ???????????? ??????????????????????????????!
            </HelperText>
          </View>
          <TextInput
            mode="outlined"
            style={{ width: AppStyles.width90.width }}
            placeholder="????????????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, password: val })}
            value={user.password}
            secureTextEntry={true}
          />

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              width: AppStyles.width90.width,
            }}>
            <Text style={{ flex: 1 }}>?????????????????? ????????????</Text>
            <HelperText
              style={{ alignItems: 'flex-end' }}
              type="error"
              visible={validObj.password_confirm}>
              ???????????? ??????????????????????!
            </HelperText>
          </View>
          <TextInput
            mode="outlined"
            style={{ width: AppStyles.width90.width }}
            placeholder="?????????????????? ????????????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, password_confirm: val })}
            value={user.password_confirm}
            secureTextEntry={true}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
              marginBottom: 15,
              width: AppStyles.width90.width,
            }}>
            <Button onPress={registerUser} uppercase={false} mode="contained">
              <Text style={styles.buttonText}>????????????????????????????????????</Text>
            </Button>

            <Text
              onPress={onRegistrationExecutor}
              style={{
                fontWeight: '400',
                color: AppStyles.color.COLOR_PRIMARY,
                marginRight: 10,
              }}>
              ?? ??????????????????????
            </Text>
          </View>
        </View>

        <Modal isVisible={modalVarify}>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.text}>?????? ?????? ??????????????????????: {varifyId}</Text>
            <TextInput
              mode="outlined"
              style={{ margin: 10 }}
              label="?????????????????????????? ????????????"
              underlineColorAndroid="transparent"
              onChangeText={val => seTvarify(val)}
              value={varify}
            />

            <Button mode="contained" onPress={varifyCode}>
              <Text style={styles.buttonText}>????????????????????</Text>
            </Button>
          </View>
        </Modal>
        <Modal isVisible={modalVarifyUser}>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.text}>?????? ?????????????????????????? id: {varifyId}</Text>
            <TextInput
              mode="outlined"
              style={{ margin: 10 }}
              label="?????????????????????????? ????????????"
              underlineColorAndroid="transparent"
              onChangeText={val =>
                seTvarifyIdCode({ ...varifyIdCode, id: val })
              }
              value={varifyIdCode.id}
            />
            <Text style={styles.text}>
              ?????? ????????????????????????: {varifyIdCode.code}
            </Text>
            <TextInput
              mode="outlined"
              style={{ margin: 10 }}
              label="?????????????????????????? ????????????"
              underlineColorAndroid="transparent"
              onChangeText={val =>
                seTvarifyIdCode({ ...varifyIdCode, code: val })
              }
              value={varifyIdCode.code}
            />
            <Button mode="contained" onPress={varifyUser}>
              <Text style={styles.buttonText}>????????????????????</Text>
            </Button>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
