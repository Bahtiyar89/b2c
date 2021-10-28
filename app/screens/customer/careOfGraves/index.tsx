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

const CareGrave: React.FC<IProps> = (props: IProps) => {
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

  const [modelCareGrave, seTmodelCareGrave] = useState(false);
  const [modelPhoto, seTmodelPhoto] = useState(false);

  const modelOkCareGrave = () => {
    seTmodelCareGrave(false);
    navigation.navigate('CareOfGravesPhoto');
  };

  console.log('modelCareGrave:', modelCareGrave);
  console.log('modelPhoto:', modelPhoto);

  return (
    <View style={styles.container}>
      <View style={styles.buttonMenuContainer}>
        <Text
          style={{
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 26,
          }}>
          Уход за могилами
        </Text>

        <Text
          style={{
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Местоположение захоронения
        </Text>
        <Text style={{ width: '90%', paddingTop: '2%' }}>Страна</Text>
        <TextInput
          label={'Москва, ул. Леонова, д. 35'}
          mode="outlined"
          style={{ width: '90%' }}
        />
        <Text style={{ width: '90%', paddingTop: '2%' }}>Регион</Text>
        <TextInput
          label={'Москва, ул. Леонова, д. 35'}
          mode="outlined"
          style={{ width: '90%' }}
        />
        <Text style={{ width: '90%', paddingTop: '2%' }}>Город</Text>
        <TextInput
          label={'Москва, ул. Леонова, д. 35'}
          mode="outlined"
          style={{ width: '90%' }}
        />
        <Text style={{ width: '90%', paddingTop: '2%' }}>Кладбище</Text>
        <TextInput
          label={'Москва, ул. Леонова, д. 35'}
          mode="outlined"
          style={{ width: '90%' }}
        />

        <Button
          style={{ width: '90%', marginTop: 20, backgroundColor: '#333333' }}
          mode="contained"
          onPress={() => seTmodelCareGrave(true)}>
          <Text style={{ color: 'white' }}>Перейти к услугам</Text>
        </Button>

        <Modal isVisible={modelCareGrave}>
          <View style={styles.modelContainer}>
            <Text style={styles.modelHeaderText}>Уход за могилами</Text>
            <Button
              onPress={modelOkCareGrave}
              uppercase={false}
              icon="chevron-right"
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Сделать фото могилы
            </Button>

            <Button
              onPress={() => seTmodelCareGrave(!modelCareGrave)}
              uppercase={false}
              icon="chevron-right"
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Выбрать услугу самому
            </Button>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CareGrave;
