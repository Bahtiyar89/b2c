import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onRegistration = () => NavigationService.navigate('Registration');

  const elements = {
    email: '',
    password: '',
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

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.loginHeaderText}>Login</Text>
        <Text style={styles.signInText}>Sign in to your account</Text>

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
        <View style={styles.rowDirection}>
          <View>
            <Button mode="contained" onPress={onLogin}>
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
    </View>
  );
};

export default Login;
