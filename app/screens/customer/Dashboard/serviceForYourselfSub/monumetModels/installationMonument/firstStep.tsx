import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
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

const itemsLook = [
  { label: 'Портрет', value: 'p' },
  { label: 'Фотокерамика', value: 'fk' },
  { label: 'Фото на стекле', value: 'foncam' },
];

const FirstStep: React.FC<IState> = ({
  model,
  monument,
  selectedMonument,
}: IState) => {
  //Checkbox

  const [mainModel, seTmainModel] = useState(false);
  const [secondModal, seTsecondModal] = useState(false);
  const cancelPressed = () => {};
  const cancelModelMonument = () => {
    seTmainModel(false);
    console.log('cancel pressed');
  };

  const selectMonumentItem = (item: any) => {
    selectedMonument(item);
    seTmainModel(false);
    setTimeout(function () {
      seTsecondModal(true);
    }, 500);
  };
  const [typeInstallation, seTtypeInstallation] = React.useState('usual');
  //Checkbox
  const [checkedMonument, seTcheckedMonument] = useState(false);
  const [typeOpen, seTtypeOpen] = useState(false);
  const [lookOpen, seTlookOpen] = useState(false);
  const [sizeFontOpen, seTsizeFontOpen] = useState(false);

  const [look, seTlook] = useState('');
  const [type, seTtype] = useState('');
  const [sizeFont, seTsizeFont] = useState('');

  //on Open dropdown
  const onLookOpen = useCallback(() => {
    seTtypeOpen(false);
  }, []);

  const onTypeOpen = useCallback(() => {
    seTsizeFontOpen(false);
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
  const [value, setValue] = React.useState('first');

  console.log('mainModel: ', mainModel);
  console.log('secondModal: ', secondModal);
  const firstModelFunc = () => {
    seTmainModel(true);
    seTsecondModal(false);
  };
  const selectedModelSecond = (val: any) => {
    console.log('vaaal: val', val);
    seTmainModel(false);
    seTsecondModal(false);
  };
  return (
    <View style={{ width: '95%' }}>
      <Text style={{ margin: 10, textAlign: 'center', fontSize: 20 }}>
        Выбор памятника
      </Text>
      {monument.src.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.imageWH100}
              source={require('../../../../../../assets/gubin.png')}
            />
            <Text style={{ marginLeft: 10, textAlign: 'center' }}>
              {monument.name}
            </Text>
          </View>
          <Text>{monument.price}</Text>
        </View>
      )}
      <Button
        style={{
          marginTop: 5,
          backgroundColor: '#333333',
        }}
        mode="contained"
        onPress={firstModelFunc}>
        <Text style={{ color: 'white' }}>Выбрать памятник</Text>
      </Button>

      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          fontSize: 18,
        }}>
        Тип установки памятника
      </Text>

      <RadioButton.Group
        onValueChange={newValue => seTtypeInstallation(newValue)}
        value={typeInstallation}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton.Android color="blue" value="usual" />
            <Text
              onPress={() => seTcheckedMonument(!checkedMonument)}
              style={{ margin: 8 }}>
              Обычная
            </Text>
          </View>
          {typeInstallation === 'usual' && (
            <Text
              style={{ alignSelf: 'center' }}
              onPress={() => seTcheckedMonument(!checkedMonument)}>
              0 руб
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton.Android color="blue" value="forced" />
            <Text
              onPress={() => seTcheckedMonument(!checkedMonument)}
              style={{ margin: 8 }}>
              Усиленная
            </Text>
          </View>
          {typeInstallation === 'forced' && (
            <Text
              style={{ alignSelf: 'center' }}
              onPress={() => seTcheckedMonument(!checkedMonument)}>
              7800 руб
            </Text>
          )}
        </View>
      </RadioButton.Group>
      <MonumentModel
        cancelModel={cancelModelMonument}
        selectPressed={selectMonumentItem}
        model={mainModel}
      />
      <FirstStepSecondModal
        selectedModelSecond={selectedModelSecond}
        secondModal={secondModal}
      />
    </View>
  );
};

export default FirstStep;
