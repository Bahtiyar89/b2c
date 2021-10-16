import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import { useToast } from 'react-native-toast-notifications';

import AuthContext from '../../context/auth/AuthContext';

interface IState {
  loginReducer: ILoginState;
}

const Registration: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  //const onForgot = () => NavigationService.navigate('ForgotPassword');
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return null;
  }

  const elements = {
    email: '',
    password: '',
    phone: '',
  };
  const [user, seTuser] = useState({ ...elements });
  const [password_confirm, seTpassword_confirm] = useState('');
  const [performer, seTperformer] = useState(false);
  const toast = useToast();
  const handleChange = (val: string, fieldName: string) => {
    seTuser(prev => {
      const varPr = { ...prev };
      switch (fieldName) {
        case 'email':
          varPr.email = val;
          break;
        case 'phone':
          varPr.phone = val;
          break;
        case 'password':
          varPr.password = val;
          break;
      }
      return varPr;
    });
  };

  const handleValidation = () => {
    let errors = { phone: '', password: '' };
    let formIsValid = true;
    //Email
    if (!user.email) {
      formIsValid = false;
      toast.show('Введите email', {
        type: 'warning',
        duration: 1000,
        animationType: 'zoom-in',
      });
      return;
    }
    if (!user.phone) {
      formIsValid = false;
      toast.show('Введите телефон', {
        type: 'warning',
        duration: 1000,
        animationType: 'zoom-in',
      });
      return;
    }
    //password
    if (!user.password) {
      formIsValid = false;
      toast.show('Введите пароль', {
        type: 'warning',
        duration: 1000,
        animationType: 'zoom-in',
      });
      return;
    }
    //password
    if (user.password != password_confirm) {
      formIsValid = false;
      toast.show('пароль не совпадают друг другу', {
        type: 'warning',
        duration: 1000,
        animationType: 'zoom-in',
      });
      return;
    }
    return formIsValid;
  };

  const onSubmit = () => {
    let errors = handleValidation();
    if (errors === null || errors === undefined || errors != true) {
      toast.show('Что то не так попробуйте по пожже', {
        type: 'warning',
        duration: 1000,
        animationType: 'zoom-in',
      });
    } else {
      onLogin();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.loginHeaderText}>Регистрация</Text>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={val => handleChange(val, 'email')}
            value={user.email}
          />
        </View>

        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Телефон"
            underlineColorAndroid="transparent"
            onChangeText={val => handleChange(val, 'phone')}
            value={user.phone}
            keyboardType={'numbers-and-punctuation'}
          />
        </View>

        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Пароль"
            underlineColorAndroid="transparent"
            onChangeText={val => handleChange(val, 'password')}
            value={user.password}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.textInput}
            placeholder="Подтверждения пароля"
            underlineColorAndroid="transparent"
            onChangeText={val => seTpassword_confirm(val)}
            value={password_confirm}
            secureTextEntry={true}
          />
        </View>
        {performer ? (
          <>
            <Text style={{ color: 'blue', fontSize: 20 }}>
              {'Введите данные организации'}
            </Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textInput}
                placeholder="Юридический адрес"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textInput}
                placeholder="ИНН"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textInput}
                placeholder="КПП"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textInput}
                placeholder="ОГРН"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textInput}
                placeholder="Расчетный счет"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textInput}
                placeholder="Регион"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textInput}
                placeholder="Рабочий телефон"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />
            </View>
          </>
        ) : (
          <></>
        )}

        <View style={styles.rowDirection}>
          <Button mode="outlined" onPress={onSubmit} style={styles.rowButton}>
            <Text style={styles.buttonText}>Зарегистрировать</Text>
          </Button>
          <Text
            style={styles.forgotStyle}
            onPress={() => seTperformer(!performer)}>
            {performer ? 'Я не исполнитель' : 'Я исполнитель'}
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Registration;
