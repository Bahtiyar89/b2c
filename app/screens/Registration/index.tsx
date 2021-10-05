import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}

const Registration: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const elements = {
    email: '',
    password: '',
  };
  const [user, seTuser] = useState({ ...elements });

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
        <Text style={styles.loginHeaderText}>Registration</Text>
        <Text style={styles.signInText}>Sign in to your account</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../assets/user-4.png')} //Change your icon image here
            style={styles.ImageStyle}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={val => handleChange(val, 'email')}
            value={user.email}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Image
            source={require('../../assets/padlock.png')} //Change your icon image here
            style={styles.ImageStyle}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
            onChangeText={val => handleChange(val, 'password')}
            value={user.password}
          />
        </View>
        <View style={styles.rowDirection}>
          <Button mode="outlined" onPress={onLogin} style={styles.rowButton}>
            <Text style={styles.buttonText}>Login</Text>
          </Button>
          <Text style={styles.forgotStyle} onPress={onForgot}>
            Forgot Password
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Registration;
