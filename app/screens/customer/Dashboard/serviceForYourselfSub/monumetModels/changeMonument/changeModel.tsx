import React, { Fragment, useCallback, useState } from 'react';
import { ScrollView, SafeAreaView, View, Image } from 'react-native';
import { Text, Button, Checkbox, TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

import styles from './styles';
import MonumentModel from './changeMonumentModel';
import AppStyles from '../../../../../../config/styles';

const itemsLook = [
  { label: 'Портрет', value: 'p' },
  { label: 'Фотокерамика', value: 'fk' },
  { label: 'Фото на стекле', value: 'foncam' },
];

const itemsType = [
  { label: 'Обычная', value: 'p' },
  { label: 'Усиленная', value: 'fk' },
];

const itemsWriteFont = [
  { label: '16', value: '16' },
  { label: '18', value: '18' },
];
const itemsSizeFont = [
  { label: '16', value: '16' },
  { label: '18', value: '18' },
];

interface IState {
  model: boolean;
  okPressed: (params: boolean) => void;
  noPressed: () => void;
  instCloseModal: () => void;
}

const ChangeMonument: React.FC<IState> = ({
  okPressed,
  noPressed,
  model,
  instCloseModal,
}: IState) => {
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

  const [lookOpen, seTlookOpen] = useState(false);
  const [typeOpen, seTtypeOpen] = useState(false);
  const [wrFontOpen, seTwrFontOpen] = useState(false);
  const [sizeFontOpen, seTsizeFontOpen] = useState(false);

  const [look, seTlook] = useState('');
  const [type, seTtype] = useState('');
  const [sizeWrite, seTsizeWrite] = useState('');
  const [sizeFont, seTsizeFont] = useState('');

  //monument model
  const [monumentModel, seTmonumentModel] = useState(false);
  const [monument, seTmonument] = useState({
    src: '',
    name: '',
  });
  const cancelModelMonument = () => seTmonumentModel(false);
  const selectMonumentItem = (item: any) => {
    console.log('item', item);
    seTmonument(item);
    seTmonumentModel(false);
  };

  //photo choose
  const chooseImage = () => {
    let options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response.assets);
    });
  };
  //on Open dropdown
  const onLookOpen = useCallback(() => {
    seTtypeOpen(false);
  }, []);

  const onTypeOpen = useCallback(() => {
    seTwrFontOpen(false);
  }, []);

  const onWriteFontOpen = useCallback(() => {
    seTsizeFontOpen(false);
  }, []);

  //dropdown on change
  const setLookDr = (callback: any) => {
    seTlook(callback());
  };
  const setTypeDr = (callback: any) => {
    seTtype(callback());
  };
  const setSizeFontDr = (callback: any) => {
    seTsizeFont(callback());
  };
  const setWriteFontDr = (callback: any) => {
    seTsizeWrite(callback());
  };

  //Checkbox
  const [checkedMonument, seTcheckedMonument] = useState(false);
  const [checkedPlate, seTcheckedPlate] = useState(false);
  const [checkedEpitaph, seTcheckedEpitaph] = useState(false);
  const [checkedPictureEpitaph, seTcheckedPictureEpitaph] = useState(false);
  const [checkedPictureCriss, seTcheckedPictureCriss] = useState(false);
  const [checkedQrCode, seTcheckedQrCode] = useState(false);

  return (
    <Fragment>
      <Modal
        onBackButtonPress={instCloseModal}
        style={{ margin: 0 }}
        isVisible={model}>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.modelContainer}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Замена памятника
              </Text>
              <View
                style={{
                  marginTop: '10%',
                  marginBottom: '5%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Демонтаж памятника</Text>

                <Text>__руб</Text>
              </View>
              <View style={{ alignItems: 'flex-start' }}>
                <Button
                  style={{
                    width: '70%',
                    marginTop: 5,
                    backgroundColor: '#333333',
                  }}
                  mode="contained"
                  onPress={() => seTmonumentModel(true)}>
                  <Text style={{ color: 'white' }}>Выбрать памятник</Text>
                </Button>
              </View>
              {monument.src.length > 0 && (
                <View>
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../../../../../../assets/gubin.png')}
                  />
                  <Text style={{ textAlign: 'center' }}>{monument.name}</Text>
                </View>
              )}

              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checkedMonument ? 'checked' : 'unchecked'}
                  onPress={() => seTcheckedMonument(!checkedMonument)}
                  color={AppStyles.color.COLOR_BLUE}
                />
                <Text style={{ flex: 1, margin: 8 }}> Цветники</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checkedPlate ? 'checked' : 'unchecked'}
                  onPress={() => seTcheckedPlate(!checkedPlate)}
                  color={AppStyles.color.COLOR_BLUE}
                />
                <Text style={{ flex: 1, margin: 8 }}>Надгробная плита</Text>
              </View>

              <Text>Фото на памятнике</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Button
                  style={{ width: '63%', backgroundColor: '#333333' }}
                  mode="contained"
                  onPress={chooseImage}>
                  <Text style={{ color: 'white' }}>Выбери файл</Text>
                </Button>
                <Text>__руб</Text>
              </View>
              <Text style={{ marginTop: '2%' }}>Вид</Text>
              <DropDownPicker
                open={lookOpen}
                onOpen={onLookOpen}
                setOpen={seTlookOpen}
                items={itemsLook}
                setValue={setLookDr}
                value={look}
                dropDownContainerStyle={{
                  borderColor: '#dfdfdf',
                  width: '63%',
                }}
                placeholder="Вид"
                style={AppStyles.width63}
              />
              <Text style={{ marginTop: '2%' }}>Тип установки памятника</Text>
              <View
                style={{
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  zIndex: 10,
                }}>
                <DropDownPicker
                  open={typeOpen}
                  onOpen={onTypeOpen}
                  setOpen={seTtypeOpen}
                  items={itemsType}
                  setValue={setTypeDr}
                  value={type}
                  dropDownContainerStyle={{
                    borderColor: '#dfdfdf',
                    width: '70%',
                  }}
                  dropDownDirection="BOTTOM"
                  placeholder="Тип установки памятника"
                  zIndex={9}
                  style={{ width: '70%' }}
                />
                <Text>__руб</Text>
              </View>
              <Text style={{ marginTop: '2%' }}>Надпись шрифт</Text>
              <View style={{ width: '90%', zIndex: 9 }}>
                <DropDownPicker
                  open={wrFontOpen}
                  onOpen={onWriteFontOpen}
                  setOpen={seTwrFontOpen}
                  items={itemsWriteFont}
                  setValue={setWriteFontDr}
                  value={sizeWrite}
                  dropDownContainerStyle={{
                    borderColor: '#dfdfdf',
                    width: '70%',
                  }}
                  dropDownDirection="BOTTOM"
                  containerStyle={{ paddingTop: '2%' }}
                  placeholder="Надпись шрифта"
                  zIndex={8}
                  style={{ width: '70%' }}
                />
              </View>
              <Text style={{ marginTop: '2%' }}>Размер шрифта</Text>
              <DropDownPicker
                open={sizeFontOpen}
                setOpen={seTsizeFontOpen}
                items={itemsSizeFont}
                setValue={setSizeFontDr}
                value={sizeWrite}
                dropDownContainerStyle={{
                  borderColor: '#dfdfdf',
                  width: '50%',
                }}
                dropDownDirection="BOTTOM"
                containerStyle={{ paddingTop: '2%' }}
                placeholder="Размер шрифта"
                zIndex={7}
                style={{ width: '50%' }}
              />
              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checkedEpitaph ? 'checked' : 'unchecked'}
                  onPress={() => seTcheckedEpitaph(!checkedEpitaph)}
                  color={AppStyles.color.COLOR_BLUE}
                />
                <Text style={{ flex: 1, margin: 8 }}>Эпитафия</Text>
                <Text style={{ justifyContent: 'flex-end' }}>__руб</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checkedPictureEpitaph ? 'checked' : 'unchecked'}
                  onPress={() =>
                    seTcheckedPictureEpitaph(!checkedPictureEpitaph)
                  }
                  color={AppStyles.color.COLOR_BLUE}
                />
                <Text style={{ flex: 1, margin: 8 }}>
                  Рисунок (рядом с эпитафии)
                </Text>
                <Text style={{ justifyContent: 'flex-end' }}>__руб</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checkedPictureCriss ? 'checked' : 'unchecked'}
                  onPress={() => seTcheckedPictureCriss(!checkedPictureCriss)}
                  color={AppStyles.color.COLOR_BLUE}
                />
                <Text style={{ flex: 1, margin: 8 }}>
                  Рисунок креста (в углу)
                </Text>
                <Text style={{ justifyContent: 'flex-end' }}>__руб</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Checkbox.Android
                  status={checkedQrCode ? 'checked' : 'unchecked'}
                  onPress={() => {
                    seTcheckedQrCode(!checkedQrCode);
                  }}
                  color={AppStyles.color.COLOR_BLUE}
                />
                <Text style={{ flex: 1, margin: 4 }}>
                  Qr code
                  <Image
                    source={require('../../../../../../assets/exclamation-mark-1.png')} //Change your icon image here
                    style={{ width: 20, height: 20 }}
                  />
                </Text>
                <Text style={{ justifyContent: 'flex-end' }}>__руб</Text>
              </View>
              <TextInput
                numberOfLines={3}
                mode="outlined"
                multiline={true}
                placeholder="Коментарии к заказу"
                onChangeText={val => handleChange(val, 'email')}
                value={user.email}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text>Общая стоимость</Text>
                <Text style={{ position: 'absolute', right: 0 }}>___руб</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 15,
                }}>
                <Button
                  uppercase={false}
                  mode="outlined"
                  style={{ backgroundColor: 'orange', width: '45%' }}
                  onPress={() => okPressed(false)}>
                  <Text style={{ color: 'white' }}>Отмена</Text>
                </Button>
                <Button
                  uppercase={false}
                  mode="outlined"
                  style={{ backgroundColor: '#333333', width: '45%' }}
                  onPress={() => okPressed(false)}>
                  <Text style={{ color: 'white' }}>Выбрать</Text>
                </Button>
              </View>
            </View>
            <MonumentModel
              cancelModel={cancelModelMonument}
              selectPressed={selectMonumentItem}
              model={monumentModel}
            />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </Fragment>
  );
};

export default ChangeMonument;
