import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';
import Spinner from 'react-native-loading-spinner-overlay';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
//import NavigationService from 'app/navigation/NavigationService';
import AuthContext from '../../context/auth/AuthContext';
import Validation from '../../components/validation';

interface IState {
  loginReducer: ILoginState;
}
interface IProps {
  navigation: any;
  route: any;
}
const Login: React.FC<IProps> = (props: IProps) => {
  const { navigation, route } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  //  const onForgot = () => NavigationService.navigate('ForgotPassword');
  // const onRegistration = () => NavigationService.navigate('Registration');

  const onForgot = () => navigation.navigate('ForgotPassword');
  const onRegistration = () => navigation.navigate('Registration');

  const authContext = useContext(AuthContext);
  const { signin, loading, menuBarShow, menuHamburger } = authContext;

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      menuBarShow(false);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        menuBarShow(true);
      };
    }, []),
  );

  const toast = useToast();

  const elements = {
    email: '12332@123.ru',
    password: '123321',
  };
  const [user, seTuser] = useState({ ...elements });
  const [passwordShow, seTpasswordShow] = useState(true);

  const handleChange = (val: string, fieldName: string) => {
    seTuser(prev => {
      const varPr = { ...prev };
      switch (fieldName) {
        case 'email':
          varPr.email = val;
          break;
        case 'password':
          varPr.password = val;
          break;
      }
      return varPr;
    });
  };

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
    if (user.password.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, password: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, password: false });
      }, 1000);
    }
    return err;
  };

  const onSubmit = () => {
    const err = validation();
    if (err) {
    } else {
      signin(user);
      //onLogin();
    }
    //
  };

  const validationElements = {
    email: false,
    password: false,
  };
  const [validObj, seTvalidObj] = useState({ ...validationElements });

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={'Загружается...'}
        textStyle={{ color: '#3498db' }}
      />
      <Text style={styles.loginHeaderText}>Войти</Text>
      <Text style={styles.signInText}>Введите ваш аккаунт</Text>

      <View style={{ marginTop: 20 }}>
        <Validation
          text={'E-mail'}
          visible={validObj.email}
          errText={'Email недействителень!'}
        />
      </View>

      <TextInput
        placeholder="example@100express.com"
        mode="outlined"
        style={styles.textInput}
        onChangeText={val => handleChange(val, 'email')}
        right={<TextInput.Icon name={require('../../assets/email.png')} />}
        value={user.email}
      />

      <View style={{ marginTop: 20 }}>
        <Validation
          text={'Пароль'}
          visible={validObj.password}
          errText={'Неправельный пароль!'}
        />
      </View>
      <TextInput
        mode="outlined"
        placeholder="Введите пароль"
        style={styles.textInput}
        onChangeText={val => handleChange(val, 'password')}
        right={
          <TextInput.Icon
            onPress={() => seTpasswordShow(!passwordShow)}
            name={require('../../assets/padlock.png')}
          />
        }
        secureTextEntry={passwordShow}
        value={user.password}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 15,
          marginBottom: 15,
          width: '95%',
        }}>
        <Button uppercase={false} mode="contained" onPress={onSubmit}>
          <Text style={styles.buttonText}>Войти</Text>
        </Button>
        <Button
          uppercase={false}
          style={{
            alignItems: 'flex-end',
          }}
          onPress={onRegistration}>
          Регистрация
        </Button>
      </View>

      <Text
        onPress={onForgot}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '95%',
          fontSize: 14,
          fontWeight: '600',
          color: '#3498db',
        }}>
        Забыли пароль?
      </Text>
    </View>
  );
};

export default Login;
