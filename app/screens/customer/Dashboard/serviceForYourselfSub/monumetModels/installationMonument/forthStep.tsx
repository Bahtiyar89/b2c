import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button, RadioButton, Checkbox, TextInput } from 'react-native-paper';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';

//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AppStyles from '../../../../../../config/styles';
import styles from './styles';
import FirstStepSecondModal from './firstStepSecondModal';
import UpDownIcn from '../../../../../../components/upDownIcn';

interface IState {
  model: boolean;
  selectedMonument: any;
  monument: any;
}

const itemsType = [
  { label: 'Обычная', value: 'p' },
  { label: 'Усиленная', value: 'fk' },
];
const itemsSize = [
  { label: '12', value: '12' },
  { label: '14', value: '14' },
];

const ForthStep: React.FC<IState> = ({
  model,
  monument,
  selectedMonument,
}: IState) => {
  //Checkbox
  const [isFocusType, seTisFocusType] = useState(false);
  const [isFocusSize, seTisFocusSize] = useState(false);

  const [type, seTtype] = useState('');
  const [size, seTSize] = useState('');

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
      <Dropdown
        autoScroll={false}
        style={[
          {
            height: 50,
            borderColor: 'black',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
          },
          isFocusType && { borderColor: 'black' },
        ]}
        placeholderStyle={{ fontSize: 16 }}
        selectedTextStyle={{ fontSize: 16, marginLeft: 8 }}
        inputSearchStyle={{ height: 40, fontSize: 16 }}
        data={itemsType}
        search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={''}
        searchPlaceholder={'search'}
        value={type}
        onFocus={() => seTisFocusType(true)}
        onBlur={() => seTisFocusType(false)}
        onChange={item => seTtype(item.value)}
        renderRightIcon={() => <UpDownIcn isFocus={isFocusType} />}
      />
      <Text style={{ marginTop: '2%' }}>Размер шрифта</Text>

      <Dropdown
        autoScroll={false}
        style={[
          {
            height: 50,
            borderColor: 'black',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,
          },
          isFocusType && { borderColor: 'black' },
        ]}
        placeholderStyle={{ fontSize: 16 }}
        selectedTextStyle={{ fontSize: 16, marginLeft: 8 }}
        inputSearchStyle={{ height: 40, fontSize: 16 }}
        data={itemsSize}
        search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={''}
        searchPlaceholder={'search'}
        value={size}
        onFocus={() => seTisFocusSize(true)}
        onBlur={() => seTisFocusSize(false)}
        onChange={item => seTSize(item.value)}
        renderRightIcon={() => <UpDownIcn isFocus={isFocusSize} />}
      />
    </View>
  );
};

export default ForthStep;
