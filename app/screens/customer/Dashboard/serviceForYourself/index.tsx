import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { Card, Button, TextInput, HelperText, Text } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
import { Dropdown, MultiselectDropdown } from 'sharingan-rn-modal-dropdown';
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

const ServiceForYourself: React.FC<IProps> = (props: IProps) => {
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

  const [modelServices, seTmodelServices] = useState(false);

  const modelOkServices = () => {
    seTmodelServices(!modelServices);
  };

  const [lang, seTlang] = useState('');

  const data = [
    {
      value: 'inst',
      label: 'Установка',
    },
    {
      value: 'str',
      label: 'Демонтаж',
    },
    {
      value: 'change',
      label: 'Замена',
    },
    {
      value: 'reg',
      label: 'Реставрация',
    },
    {
      value: 'cor',
      label: 'Поправка',
    },
  ];
  const [fences, seTfences] = useState('');
  const dataFences = [
    {
      value: 'inst',
      label: 'Установка',
    },
    {
      value: 'str',
      label: 'Демонтаж',
    },
    {
      value: 'change',
      label: 'Замена',
    },
  ];

  const [flowers, seTflowers] = useState('');
  const dataFlowers = [
    {
      value: 'inst',
      label: 'Установка',
    },
    {
      value: 'str',
      label: 'Демонтаж',
    },
    {
      value: 'change',
      label: 'Замена',
    },
  ];

  const [churchService, seTchurchService] = useState('');
  const dataChurchServices = [];

  const [vases, seTvases] = useState('');
  const dataVases = [
    {
      value: 'inst',
      label: 'Установка',
    },
    {
      value: 'str',
      label: 'Демонтаж',
    },
    {
      value: 'change',
      label: 'Замена',
    },
  ];

  const dataClean = [
    {
      value: 'set1',
      label: 'Набор 1',
    },
    {
      value: 'set2',
      label: 'Набор 2',
    },
  ];
  const onChangeSS = (value: string) => {
    seTlang(value);
  };
  const onChangeFences = (value: string) => {
    seTfences(value);
  };
  const onChangeFlowers = (value: string) => {
    seTflowers(value);
  };
  const onChangeImposition = (value: string) => {
    seTchurchService(value);
  };

  const onChangeClean = (value: string) => {
    console.log('value:', value);

    seTmodalClean(!modalClean);
    // seTcleanValue(value);
  };
  const [modalClean, seTmodalClean] = useState(false);
  const [cleanValue, seTcleanValue] = useState('');

  const onChangeVases = (value: string) => {
    seTvases(value);
  };
  const [valueMS, setValueMS] = useState<string[]>([]);

  const dataImp = [
    {
      value: 'basket',
      label: 'Корзина',
    },
    {
      value: 'fl',
      label: 'Цветы',
    },
    {
      value: 'wr',
      label: 'Венки',
    },
  ];
  const onChangeMS = (value: string[]) => {
    setValueMS(value);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 26,
              textAlign: 'center',
            }}>
            Уход за могилами
          </Text>
          <Text>Выбрать услуги самому</Text>
          <View style={{ height: 65, width: '90%' }}>
            <Dropdown
              mode="outlined"
              label="Памятники"
              data={data}
              value={lang}
              onChange={onChangeSS}
            />
          </View>
          <View style={{ height: 65, width: '90%' }}>
            <Dropdown
              mode="outlined"
              label="Ограды"
              data={dataFences}
              value={fences}
              onChange={onChangeFences}
            />
          </View>
          <View style={{ height: 65, width: '90%' }}>
            <Dropdown
              mode="outlined"
              label="Столы/Скамейки"
              data={dataFences}
              value={fences}
              onChange={onChangeFences}
            />
          </View>
          <View style={{ height: 65, width: '90%' }}>
            <Dropdown
              mode="outlined"
              label="Цветники"
              data={dataFlowers}
              value={flowers}
              onChange={onChangeFlowers}
            />
          </View>
          <View style={{ height: 65, width: '90%' }}>
            <MultiselectDropdown
              mode="outlined"
              label="Возложение"
              chipType="outlined"
              data={dataImp}
              value={valueMS}
              onChange={onChangeMS}
              emptySelectionText="Не выбрано"
              selectedItemsText="Выбрано"
            />
          </View>
          <View style={{ height: 65, width: '90%' }}>
            <Dropdown
              mode="outlined"
              label="Уборка"
              data={dataClean}
              value={cleanValue}
              onChange={onChangeClean}
            />
          </View>
          <View style={{ height: 65, width: '90%' }}>
            <Dropdown
              mode="outlined"
              label="Церковные услуги"
              data={dataChurchServices}
              value={churchService}
              onChange={onChangeImposition}
              emptyListText="пусто"
              parentDDContainerStyle={{
                position: 'absolute',
                top: 60,
                left: 0,
                right: 0,
                zIndex: 3,
              }}
            />
          </View>
          <View style={{ height: 65, width: '90%' }}>
            <Dropdown
              mode="outlined"
              label="Вазочки"
              data={dataVases}
              value={vases}
              onChange={onChangeVases}
              parentDDContainerStyle={{
                position: 'absolute',
                top: 25,
                left: 0,
                right: 0,
                zIndex: 3,
              }}
              disableSelectionTick
            />
          </View>

          <Button
            style={{ width: '90%', marginTop: 5, backgroundColor: '#333333' }}
            mode="contained"
            onPress={() => seTmodelServices(true)}>
            <Text style={{ color: 'white' }}>Перейти к заказу</Text>
          </Button>

          <View style={styles.buttonMenuContainer}>
            <Modal isVisible={modalClean}>
              <View style={styles.modelContainer}>
                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content>
                    <Text style={styles.modelHeaderText}>Наименование</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <Text style={{ fontSize: 18 }}>набор 1</Text>
                        <Text>Услуга 1</Text>
                        <Text>Услуга 2</Text>
                        <Text>Услуга 3</Text>
                      </View>

                      <View>
                        <Text style={{ textAlign: 'center', fontSize: 16 }}>
                          4200 руб
                        </Text>
                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          Выбрать
                        </Button>

                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          Оформить подписку
                        </Button>
                      </View>
                    </View>
                  </Card.Content>
                </Card>

                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content style={{ margin: 10 }}>
                    <Text style={styles.modelHeaderText}>Наименование</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <Text style={{ fontSize: 18 }}>набор 2</Text>
                        <Text>Услуга 1</Text>
                        <Text>Услуга 2</Text>
                        <Text>Услуга 3</Text>
                      </View>

                      <View>
                        <Text style={{ textAlign: 'center', fontSize: 16 }}>
                          6800 руб
                        </Text>
                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          Выбрать
                        </Button>

                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          Оформить подписку
                        </Button>
                      </View>
                    </View>
                  </Card.Content>
                </Card>

                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content>
                    <Text style={styles.modelHeaderText}>Наименование</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <Text style={{ fontSize: 12, padding: 5 }}>
                          набор по
                        </Text>
                        <Text style={{ fontSize: 12, padding: 0 }}>
                          благоустройству
                        </Text>
                        <Text style={{ fontSize: 12, padding: 0 }}>
                          мобильного холма
                        </Text>
                        <Text>Услуга 1</Text>
                        <Text>Услуга 2</Text>
                        <Text>Услуга 3</Text>
                      </View>

                      <View>
                        <Text style={{ textAlign: 'center', fontSize: 16 }}>
                          6800 руб
                        </Text>
                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          Выбрать
                        </Button>

                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          Оформить подписку
                        </Button>
                      </View>
                    </View>
                  </Card.Content>
                </Card>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceForYourself;
