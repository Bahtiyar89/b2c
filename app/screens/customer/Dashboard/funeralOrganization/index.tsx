import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Button, TextInput, Checkbox, Text, Card } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
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

const FuneralOrganization: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;
  console.log('FuneralOrganization: ');

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
  const [checked, setChecked] = useState(false);
  const from = [
    {
      value: 'fromMorg',
      label: 'Из морга',
    },
    {
      value: 'fromHome',
      label: 'Из дома',
    },
  ];
  const religion = [
    {
      value: 'islam',
      label: 'Ислам',
    },
    {
      value: 'сhristianity',
      label: 'Христианство',
    },
    {
      value: 'judaism',
      label: 'Иудаизм',
    },
  ];
  const [morgHome, seTmorgHome] = useState('');
  const [dreligion, seTdreligion] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.buttonMenuContainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 26,
          }}>
          Организация похорон
        </Text>

        <Text
          style={{
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Местоположение умершего
        </Text>
        <Text style={{ width: '90%', paddingTop: '2%' }}>Город</Text>
        <TextInput label={'Город'} mode="outlined" style={{ width: '90%' }} />
        <View style={{ flexDirection: 'row', width: '95%' }}>
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={'#397AF9'}
          />
          <Text style={{ flex: 1, margin: 8, color: '#979797' }}>
            Похороны в том же городе
          </Text>
        </View>
        <Text style={{ width: '90%', paddingTop: '2%' }}>
          Укажите город захоронения
        </Text>
        <TextInput
          label={'В случае непостовления чекбокса'}
          mode="outlined"
          style={{ width: '90%' }}
        />
        <Text style={{ width: '90%', paddingTop: '2%' }}>Укажите кладбище</Text>
        <TextInput
          label={'Укажите кладбище'}
          mode="outlined"
          style={{ width: '90%' }}
        />
        <View style={{ height: 65, width: '90%' }}>
          <Dropdown
            mode="outlined"
            label="Забрать умершего"
            data={from}
            value={morgHome}
            onChange={val => seTmorgHome(val)}
          />
        </View>
        <View style={{ height: 65, width: '90%' }}>
          <Dropdown
            mode="outlined"
            label="Религия умершего"
            data={religion}
            value={dreligion}
            onChange={val => seTdreligion(val)}
          />
        </View>
        <View style={{ height: 65, width: '90%' }}>
          <Dropdown
            mode="outlined"
            label="Тип захоронения"
            data={religion}
            value={dreligion}
            onChange={val => seTdreligion(val)}
          />
        </View>

        <Button
          style={{ width: '90%', marginTop: 20, backgroundColor: '#333333' }}
          mode="contained"
          onPress={() => seTmodelCareGrave(true)}>
          <Text style={{ color: 'white' }}>Продолжить</Text>
        </Button>

        <Modal isVisible={modelCareGrave}>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.modelContainer}>
                <Text style={{ fontSize: 18, textAlign: 'center' }}>
                  Пакеты услуг по организации похорон
                </Text>

                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                    </View>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>
                      Похороны под ключ 1
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                      Эконом вариант
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text style={{ fontSize: 18, paddingTop: 5 }}>
                        30 000 руб
                      </Text>
                      <Button
                        labelStyle={{ fontSize: 18 }}
                        //onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Подробнее
                      </Button>
                    </View>
                  </Card.Content>
                </Card>

                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                    </View>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>
                      Похороны под ключ 1
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                      Эконом вариант
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text style={{ fontSize: 18, paddingTop: 5 }}>
                        60 000 руб
                      </Text>
                      <Button
                        labelStyle={{ fontSize: 18 }}
                        //onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Подробнее
                      </Button>
                    </View>
                  </Card.Content>
                </Card>

                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                      <Button
                        disabled
                        labelStyle={{ fontSize: 24 }}
                        icon="star">
                        {''}
                      </Button>
                    </View>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>
                      Похороны под ключ 1
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                      Эконом вариант
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text style={{ fontSize: 18, paddingTop: 5 }}>
                        120 000 руб
                      </Text>
                      <Button
                        labelStyle={{ fontSize: 18 }}
                        //onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Подробнее
                      </Button>
                    </View>
                  </Card.Content>
                </Card>
                <Button
                  uppercase={false}
                  //onPress={() => navigation.navigate('ServiceForYourself')}
                >
                  Выбрать услугу самому
                </Button>
                <Button
                  labelStyle={{ color: 'red', marginBottom: 10 }}
                  onPress={() => seTmodelCareGrave(false)}>
                  Cancel
                </Button>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Modal>
      </View>
    </View>
  );
};

export default FuneralOrganization;
