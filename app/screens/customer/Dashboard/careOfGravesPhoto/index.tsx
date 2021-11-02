import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AuthContext from '../../../../context/auth/AuthContext';
import styles from './styles';
import utility from '../../../../utils/Utility';
import I18n from '../../../../../i18';
import Modal from 'react-native-modal';

interface IProps {
  navigation: any;
}

const CareGravePhoto: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

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
    };
    storage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.modelHeaderText}>Cделать фото могилы</Text>
      <Text style={{ width: '90%' }}>Описание</Text>
      <TextInput
        placeholder={'коментарии....'}
        numberOfLines={3}
        mode="outlined"
        multiline={true}
        style={{ width: '90%' }}
      />
      <Button
        style={{ width: '90%', marginTop: 20, backgroundColor: '#333333' }}
        mode="outlined"
        onPress={() => navigation.navigate('GeneratedOrder')}>
        <Text style={{ color: 'white' }}>Заказать</Text>
      </Button>
    </View>
  );
};

export default CareGravePhoto;
