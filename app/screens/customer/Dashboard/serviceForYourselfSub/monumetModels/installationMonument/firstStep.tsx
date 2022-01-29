import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import Modal from 'react-native-modal';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';

const FirstStep = props => {
  //Checkbox
  const {
    chooseMonument,
    modalTotalPrice,
    monument,
    monuments,
    openAllMonumentModal,
  } = props;
  const [mainModel, seTmainModel] = useState(false);

  const cancelModelMonument = () => {
    seTmainModel(false);
    console.log('cancel pressed');
  };
  console.log('monuments: ', monuments);

  const [typeInstallation, seTtypeInstallation] = React.useState('');
  //Checkbox
  const [checkedMonument, seTcheckedMonument] = useState(false);
  console.log('typeInstallation: 3 ', typeInstallation);
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={{ width: '90%' }}>
      <Text style={{ margin: 10, textAlign: 'center', fontSize: 20 }}>
        Выбор памятника
      </Text>

      <View
        style={{
          flexDirection: 'row',
          width: '70%',
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

      <Button
        style={{
          marginTop: 5,
          backgroundColor: '#333333',
        }}
        mode="contained"
        onPress={openAllMonumentModal}>
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
              onPress={() => seTtypeInstallation('usual')}
              style={{ margin: 8 }}>
              Обычная
            </Text>
          </View>
          {typeInstallation === 'usual' && (
            <Text
              style={{ alignSelf: 'center' }}
              onPress={() => seTtypeInstallation('usual')}>
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
              onPress={() => seTtypeInstallation('forced')}
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
    </View>
  );
};

export default FirstStep;
