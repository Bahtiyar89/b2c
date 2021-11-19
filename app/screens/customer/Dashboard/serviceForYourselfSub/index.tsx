import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Image } from 'react-native';
import { Card, Button, Text, Checkbox } from 'react-native-paper';
import Modal from 'react-native-modal';
import styles from './styles';
import InstallationModel from './monumetModels/installationMonument/InstallationModel';
import ChangeMonument from './monumetModels/changeMonument/changeModel';
import MonumentResolutionModel from './monumetModels/monumentResolutionModel';
import MonumentRestorationModal from './monumetModels/monumentRestorationModel';
import MonumentCorrectionModal from './monumetModels/monumentCorrectionModel';

interface IProps {
  navigation: any;
  route: any;
}

const ServiceForYourselfSub: React.FC<IProps> = (props: IProps) => {
  const {
    navigation,
    route: { params },
  } = props;

  //dropdown models
  const [modalClean, seTmodalClean] = useState<boolean>(false);
  const [instModel, seTinstModel] = useState<boolean>(false);

  const [checked, setChecked] = useState(false);
  //monument button sub
  const [monumentInstModel, seTmonumentInstModel] = useState<boolean>(false);
  const [monumentResolutionModal, seTmonumentResolutionModal] =
    useState<boolean>(false);
  const [monumentChangeModel, seTmonumentChangeModel] =
    useState<boolean>(false);
  const [monumentRestorationModel, seTmonumentRestorationModel] =
    useState<boolean>(false);
  const [monumentCorrectionModel, seTmonumentCorrectionModel] =
    useState<boolean>(false);

  if ('monuments' === params.payload) {
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
              Памятники
            </Text>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentInstModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Установка
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentResolutionModal(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Демонтаж
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentChangeModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Замена
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentRestorationModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Реставрация
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentCorrectionModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Поправка
              </Text>
            </Button>
          </View>
          <InstallationModel
            instCloseModal={() => seTmonumentInstModel(false)}
            model={monumentInstModel}
            okPressed={() => seTmonumentInstModel(false)}
            noPressed={() => console.log('nooo')}
          />
          <ChangeMonument
            instCloseModal={() => seTmonumentChangeModel(false)}
            model={monumentChangeModel}
            okPressed={() => seTmonumentChangeModel(false)}
            noPressed={() => console.log('nooo')}
          />
          <MonumentResolutionModel
            okPressed={val => seTmonumentResolutionModal(val)}
            model={monumentResolutionModal}
          />
          <MonumentRestorationModal
            okPressed={val => seTmonumentRestorationModel(val)}
            model={monumentRestorationModel}
          />
          <MonumentCorrectionModal
            okPressed={val => seTmonumentCorrectionModel(val)}
            model={monumentCorrectionModel}
          />
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('fences' === params.payload) {
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
              Ограды
            </Text>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTinstModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Установка
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Демонтаж
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Замена
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('tablesBenches' === params.payload) {
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
              Cтолы Cкамейки
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('flowers' === params.payload) {
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
              Цветники
            </Text>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTinstModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Установка
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Демонтаж
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Замена
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('impostions' === params.payload) {
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
              Возложение
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={'#397AF9'}
              />
              <Text style={{ flex: 1, margin: 4 }}>Цветы</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={'#397AF9'}
              />
              <Text style={{ flex: 1, margin: 8 }}>Венки</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={'#397AF9'}
              />
              <Text style={{ flex: 1, margin: 8 }}>Вазочки</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
              <Image
                source={require('../../../../assets/gubin.png')} //Change your icon image here
                style={{ width: 100, height: 100 }}
              />
              <Text style={{ flex: 1, margin: 4 }}>Цветы</Text>
              <Text style={{ justifyContent: 'flex-end' }}>__руб</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('clean' === params.payload) {
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
              Уборка
            </Text>
          </View>
          <Card style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
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

          <Card style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
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

          <Card style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
            <Card.Content>
              <Text style={styles.modelHeaderText}>Наименование</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={{ fontSize: 12, padding: 5 }}>набор по</Text>
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
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('churchService' === params.payload) {
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
              Церковные услуги
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('vases' === params.payload) {
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
              Вазочки
            </Text>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTinstModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Установка
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Демонтаж
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                Замена
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Что то не так повторите потом
            </Text>

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
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default ServiceForYourselfSub;
