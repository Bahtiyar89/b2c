import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

import MonumentModel from './installationMonumentModel';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AppStyles from '../../../../../../config/styles';
import styles from './styles';
import FirstStepSecondModal from './firstStepSecondModal';

const SecondStep: React.FC = () => {
  //Checkbox

  //Checkbox
  const [checkedMonument, seTcheckedMonument] = useState(false);

  const [value, setValue] = React.useState('first');
  const [modelFlower, seTmodelFlower] = useState(false);
  const [modelTombstone, seTmodelTombstone] = useState(false);
  const firstModelFunc = () => {
    seTmodelFlower(true);
  };
  const [monument, seTmonument] = useState({
    src: '',
    name: '',
    price: '0 руб',
  });
  const [tombstone, seTtombstone] = useState({
    src: '',
    name: '',
    price: '1700 руб',
  });
  return (
    <View style={{ width: '90%' }}>
      <Text style={{ textAlign: 'center' }}>
        Цветник или надгробная плита на выбор
      </Text>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton.Android color="blue" value="first" />
            <Text
              onPress={() => seTcheckedMonument(!checkedMonument)}
              style={{ margin: 8 }}>
              Цветник
            </Text>
          </View>

          <Text
            style={{ alignSelf: 'center' }}
            onPress={() => seTcheckedMonument(!checkedMonument)}>
            {monument.price}
          </Text>
        </View>
        {value === 'first' && (
          <Button
            uppercase={false}
            mode="outlined"
            style={{ backgroundColor: '#333333' }}
            onPress={firstModelFunc}>
            <Text style={{ color: 'white' }}>Выбрать Цветник</Text>
          </Button>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton.Android color="blue" value="second" />
            <Text
              onPress={() => seTcheckedMonument(!checkedMonument)}
              style={{ margin: 8 }}>
              Надгробная плита
            </Text>
          </View>
          <Text
            style={{ alignSelf: 'center' }}
            onPress={() => seTcheckedMonument(!checkedMonument)}>
            {tombstone.price}
          </Text>
        </View>
        {value === 'second' && (
          <Button
            uppercase={false}
            mode="outlined"
            style={{ backgroundColor: '#333333' }}
            onPress={() => seTmodelTombstone(!modelTombstone)}>
            <Text style={{ color: 'white' }}>Выбрать плиту</Text>
          </Button>
        )}
      </RadioButton.Group>

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
                      seTmonument({
                        src: '.../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '780 руб',
                      });
                      seTmodelFlower(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>780 руб</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTmonument({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '2600 руб',
                      });
                      seTmodelFlower(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>3200 руб</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTmonument({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '4440 руб',
                      });
                      seTmodelFlower(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>4440 руб</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTmonument({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '1900 руб',
                      });
                      seTmodelFlower(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>1900 руб</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTmonument({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '1700 руб',
                      });
                      seTmodelFlower(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>1700 руб</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTmonument({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '9600 руб',
                      });
                      seTmodelFlower(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>9600 руб</Text>
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
                <Button>
                  <Text style={styles.modelButtonNoColor}>Отмена</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      <Modal style={{ margin: 0 }} isVisible={modelTombstone}>
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
                      seTtombstone({
                        src: '.../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '780 руб',
                      });
                      seTmodelTombstone(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>780 руб</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTtombstone({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '2600 руб',
                      });
                      seTmodelTombstone(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>3200 руб</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTtombstone({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '4440 руб',
                      });
                      seTmodelTombstone(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>4440 руб</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTtombstone({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '1900 руб',
                      });
                      seTmodelTombstone(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>1900 руб</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTtombstone({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '1700 руб',
                      });
                      seTmodelTombstone(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>1700 руб</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      seTtombstone({
                        src: '../../../../../../assets/gubin.png',
                        name: 'Наименование',
                        price: '9600 руб',
                      });
                      seTmodelTombstone(false);
                    }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../../../../../assets/gubin.png')}
                    />
                    <Text style={{ textAlign: 'center' }}>Наименование</Text>
                    <Text style={{ textAlign: 'center' }}>9600 руб</Text>
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
                <Button>
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
