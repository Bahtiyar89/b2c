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

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import AuthContext from '../../context/auth/AuthContext';
import NavigationService from 'app/navigation/NavigationService';

const MainScreen = () => {
  const elements = {
    email: '',
    password: '',
    phone: '',
  };
  const [user, seTuser] = useState({ ...elements });
  const [password_confirm, seTpassword_confirm] = useState('');
  const [modal, seTmodal] = useState(false);
  const [modalPerformer, seTmodalPerformer] = useState(false);
  const [performer, seTperformer] = useState(false);

  const approvePhone = () => {
    seTmodal(false);
    NavigationService.navigate('Login');
    //register(user);
  };

  const registerUser = () => {
    console.log('performer: ', performer);
    seTmodal(false);
    seTmodalPerformer(false);
  };

  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  //const onForgot = () => NavigationService.navigate('ForgotPassword');
  const authContext = useContext(AuthContext);
  const { register, error } = authContext;

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
            label="Телефон"
            onChangeText={val => handleChange(val, 'phone')}
            value={user.phone}
            keyboardType={'numbers-and-punctuation'}
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
          {performer && (
            <TextInput
              mode="outlined"
              style={styles.textInput}
              label="Код регистрации"
              underlineColorAndroid="transparent"
              onChangeText={val => seTpassword_confirm(val)}
              value={password_confirm}
              secureTextEntry={true}
            />
          )}
          <View style={styles.rowDirection}>
            <Button
              mode="contained"
              onPress={() => seTmodal(true)}
              style={styles.rowButton}>
              <Text style={styles.buttonText}>Зарегистрироваться</Text>
            </Button>
            <Button
              style={styles.forgotStyle}
              onPress={() => {
                seTperformer(!performer);
                seTmodal(true);
              }}>
              <Text style={{ fontSize: 12 }}>
                {performer ? '' : 'Я исполнитель'}
              </Text>
            </Button>
          </View>
        </View>
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

        <Modal isVisible={modalPerformer}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={{ backgroundColor: 'white' }}>
              <Text style={styles.textPerformer}>
                Введите данные организации
              </Text>
              <TextInput
                mode="outlined"
                style={{ margin: 10 }}
                label="Юридический адрес"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />

              <TextInput
                mode="outlined"
                style={{ margin: 10 }}
                label="ИНН"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />

              <TextInput
                mode="outlined"
                style={{ margin: 10 }}
                placeholder="КПП"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />

              <TextInput
                mode="outlined"
                style={{ margin: 10 }}
                placeholder="ОГРН"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />

              <TextInput
                mode="outlined"
                style={{ margin: 10 }}
                placeholder="Расчетный счет"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />

              <TextInput
                mode="outlined"
                style={{ margin: 10 }}
                placeholder="Регион"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />

              <TextInput
                mode="outlined"
                style={{ margin: 10 }}
                placeholder="Рабочий телефон"
                underlineColorAndroid="transparent"
                onChangeText={val => handleChange(val, 'password')}
                value={user.password}
              />
              <Button
                style={{ margin: 10 }}
                mode="contained"
                onPress={registerUser}>
                <Text style={styles.buttonText}>Зарегистрироваться</Text>
              </Button>
            </View>
          </ScrollView>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
