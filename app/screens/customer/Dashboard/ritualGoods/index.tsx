import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Image } from 'react-native';
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

const RitualGoods: React.FC<IProps> = (props: IProps) => {
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

  const [modelProduct, seTmodelProduct] = useState(false);
  const [modelContinue, seTmodelContinue] = useState(false);
  const [product1, seTproduct1] = useState(false);
  const [product2, seTproduct2] = useState(false);
  const [product3, seTproduct3] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.buttonMenuContainer}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 26,
              }}>
              Ритуальные товары
            </Text>

            <Button
              onPress={() => seTproduct1(!product1)}
              uppercase={false}
              icon="chevron-down"
              labelStyle={{ fontSize: 18 }}
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Товар 1
            </Button>
            {product1 && (
              <Card style={{ width: '100%', paddingTop: '2%' }}>
                <Card.Content>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                  </View>
                  <Button
                    onPress={() => seTmodelProduct(true)}
                    uppercase={false}>
                    Показать еще
                  </Button>
                </Card.Content>
              </Card>
            )}
            <Button
              onPress={() => seTproduct2(!product2)}
              uppercase={false}
              icon="chevron-down"
              labelStyle={{ fontSize: 18 }}
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Товар 2
            </Button>
            {product2 && (
              <Card style={{ width: '100%', paddingTop: '2%' }}>
                <Card.Content>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                  </View>
                  <Button
                    onPress={() => seTmodelProduct(true)}
                    uppercase={false}>
                    Показать еще
                  </Button>
                </Card.Content>
              </Card>
            )}
            <Button
              onPress={() => seTproduct3(!product3)}
              uppercase={false}
              icon="chevron-down"
              labelStyle={{ fontSize: 18 }}
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Товар 3
            </Button>
            {product3 && (
              <Card style={{ width: '100%', paddingTop: '2%' }}>
                <Card.Content>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                    <View>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Наименование</Text>
                      <Text style={{ textAlign: 'center' }}>..... руб</Text>
                    </View>
                  </View>
                  <Button
                    onPress={() => seTmodelProduct(true)}
                    uppercase={false}>
                    Показать еще
                  </Button>
                </Card.Content>
              </Card>
            )}

            <Button
              style={{
                width: '90%',
                marginTop: 20,
                backgroundColor: '#333333',
              }}
              mode="contained"
              onPress={() => seTmodelContinue(true)}>
              <Text style={{ color: 'white' }}>Продолжить</Text>
            </Button>

            <Modal isVisible={modelProduct}>
              <SafeAreaView>
                <ScrollView>
                  <View style={styles.modelContainer}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../../../assets/gubin.png')}
                      />

                      <View style={{ width: '60%', paddingTop: '2%' }}>
                        <Text style={{ textAlign: 'center' }}>
                          Наименование
                        </Text>
                        <Text style={{ textAlign: 'center' }}>Описание...</Text>
                        <Text style={{ textAlign: 'center' }}>Количество</Text>
                        <TextInput
                          label={'Количество'}
                          mode="outlined"
                          style={{
                            marginLeft: '5%',
                            width: '100%',
                            textAlign: 'center',
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 15,
                      }}>
                      <Text style={{}}>Общая стоимость</Text>
                      <Text style={{}}>....руб</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 15,
                      }}>
                      <Button
                        onPress={() => seTmodelProduct(false)}
                        labelStyle={{ color: 'red' }}>
                        Cancel
                      </Button>
                      <Button>Выбрать</Button>
                    </View>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </Modal>

            <Modal isVisible={modelContinue}>
              <View style={styles.modelContainer}>
                <Text style={{ textAlign: 'center' }}>
                  Введите адрес доставки
                </Text>
                <TextInput
                  label={'Количество'}
                  mode="outlined"
                  textAlign={'center'}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 15,
                  }}>
                  <Button
                    onPress={() => seTmodelContinue(false)}
                    labelStyle={{ color: 'red' }}>
                    Отмена
                  </Button>
                  <Button>Хорошо</Button>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RitualGoods;
