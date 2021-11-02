import React, { useContext, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Button, TextInput, HelperText, Text } from 'react-native-paper';
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
    };
    storage();
  }, []);

  const [modelCareGrave, seTmodelCareGrave] = useState(false);

  const navigateGravePhoto = () => {
    seTmodelCareGrave(false);
    navigation.navigate('CareOfGravesPhoto');
  };

  const navigateServiceYourself = () => {
    seTmodelCareGrave(false);
    navigation.navigate('ServiceForYourself');
  };

  console.log('modelCareGrave:', modelCareGrave);

  return (
    <View style={styles.container}>
      <View style={styles.buttonMenuContainer}>
        <Text
          style={{
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
              onPress={navigateGravePhoto}
              uppercase={false}
              icon="chevron-right"
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Сделать фото могилы
            </Button>

            <Button
              onPress={navigateServiceYourself}
              uppercase={false}
              icon="chevron-right"
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Выбрать услуги самому
            </Button>

            <Text style={{ padding: 10, fontSize: 20, textAlign: 'center' }}>
              Комплексы
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Комплекс 1</Text>
                <Text style={{ textAlign: 'center' }}>от 53600 руб</Text>
              </View>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Комплекс 2</Text>
                <Text style={{ textAlign: 'center' }}>от 78500 руб</Text>
              </View>
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Комплекс 3</Text>
                <Text style={{ textAlign: 'center' }}>от 84000 руб</Text>
              </View>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Комплекс 4</Text>
                <Text style={{ textAlign: 'center' }}>от 71000 руб</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CareGrave;
