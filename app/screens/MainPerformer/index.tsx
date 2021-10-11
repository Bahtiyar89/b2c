/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
  navigation: any;
}

const Details: React.FC<IState> = ({ navigation }: IState) => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  const onForgot = () => NavigationService.navigate('ForgotPassword');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button
          mode="outlined"
          onPress={() => navigation.push('Login')}
          style={styles.button}>
          <Text style={styles.text}>Agents Objectives Screen</Text>
        </Button>
      </View>
    </View>
  );
};

export default Details;
