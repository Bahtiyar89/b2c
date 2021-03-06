import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Button as But,
} from 'react-native';
import { Button, Portal, TextInput, HelperText } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
import Modal from 'react-native-modal';
import { TextInputMask } from 'react-native-masked-text';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import AuthContext from '../../context/auth/AuthContext';
import NavigationService from 'app/navigation/NavigationService';
import Validation from '../../components/validation';

interface IProps {
  navigation: any;
}

const Executor: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  const elements = {
    email: '',
    phone: '',
    password: '',
    password_confirm: '',
    code: '123',
    adress: '',
    inn: '',
    kpp: '',
    ogrn: '',
    checkingAccount: '',
    region: '',
    workingPhone: '',
    startWorking: '2020-12-11',
    endWorking: '2025-12-11',
  };
  const [user, seTuser] = useState({ ...elements });

  const validationElements = {
    email: false,
    phone: false,
    password: false,
    password_confirm: false,
    code: false,
    adress: false,
    inn: false,
    kpp: false,
    ogrn: false,
    checkingAccount: false,
    region: false,
    workingPhone: false,
    startWorking: false,
    endWorking: false,
  };
  const [validObj, seTvalidObj] = useState({ ...validationElements });

  const [password_confirm, seTpassword_confirm] = useState('');
  const [modal, seTmodal] = useState(false);
  const [modalExecutor, seTmodalExecutor] = useState(false);
  const [executor, seTexecutor] = useState(false);

  const approvePhone = () => {
    seTmodal(false);
    NavigationService.navigate('Login');
    //register(user);
  };

  /*const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  //const onForgot = () => NavigationService.navigate('ForgotPassword');
  */
  const authContext = useContext(AuthContext);
  const { register, error } = authContext;

  const validation = () => {
    let err = false;
    if (!user.email.includes('@')) {
      err = true;
      seTvalidObj({ ...validObj, email: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, email: false });
      }, 5000);
      return err;
    }

    if (user.phone.length < 6) {
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
      }, 3000);
      return;
    }
    if (user.password !== user.password_confirm) {
      err = true;
      seTvalidObj({ ...validObj, password_confirm: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, password_confirm: false });
      }, 3000);
      return;
    }
    if (user.code.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, code: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, code: false });
      }, 1000);
      return;
    }
    if (user.adress.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, adress: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, adress: false });
      }, 3000);
      return;
    }
    if (user.inn.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, inn: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, inn: false });
      }, 3000);
      return;
    }
    if (user.kpp.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, kpp: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, kpp: false });
      }, 3000);
      return;
    }
    if (user.ogrn.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, ogrn: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, ogrn: false });
      }, 3000);
      return;
    }
    if (user.checkingAccount.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, checkingAccount: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, checkingAccount: false });
      }, 3000);
      return;
    }
    if (user.region.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, region: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, region: false });
      }, 3000);
      return err;
    }
    if (user.workingPhone.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, workingPhone: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, workingPhone: false });
      }, 3000);
    }
    return err;
  };
  const registerUser = () => {
    let err = validation();

    console.log('err: ', err);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.loginHeaderText}>??????????????????????</Text>

          <Validation
            text={'E-mail'}
            visible={validObj.email}
            errText={'Email ??????????????????????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, email: val })}
            value={user.email}
          />

          <Validation
            text={'??????????????'}
            visible={validObj.phone}
            errText={'?????????????? ??????????????????????????????!'}
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
                onChangeText={val => seTuser({ ...user, phone: val })}
                placeholder="+ 7 (123) 123 12 34"
                value={user.phone}
              />
            )}
          />

          <Validation
            text={'????????????'}
            visible={validObj.password}
            errText={'???????????? ??????????????????????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="????????????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, password: val })}
            value={user.password}
            secureTextEntry={true}
          />

          <Validation
            text={'?????????????????? ????????????'}
            visible={validObj.password_confirm}
            errText={'???????????? ??????????????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="?????????????????? ????????????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, password_confirm: val })}
            value={user.password_confirm}
            secureTextEntry={true}
          />

          <Validation
            text={'??????'}
            visible={validObj.code}
            errText={'???????? ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="??????"
            onChangeText={val => seTuser({ ...user, code: val })}
            value={user.code}
            keyboardType={'numbers-and-punctuation'}
          />

          <Validation
            text={'??????????'}
            visible={validObj.adress}
            errText={'?????????? ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            numberOfLines={3}
            multiline={true}
            style={styles.textInput}
            placeholder="adress"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, adress: val })}
            value={user.adress}
            secureTextEntry={true}
          />

          <Validation
            text={'??????'}
            visible={validObj.inn}
            errText={'?????? ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="??????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, inn: val })}
            value={user.inn}
          />

          <Validation
            text={'??????'}
            visible={validObj.kpp}
            errText={'?????? ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="??????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, kpp: val })}
            value={user.kpp}
          />

          <Validation
            text={'OGNR'}
            visible={validObj.ogrn}
            errText={'OGNR ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="OGNR"
            onChangeText={val => seTuser({ ...user, ogrn: val })}
            value={user.ogrn}
          />

          <Validation
            text={'???????????????? ????????????????'}
            visible={validObj.checkingAccount}
            errText={'???????? ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="???????????????? ????????????????"
            onChangeText={val => seTuser({ ...user, checkingAccount: val })}
            value={user.checkingAccount}
          />

          <Validation
            text={'????????????'}
            visible={validObj.region}
            errText={'???????? ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="????????????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, region: val })}
            value={user.region}
          />

          <Validation
            text={'?????????????? ??????????????'}
            visible={validObj.workingPhone}
            errText={'?????????????? ??????????????????????????????!'}
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
                onChangeText={val => seTuser({ ...user, workingPhone: val })}
                placeholder="+ 7 (123) 123 12 34"
                value={user.workingPhone}
              />
            )}
          />

          <Validation
            text={'???????????? ????????????'}
            visible={validObj.startWorking}
            errText={'???????? ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="?????????????????? ????????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, startWorking: val })}
            value={user.startWorking}
          />

          <Validation
            text={'?????????? ????????????'}
            visible={validObj.endWorking}
            errText={'???????? ???? ???????????? ???????? ????????????!'}
          />
          <TextInput
            mode="outlined"
            style={styles.textInput}
            placeholder="????????????"
            underlineColorAndroid="transparent"
            onChangeText={val => seTuser({ ...user, endWorking: val })}
            value={user.endWorking}
          />

          <Button
            style={{ flex: 1, width: '95%', margin: 10 }}
            mode="contained"
            onPress={registerUser}>
            <Text style={styles.buttonText}>????????????????????????????????????</Text>
          </Button>
        </View>
        <Modal isVisible={modal}>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.text}>
              ???? ?????????????? +7... ???????????? ?????? ??????????????????????????
            </Text>
            <Text style={styles.text}>?????? ??????????????????????????</Text>
            <TextInput
              mode="outlined"
              style={{ margin: 10 }}
              label="?????????????????????????? ????????????"
              underlineColorAndroid="transparent"
              onChangeText={val => seTpassword_confirm(val)}
              value={password_confirm}
            />
            <Text style={styles.text}>?????????????????? ?????????????????? ??????????...</Text>
            <Button mode="contained" onPress={approvePhone}>
              <Text style={styles.buttonText}>????????????????????</Text>
            </Button>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Executor;
