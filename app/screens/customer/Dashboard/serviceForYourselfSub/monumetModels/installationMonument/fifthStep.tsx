import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button, RadioButton, Checkbox, TextInput } from 'react-native-paper';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

import MonumentModel from './installationMonumentModel';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AppStyles from '../../../../../../config/styles';
import styles from './styles';
import FirstStepSecondModal from './firstStepSecondModal';

interface IState {
  model: boolean;
  selectedMonument: any;
  monument: any;
}

const itemsType = [
  { label: 'Обычная', value: 'p' },
  { label: 'Усиленная', value: 'fk' },
];
const itemsTextFont = [
  { label: '12', value: '12' },
  { label: '14', value: '14' },
];

const FifthStep: React.FC<IState> = ({
  model,
  monument,
  selectedMonument,
}: IState) => {
  //Checkbox
  const [typeOpen, seTtypeOpen] = useState(false);
  const [textFontOpen, seTtextFontOpen] = useState(false);

  const [type, seTtype] = useState('');
  const [size, seTSize] = useState('');

  //on Open dropdown
  const onTypeOpen = useCallback(() => {
    seTtextFontOpen(false);
  }, []);
  const onTextFontOpen = useCallback(() => {
    seTtypeOpen(false);
  }, []);

  //dropdown on change
  const setTypeDr = (callback: any) => {
    console.log('mmmm');

    seTtype(callback());
  };
  const setSizeFontTypeDr = (callback: any) => {
    seTSize(callback());
  };
  const [checkedPictureEpitaph, seTcheckedPictureEpitaph] = useState(false);
  const [checkedPictureCriss, seTcheckedPictureCriss] = useState(false);
  return (
    <View style={{ width: '90%' }}>
      <Text style={{ marginTop: '2%', fontSize: 20 }}>
        Дополнительное фото на памятнике
      </Text>
      <View style={{ flexDirection: 'row', width: '90%' }}>
        <Checkbox.Android
          status={checkedPictureEpitaph ? 'checked' : 'unchecked'}
          onPress={() => seTcheckedPictureEpitaph(!checkedPictureEpitaph)}
          color={AppStyles.color.COLOR_BLUE}
        />
        <Text
          onPress={() => seTcheckedPictureEpitaph(!checkedPictureEpitaph)}
          style={{ flex: 1, margin: 8 }}>
          Рисунок (рядом с эпитафии)
        </Text>
        <Text style={{ justifyContent: 'flex-end' }}>__руб</Text>
      </View>
      {checkedPictureEpitaph && (
        <>
          <Button
            style={{
              marginTop: 15,
              backgroundColor: '#333333',
              elevation: 0,
            }}
            mode="contained">
            <Text style={{ color: 'white' }}>Выбрать Рисунок</Text>
          </Button>
          <Text style={{ marginTop: '2%' }}>Размер рисунка</Text>
          <DropDownPicker
            open={textFontOpen}
            onOpen={onTextFontOpen}
            setOpen={seTtextFontOpen}
            items={itemsTextFont}
            setValue={setSizeFontTypeDr}
            value={size}
            dropDownContainerStyle={{
              borderColor: '#dfdfdf',
              width: '70%',
            }}
            dropDownDirection="BOTTOM"
            placeholder="Размер рисунка"
            style={{
              width: '70%',
              marginBottom: '20%',
            }}
            zIndex={9}
          />
        </>
      )}
      <View style={{ flexDirection: 'row', marginTop: '10%' }}>
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
      {checkedPictureCriss && (
        <Button
          style={{
            marginTop: 15,
            backgroundColor: '#333333',
            elevation: 0,
          }}
          mode="contained">
          <Text style={{ color: 'white' }}>Выбрать Рисунок</Text>
        </Button>
      )}
    </View>
  );
};

export default FifthStep;
