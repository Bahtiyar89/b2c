import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Image } from 'react-native';
import {
  Text,
  Button,
  Checkbox,
  IconButton,
  Badge,
  HelperText,
  TextInput,
} from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';

import styles from './styles';

interface IState {
  model: boolean;
  okPressed: (params: any) => void;
  noPressed: () => void;
}

const Model: React.FC<IState> = ({ okPressed, noPressed, model }: IState) => {
  const elements = {
    email: '',
    phone: '',
  };
  const [user, seTuser] = useState({ ...elements });

  const validationElements = {
    email: false,
    phone: false,
  };

  const [validObj, seTvalidObj] = useState({ ...validationElements });

  const handleChange = (val: string, fieldName: string) => {
    seTuser(prev => {
      const varPr = { ...prev };
      switch (fieldName) {
        case 'email':
          varPr.email = val;
          break;
        case 'phone':
          varPr.phone = val;
          break;
      }
      return varPr;
    });
  };

  const validation = () => {
    let err = false;
    if (!user.email.includes('@')) {
      err = true;
      seTvalidObj({ ...validObj, email: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, email: false });
      }, 1000);
      return err;
    }
    if (user.phone.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, phone: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, phone: false });
      }, 1000);
    }
    return err;
  };

  const onButtonPressed = () => {
    let err = validation();
    if (err) {
    } else {
      okPressed(user);
    }
  };
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Портрет', value: 'p' },
    { label: 'Фотокерамика', value: 'fk' },
    { label: 'Фото на стекле', value: 'foncam' },
  ]);
  return (
    <>
      <Modal style={{ margin: 0 }} isVisible={model}>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.modelContainer}>
              <Text style={styles.modelHeaderText}>Памятники</Text>
              <View style={styles.modelTextAndError}>
                <Text>Тип услуги:</Text>
                <Text style={{ fontWeight: 'bold' }}> установка</Text>
              </View>
              <Button
                style={{
                  width: '100%',
                  marginTop: 5,
                  backgroundColor: '#333333',
                }}
                mode="contained"
                onPress={() => console.log('')}>
                <Text style={{ color: 'white' }}>Выбрать памятник</Text>
              </Button>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Наименование</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}> Цветники</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}>Надгробная плита</Text>
              </View>
              <Button
                style={{
                  width: '100%',
                  marginTop: 5,
                  backgroundColor: '#333333',
                }}
                mode="contained"
                onPress={() => console.log('')}>
                <Text style={{ color: 'white' }}>Выбрать плиту</Text>
              </Button>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Наименование</Text>
              </View>
              <Text>Фото на памятнике</Text>
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
                <Text style={{ color: 'white' }}>Выбери файл</Text>
              </Button>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
                containerStyle={{ paddingTop: '2%' }}
                zIndex={10000}
                placeholder="Вид"
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
                containerStyle={{ paddingTop: '2%' }}
                zIndex={10000}
                placeholder="Тип установки памятника"
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
                containerStyle={{ paddingTop: '2%' }}
                zIndex={10000}
                placeholder="Надпись шрифт"
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
                containerStyle={{ paddingTop: '2%' }}
                zIndex={10000}
                placeholder="Размер шрифта"
              />
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}>Эпитафия</Text>
              </View>
              <TextInput
                placeholder="Надпись шрифт размер"
                mode="outlined"
                onChangeText={val => handleChange(val, 'email')}
                value={user.email}
              />
              <Text>Примеры Эпитафии</Text>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}>
                  Рисунок (рядом с эпитафии)
                </Text>
              </View>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
                containerStyle={{ paddingTop: '2%' }}
                zIndex={10000}
                placeholder="Размер"
              />
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}>
                  Рисунок креста (в углу)
                </Text>
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
                <Text style={{ color: 'white' }}>Выбрать</Text>
              </Button>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}>Qr code</Text>
              </View>
              <TextInput
                placeholder="Коментарии к заказу"
                mode="outlined"
                onChangeText={val => handleChange(val, 'email')}
                value={user.email}
              />
              <Text style={{ flex: 1, margin: 8 }}>
                Вам могут быть интересны услуги:
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}>Услуга 1</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}>Услуга 2</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color={'#397AF9'}
                />
                <Text style={{ flex: 1, margin: 8 }}>Услуга 3</Text>
              </View>

              <View style={styles.modelYesNo}>
                <Button onPress={() => noPressed()}>
                  <Text style={styles.modelButtonNoColor}>Нет</Text>
                </Button>
                <Button onPress={() => onButtonPressed()}>
                  <Text style={styles.modelButtonYesColor}>Да</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Model;
