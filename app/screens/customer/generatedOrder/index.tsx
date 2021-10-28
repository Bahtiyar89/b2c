import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AuthContext from '../../../context/auth/AuthContext';
import styles from './styles';
import utility from '../../../utils/Utility';
import I18n from '../../../../i18';
import Modal from 'react-native-modal';

interface IProps {
  navigation: any;
}

const GeneratedOrder: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;
  console.log('navigation: ', navigation);

  //const dispatch = useDispatch();
  //const onLogout = () => dispatch(loginActions.logOut());
  const authContext = useContext(AuthContext);
  const { signOut } = authContext;

  const toast = useToast();

  const onLogout = () => {
    signOut();
  };
  useEffect(() => {
    const storage = async () => {
      let user = await utility.getItemObject('user');

      toast.show('Добро пожаловать: ' + user?.role!, {
        type: 'success',
        duration: 5000,
        animationType: 'zoom-in',
      });
    };
    storage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.modelHeaderText}>Cформированный заказ</Text>
      <Text style={{ width: '90%' }}>Данные о захоронении</Text>
      <TextInput
        placeholder={'Ф.И.О'}
        mode="outlined"
        style={{ width: '90%' }}
      />
      <Text style={{ width: '90%' }}>Др-Дс</Text>
      <TextInput
        placeholder={'Ф.И.О'}
        mode="outlined"
        style={{ width: '90%' }}
      />
      <Text style={{ width: '90%' }}>Местоположение</Text>
      <TextInput
        placeholder={'Ф.И.О'}
        mode="outlined"
        style={{ width: '90%' }}
      />
      <Button
        style={{ width: '90%', marginTop: 20, backgroundColor: '#333333' }}
        mode="outlined"
        onPress={() => console.log('ddd')}>
        <Text style={{ color: 'white' }}>Выбрать захоронение</Text>
      </Button>
    </View>
  );
};

export default GeneratedOrder;
