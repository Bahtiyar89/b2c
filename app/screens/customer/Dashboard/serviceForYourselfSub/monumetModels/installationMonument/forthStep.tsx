import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button, RadioButton, Checkbox, TextInput } from 'react-native-paper';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

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

const ForthStep: React.FC<IState> = ({
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
  const [checkedEpitaph, seTcheckedEpitaph] = useState(false);
  return (
    <View style={{ width: '100%', marginTop: '2%' }}>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>
        Надписи на памятнике
      </Text>
      <View
        style={{
          flexDirection: 'row',

          width: '90%',
        }}>
        <Text style={{ flex: 1, marginTop: '6%' }}>Основаня надпись</Text>
        <Text style={{ justifyContent: 'flex-end', marginTop: '6%' }}>
          ___руб
        </Text>
      </View>

      <Text style={{ marginTop: '2%' }}>Шрифт</Text>
      <DropDownPicker
        open={typeOpen}
        onOpen={onTypeOpen}
        setOpen={seTtypeOpen}
        items={itemsType}
        setValue={setTypeDr}
        value={type}
        dropDownContainerStyle={{
          borderColor: '#dfdfdf',
        }}
        dropDownDirection="BOTTOM"
        placeholder=""
        style={{}}
        zIndex={10}
      />
      <Text style={{ marginTop: '2%' }}>Размер шрифта</Text>
      <DropDownPicker
        open={textFontOpen}
        onOpen={onTextFontOpen}
        setOpen={seTtextFontOpen}
        items={itemsTextFont}
        setValue={setSizeFontTypeDr}
        value={size}
        dropDownContainerStyle={{
          borderColor: '#dfdfdf',
        }}
        dropDownDirection="BOTTOM"
        placeholder=""
        style={{}}
        zIndex={9}
      />

      <View
        style={{
          flexDirection: 'row',
          marginBottom: !checkedEpitaph ? '20%' : '0%',
        }}>
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
      {checkedEpitaph && (
        <>
          <Text style={{ marginTop: '2%' }}>Шрифт</Text>
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
            style={{ width: '70%' }}
            zIndex={10}
          />
          <Text style={{ marginTop: '2%' }}>Размер шрифта</Text>
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
            placeholder="Тип установки памятника"
            style={{ width: '70%' }}
            zIndex={9}
          />
          <TextInput
            placeholder={'коментарии....'}
            numberOfLines={3}
            mode="outlined"
            multiline={true}
          />
          <Button
            style={{
              width: '70%',
              marginTop: 15,
              backgroundColor: '#333333',
              zIndex: 0,
            }}
            mode="contained">
            <Text style={{ color: 'white' }}>Примеры эпитафии</Text>
          </Button>
        </>
      )}
    </View>
  );
};

export default ForthStep;
