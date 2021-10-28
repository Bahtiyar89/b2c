import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Button as But,
} from 'react-native';
import { Button, Portal, TextInput } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
import Modal from 'react-native-modal';
import { TextInputMask } from 'react-native-masked-text';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import AuthContext from '../../context/auth/AuthContext';
import NavigationService from 'app/navigation/NavigationService';

interface IProps {
  navigation: any;
}
const MainScreen: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  const elements = {
    email: '',
    password: '',
    phone: '',
  };
  const [user, seTuser] = useState({ ...elements });
  const [password_confirm, seTpassword_confirm] = useState('');
  const [modal, seTmodal] = useState(false);
  const [modalVarify, seTmodalVarify] = useState(false);

  const approvePhone = () => {
    seTmodal(false);
    NavigationService.navigate('Login');
  };

  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onRegistrationExecutor = () =>
    navigation.navigate('RegistrationExecutor');
  //const onForgot = () => NavigationService.navigate('ForgotPassword');
  const authContext = useContext(AuthContext);
  const { register, approveVarify, error, varifyId } = authContext;

  const [varify, seTvarify] = useState(varifyId);

  const registerUser = () => {
    const userObject = {
      email: '',
      password: '',
      phone: '',
    };
    userObject.phone = parseInt(user.phone.replace(/[^\d]+/g, '')).toString();
    userObject.email = user.email;
    userObject.password = user.password;

    register(userObject);
    seTmodalVarify(true);
  };
  const handleChange = (val: any, fieldName: any) => {
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
  console.log('varifyId:', varifyId);
  const varifyCode = () => {
    approveVarify(varify, navigation);
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.loginHeaderText}>Регистрация</Text>
          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Email"
            underlineColorAndroid="transparent"
            onChangeText={val => handleChange(val, 'email')}
            value={user.email}
          />

          <TextInput
            mode="outlined"
            style={styles.textInput}
            render={props => (
              <TextInputMask
                type={'custom'}
                options={{
                  mask: '+9 (999) 999 99 99',
                }}
                onChangeText={val => handleChange(val, 'phone')}
                placeholder="+ 7 (123) 123 12 34"
                value={user.phone}
              />
            )}
          />

          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Пароль"
            underlineColorAndroid="transparent"
            onChangeText={val => handleChange(val, 'password')}
            value={user.password}
            secureTextEntry={true}
          />

          <TextInput
            mode="outlined"
            style={styles.textInput}
            label="Подтверждения пароля"
            underlineColorAndroid="transparent"
            onChangeText={val => seTpassword_confirm(val)}
            value={password_confirm}
            secureTextEntry={true}
          />

          <View style={styles.rowDirection}>
            <Button
              mode="contained"
              onPress={registerUser}
              style={styles.rowButton}>
              <Text style={styles.buttonText}>Зарегистрироваться</Text>
            </Button>
            <Button style={styles.forgotStyle} onPress={onRegistrationExecutor}>
              <Text style={{ fontSize: 12 }}>Я исполнитель</Text>
            </Button>
          </View>
        </View>

        <Modal isVisible={modalVarify}>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.text}>Код для варификации {varifyId}</Text>
            <TextInput
              mode="outlined"
              style={{ margin: 10 }}
              label="Подтверждения пароля"
              underlineColorAndroid="transparent"
              onChangeText={val => seTvarify(val)}
              value={varify}
            />

            <Button mode="contained" onPress={varifyCode}>
              <Text style={styles.buttonText}>Продолжить</Text>
            </Button>
          </View>
        </Modal>

        <Modal isVisible={modal}>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.text}>
              На телефон +7... выслан код подтверждения
            </Text>
            <Text style={styles.text}>код подтверждения</Text>
            <TextInput
              mode="outlined"
              style={{ margin: 10 }}
              label="Подтверждения пароля"
              underlineColorAndroid="transparent"
              onChangeText={val => seTpassword_confirm(val)}
              value={password_confirm}
            />
            <Text style={styles.text}>Отправить повторную через...</Text>
            <Button mode="contained" onPress={approvePhone}>
              <Text style={styles.buttonText}>Продолжить</Text>
            </Button>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
