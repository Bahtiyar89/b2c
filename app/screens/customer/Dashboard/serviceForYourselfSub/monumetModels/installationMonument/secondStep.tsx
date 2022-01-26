import React, { useState } from 'react';
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
import styles from './styles';

const SecondStep: React.FC = () => {
  const [modelFlower, seTmodelFlower] = useState(false);
  const [modelTombstone, seTmodelTombstone] = useState(false);
  const [svetnikText, seTsvetnikText] = useState(false);
  const [plitaText, seTplitaText] = useState(false);
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
    <View style={{ width: '95%' }}>
      <Text style={{ textAlign: 'center' }}>
        Цветник или надгробная плита на выбор
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <RadioButton.Android
          status={svetnik.type === 'sveti' ? 'checked' : 'unchecked'}
          color="blue"
          value="sveti"
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text
            onPress={() => {
              seTsvetnikText(true);
              seTplitaText(false);
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
      {svetnikText && (
        <Button
          uppercase={false}
          mode="outlined"
          style={{ backgroundColor: '#333333' }}
          onPress={firstModelFunc}>
          <Text style={{ color: 'white' }}>Выбрать Цветник</Text>
        </Button>
      )}
      <View style={{ flexDirection: 'row' }}>
        <RadioButton.Android
          status={plita.type === 'plita' ? 'checked' : 'unchecked'}
          color="blue"
          value="sveti"
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text
            onPress={() => {
              seTplitaText(true);
              seTsvetnikText(false);
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
      {plitaText && (
        <Button
          uppercase={false}
          mode="outlined"
          style={{ backgroundColor: '#333333' }}
          onPress={() => seTmodelTombstone(!modelTombstone)}>
          <Text style={{ color: 'white' }}>Выбрать плиту</Text>
        </Button>
      )}

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
