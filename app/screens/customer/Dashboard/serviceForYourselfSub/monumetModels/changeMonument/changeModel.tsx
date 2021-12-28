import React, { useContext, Fragment, useCallback, useState } from 'react';
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
import Login from '../../../../../Login';
import AuthContext from '../../../../../../context/auth/AuthContext';

const itemsLook = [
  { label: 'Портрет', value: 'p' },
  { label: 'Фотокерамика', value: 'fk' },
  { label: 'Фото на стекле', value: 'foncam' },
];

const itemsType = [
  { label: 'Обычная', value: 'p' },
  { label: 'Усиленная', value: 'fk' },
];

const itemsSizeFont = [
  { label: '16', value: '16' },
  { label: '18', value: '18' },
];

interface IState {
  navigation: any;
  route: any;
  model: boolean;
  okPressed: (params: boolean) => void;
  noPressed: () => void;
}

const ChangeMonument: React.FC<IState> = ({
  okPressed,
  noPressed,
  model,
  navigation,
  route,
}: IState) => {
  const elements = {
    email: '',
    phone: '',
  };
  const [user, seTuser] = useState({ ...elements });
  const authContext = useContext(AuthContext);
  const { isSigned } = authContext;
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
  const [sizeFontOpen, seTsizeFontOpen] = useState(false);

  const [look, seTlook] = useState('');
  const [type, seTtype] = useState('');
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

  //Checkbox
  const [checkedMonument, seTcheckedMonument] = useState(false);
  const [checkedPlate, seTcheckedPlate] = useState(false);
  const [checkedEpitaph, seTcheckedEpitaph] = useState(false);
  const [checkedPictureEpitaph, seTcheckedPictureEpitaph] = useState(false);
  const [checkedPictureCriss, seTcheckedPictureCriss] = useState(false);
  const [checkedQrCode, seTcheckedQrCode] = useState(false);

  const cancelPressed = () => {
    seTcheckedMonument(false);
    seTcheckedPlate(false);
    seTcheckedEpitaph(false);
    seTcheckedPictureEpitaph(false);
    seTcheckedPictureCriss(false);
    seTcheckedPictureCriss(false);
    seTcheckedQrCode(false);
    noPressed();
  };

  return (
    <Fragment>
      <Modal
        onBackButtonPress={cancelPressed}
        style={{ margin: 0, backgroundColor: '#ffffff' }}
        isVisible={model}>
        {isSigned ? (
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
                  <Text
                    onPress={() => seTcheckedMonument(!checkedMonument)}
                    style={{ flex: 1, margin: 8 }}>
                    Цветники
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Checkbox.Android
                    status={checkedPlate ? 'checked' : 'unchecked'}
                    onPress={() => seTcheckedPlate(!checkedPlate)}
                    color={AppStyles.color.COLOR_BLUE}
                  />
                  <Text
                    onPress={() => seTcheckedPlate(!checkedPlate)}
                    style={{ flex: 1, margin: 8 }}>
                    Надгробная плита
                  </Text>
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
                  dropDownContainerStyle={styles.dropdBorderWidth63}
                  placeholder="Вид"
                  style={AppStyles.width63}
                  zIndex={10}
                />
                <Text style={{ marginTop: '2%' }}>Тип установки памятника</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
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
                    style={styles.width70}
                    zIndex={9}
                  />
                  <Text>__руб</Text>
                </View>
                <Text style={{ marginTop: '2%' }}>Надпись шрифт</Text>
                <TextInput
                  style={AppStyles.width63}
                  maxLength={2}
                  mode="outlined"
                  placeholder="Шрифт надпися"
                  onChangeText={val => handleChange(val, 'phone')}
                  value={user.phone}
                />
                <Text style={{ marginTop: '2%' }}>Размер шрифта</Text>
                <DropDownPicker
                  open={sizeFontOpen}
                  setOpen={seTsizeFontOpen}
                  items={itemsSizeFont}
                  setValue={setSizeFontDr}
                  value={sizeFont}
                  dropDownContainerStyle={{
                    borderColor: '#dfdfdf',
                    width: '50%',
                  }}
                  dropDownDirection="BOTTOM"
                  containerStyle={styles.paddingTop2}
                  placeholder="Размер шрифта"
                  style={{ width: '50%' }}
                  zIndex={8}
                />
                <View style={{ flexDirection: 'row' }}>
                  <Checkbox.Android
                    status={checkedEpitaph ? 'checked' : 'unchecked'}
                    onPress={() => seTcheckedEpitaph(!checkedEpitaph)}
                    color={AppStyles.color.COLOR_BLUE}
                  />
                  <Text
                    onPress={() => seTcheckedEpitaph(!checkedEpitaph)}
                    style={{ flex: 1, margin: 8 }}>
                    Эпитафия
                  </Text>
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
                  <Text
                    onPress={() =>
                      seTcheckedPictureEpitaph(!checkedPictureEpitaph)
                    }
                    style={{ flex: 1, margin: 8 }}>
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
                  <Text
                    onPress={() => seTcheckedPictureCriss(!checkedPictureCriss)}
                    style={{ flex: 1, margin: 8 }}>
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
                  <Text
                    onPress={() => {
                      seTcheckedQrCode(!checkedQrCode);
                    }}
                    style={{ flex: 1, margin: 4 }}>
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
                    onPress={() => cancelPressed()}>
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
        ) : (
          <>
            <Login route={route} navigation={navigation} />
          </>
        )}
      </Modal>
    </Fragment>
  );
};

export default ChangeMonument;
