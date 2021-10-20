import React, { useEffect, useState, useContext } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, TextInput, HelperText } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
//import NavigationService from 'app/navigation/NavigationService';
import AuthContext from '../../context/auth/AuthContext';
import utility from '../../utils/Utility';

interface IState {
  loginReducer: ILoginState;
}
interface IProps {
  navigation: any;
}
const Login: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  //  const onForgot = () => NavigationService.navigate('ForgotPassword');
  // const onRegistration = () => NavigationService.navigate('Registration');

  const onForgot = () => navigation.navigate('ForgotPassword');
  const onRegistration = () => navigation.navigate('Registration');

  const authContext = useContext(AuthContext);
  const { signin } = authContext;

  const toast = useToast();

  const elements = {
    email: '12332@123.ru',
    password: '123321',
  };
  const [user, seTuser] = useState({ ...elements });
  const [passwordShow, seTpasswordShow] = useState(true);

  useEffect(() => {
    const storage = async () => {
      let items = await utility.getItem('TOKEN');
      let user = await utility.getItem('USER');
      console.log('items 44:', items);
      console.log('user 55:', user);
    };
    storage();
  }, []);

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
    console.log('err: ', err);
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
      <Text style={styles.loginHeaderText}>Войти</Text>
      <Text style={styles.signInText}>Введите ваш аккаунт</Text>

      <View style={{ flexDirection: 'row', width: '90%' }}>
        <Text style={{ flex: 1 }}>E-mail</Text>
        <HelperText
          style={{ alignItems: 'flex-end' }}
          type="error"
          visible={validObj.email}>
          Email недействителень!
        </HelperText>
      </View>

      <TextInput
        placeholder="example@100express.com"
        mode="outlined"
        style={styles.textInput}
        onChangeText={val => handleChange(val, 'email')}
        right={<TextInput.Icon name={require('../../assets/email.png')} />}
        value={user.email}
      />

      <View style={{ marginTop: 20, flexDirection: 'row', width: '90%' }}>
        <Text style={{ flex: 1 }}>Пароль</Text>
        <HelperText
          style={{ alignItems: 'flex-end' }}
          type="error"
          visible={validObj.password}>
          Неправельный пароль!
        </HelperText>
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
      {/*
        <View style={styles.SectionStyle}>
          <TextInput
            mode="outlined"
            label="Email"
            style={styles.textInput}
            onChangeText={val => handleChange(val, 'email')}
            right={<TextInput.Icon name={require('../../assets/user-4.png')} />}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            mode="outlined"
            label="Введите пароль"
            style={styles.textInput}
            onChangeText={val => handleChange(val, 'email')}
            right={
              <TextInput.Icon
                onPress={() => seTpasswordShow(!passwordShow)}
                name={require('../../assets/padlock.png')}
              />
            }
            secureTextEntry={passwordShow}
          />
        </View>
          */}
      <View style={styles.rowDirection}>
        <View>
          <Button mode="contained" onPress={onSubmit}>
            <Text style={styles.buttonText}>Войти</Text>
          </Button>
          <Button onPress={onForgot}>Забыли пароль?</Button>
        </View>

        <Button
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}
          onPress={onRegistration}>
          Регистрация
        </Button>
      </View>
    </View>
  );
};

export default Login;
