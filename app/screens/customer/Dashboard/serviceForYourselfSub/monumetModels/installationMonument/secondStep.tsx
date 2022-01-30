import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  RadioButton,
  TextInput,
  Checkbox,
  IconButton,
} from 'react-native-paper';
import Modal from 'react-native-modal';
import styles from './styles';

const SecondStep: React.FC = () => {
  const [modelFlower, seTmodelFlower] = useState(false);
  const [modelSubFlower, seTmodelSubFlower] = useState(false);
  const [modelTombstone, seTmodelTombstone] = useState(false);
  const [svetnik, seTsvetnik] = useState({
    type: '',
    src: '',
    name: '',
    price: '',
  });
  const [plita, seTplita] = useState({
    type: '',
    src: '',
    name: '',
    price: '',
  });

  const [poursoil, seTpoursoil] = useState(false);
  const [plant, seTplant] = useState(false);
  const [flowers, seTflowers] = useState(false);
  const [flowerCheck, seTflowerCheck] = useState(false);
  const [imageSize, seTimageSize] = useState(0.75);
  const totalPrice = () => {
    if (poursoil && plant) {
      return 500 + 700;
    } else if (poursoil && plant === false) {
      return 500;
    } else if (poursoil === false && plant) {
      return 700;
    } else {
      return 0;
    }
  };
  return (
    <View style={{ width: '95%' }}>
      <Text style={{ textAlign: 'center' }}>
        Цветник или надгробная плита на выбор
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <RadioButton.Android
          status={svetnik.type === 'sveti' ? 'checked' : 'unchecked'}
          color="blue"
          value="sveti"
          onPress={() => {
            seTmodelFlower(true);
            seTmodelTombstone(false);
          }}
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text
            onPress={() => {
              seTmodelFlower(true);
              seTmodelTombstone(false);
            }}
            style={{ margin: 8 }}>
            Цветник
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'flex-end',
            }}>
            <Text>{svetnik.price}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <RadioButton.Android
          status={plita.type === 'plita' ? 'checked' : 'unchecked'}
          color="blue"
          value="sveti"
          onPress={() => {
            seTmodelTombstone(true);
            seTmodelFlower(false);
          }}
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text
            onPress={() => {
              seTmodelTombstone(true);
              seTmodelFlower(false);
            }}
            style={{ margin: 8 }}>
            Надгробная плита
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'flex-end',
            }}>
            <Text>{plita.price}</Text>
          </View>
        </View>
      </View>
      {/* FLOWERS */}
      <Modal style={{ margin: 0 }} isVisible={modelFlower}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={{ backgroundColor: 'white', padding: 10 }}>
              <Text style={styles.modelHeaderText}>Перечень Цветников</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTsvetnik({
                        ...svetnik,
                        type: 'sveti',
                        src: '.../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '780 руб',
                      });
                      seTmodelFlower(false);
                      setTimeout(function () {
                        seTmodelSubFlower(true);
                      }, 1000);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>780 руб</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                style={{
                  width: '100%',
                  marginTop: 5,
                  backgroundColor: '#333333',
                  zIndex: 1,
                  elevation: 0,
                }}
                mode="contained"
                onPress={() => console.log('')}>
                <Text style={{ color: 'white' }}>Показать еще</Text>
              </Button>
              <View style={styles.modelYesNo}>
                <Button
                  onPress={() => {
                    seTsvetnik({
                      ...svetnik,
                      type: '',
                      src: '',
                      name: '',
                      price: '',
                    });
                    seTmodelFlower(false);
                  }}>
                  <Text style={styles.modelButtonNoColor}>Отмена</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
      {/* SUB FLOWERS */}
      <Modal style={{ margin: 0 }} isVisible={modelSubFlower}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.modelContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                }}>
                <View>
                  <Image
                    style={[
                      { width: 100, height: 100 },
                      { transform: [{ scale: imageSize }] },
                    ]}
                    source={require('../../../../../../assets/gubin.png')}
                  />
                  <View style={{ flexDirection: 'row' }}>
                    <IconButton
                      icon="arrow-expand-all"
                      color={'blue'}
                      size={20}
                      onPress={() => seTimageSize(imageSize + 0.25)}
                    />

                    <IconButton
                      icon="arrow-collapse-all"
                      color={'blue'}
                      size={20}
                      onPress={() => seTimageSize(imageSize - 0.25)}
                    />
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: 'center' }}>Наименование</Text>
                  <TextInput
                    label="Oписание..."
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
                  width: '95%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Checkbox.Android
                    color="#3498db"
                    status={poursoil ? 'checked' : 'unchecked'}
                    onPress={() => seTpoursoil(!poursoil)}
                  />
                  <Text
                    style={{ margin: 8 }}
                    onPress={() => seTpoursoil(!poursoil)}>
                    Насыпать грунт
                  </Text>
                </View>
                <Text style={{ alignSelf: 'center' }}>500 руб</Text>
              </View>

              <View
                style={{
                  width: '95%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Checkbox.Android
                    color="#3498db"
                    status={plant ? 'checked' : 'unchecked'}
                    onPress={() => seTplant(!plant)}
                  />
                  <Text style={{ margin: 8 }} onPress={() => seTplant(!plant)}>
                    Посадить растение
                  </Text>
                </View>
                <Text style={{ alignSelf: 'center' }}>700 руб</Text>
              </View>
              {plant && (
                <Button
                  style={{
                    width: '50%',
                    marginTop: 5,
                    backgroundColor: '#333333',
                    zIndex: 1,
                    elevation: 0,
                  }}
                  mode="contained"
                  onPress={() => seTflowers(true)}>
                  <Text style={{ color: 'white' }}>Добавить</Text>
                </Button>
              )}
              <TextInput
                placeholder={'коментарии....'}
                numberOfLines={3}
                mode="outlined"
                multiline={true}
                style={{ width: '95%' }}
              />

              <View
                style={{
                  marginTop: 25,
                  width: '95%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Общая стоимость</Text>
                <Text>{totalPrice()} руб</Text>
              </View>
              <Button
                style={{
                  width: '95%',
                  marginTop: 15,
                  backgroundColor: '#333333',
                  zIndex: 0,
                }}
                mode="contained"
                onPress={() => seTmodelSubFlower(false)}>
                <Text style={{ color: 'white' }}>Выбрать</Text>
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      <Modal style={{ margin: 0 }} isVisible={flowers}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.modelContainer}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => seTflowerCheck(!flowerCheck)}>
                  <View style={{ width: 100 }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <View style={{ flexDirection: 'row' }}>
                      <Checkbox.Android
                        color="#3498db"
                        status={flowerCheck ? 'checked' : 'unchecked'}
                        onPress={() => seTflowerCheck(!flowerCheck)}
                      />
                      <Text
                        onPress={() => seTflowerCheck(!flowerCheck)}
                        style={{ textAlign: 'center', marginTop: 8 }}>
                        Цветок 2
                      </Text>
                    </View>
                    <Text
                      onPress={() => seTflowerCheck(!flowerCheck)}
                      style={{ textAlign: 'center' }}>
                      700 руб
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Button
                style={{
                  flex: 1,
                  marginTop: 15,
                  backgroundColor: '#333333',
                  zIndex: 0,
                }}
                mode="contained"
                onPress={() => seTflowers(false)}>
                <Text style={{ color: 'white' }}>Выбрать</Text>
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
      {/* TOMBS */}
      <Modal style={{ margin: 0 }} isVisible={modelTombstone}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={{ backgroundColor: 'white', padding: 10 }}>
              <Text style={styles.modelHeaderText}>Перечень Плит</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTplita({
                        ...plita,
                        type: 'plita',
                        src: '.../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '180 руб',
                      });
                      seTmodelTombstone(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>180 руб</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                style={{
                  width: '100%',
                  marginTop: 5,
                  backgroundColor: '#333333',
                  zIndex: 1,
                  elevation: 0,
                }}
                mode="contained"
                onPress={() => console.log('')}>
                <Text style={{ color: 'white' }}>Показать еще</Text>
              </Button>
              <View style={styles.modelYesNo}>
                <Button
                  onPress={() => {
                    seTplita({
                      ...plita,
                      type: '',
                      src: '',
                      name: '',
                      price: '',
                    });
                    seTmodelTombstone(false);
                  }}>
                  <Text style={styles.modelButtonNoColor}>Отмена</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SecondStep;
