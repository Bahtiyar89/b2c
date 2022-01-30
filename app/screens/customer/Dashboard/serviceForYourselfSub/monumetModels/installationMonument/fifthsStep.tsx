import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button, RadioButton, Checkbox, TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

import AppStyles from '../../../../../../config/styles';

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

const ForthsStep: React.FC<IState> = ({
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
  const [checkedEpitaph, seTcheckedEpitaph] = useState(true);
  return (
    <View style={{ width: '100%', marginTop: '2%' }}>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Эпитафия</Text>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: !checkedEpitaph ? '20%' : '0%',
        }}>
        <Text
          onPress={() => seTcheckedEpitaph(!checkedEpitaph)}
          style={{ flex: 1, margin: 8 }}>
          Эпитафия
        </Text>
        <Text style={{ justifyContent: 'flex-end' }}>__руб</Text>
      </View>

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
          placeholder=""
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
          placeholder=""
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
    </View>
  );
};

export default ForthsStep;
