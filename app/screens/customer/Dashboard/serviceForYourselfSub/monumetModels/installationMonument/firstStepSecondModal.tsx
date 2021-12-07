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

interface IState {
  secondModal: boolean;
  selectedModelSecond: any;
}

const itemsMaterial = [
  { label: 'Гранит', value: 'granite' },
  { label: 'Мрамор', value: 'marble' },
  { label: 'Бетон', value: 'concrete' },
];

const itemsForm = [
  { label: 'Форма 1', value: 'form1' },
  { label: 'Форма 2', value: 'form2' },
];

const itemsSize = [
  { label: '12', value: '12' },
  { label: '14', value: '14' },
];

const itemsLook = [
  { label: 'Портрет', value: 'p' },
  { label: 'Фотокерамика', value: 'fk' },
  { label: 'Фото на стекле', value: 'foncam' },
];

const FirstStepSecondModal: React.FC<IState> = ({
  secondModal,
  selectedModelSecond,
}: IState) => {
  //Checkbox

  const [monumentModel, seTmonumentModel] = useState(false);
  const cancelPressed = () => {};
  const cancelModelMonument = () => {
    seTmonumentModel(false);
    console.log('cancel pressed');
  };

  const selectMonumentItem = (item: any) => {
    console.log('item . ', item);
  };
  const [typeInstallation, seTtypeInstallation] = React.useState('usual');
  //Checkbox

  const [materialOpen, seTmaterialOpen] = useState(false);
  const [formOpen, seTformOpen] = useState(false);
  const [sizeFontOpen, seTsizeFontOpen] = useState(false);
  const [checkedMonument, seTcheckedMonument] = useState(false);

  const [look, seTlook] = useState('');
  const [material, seTmaterial] = useState('');
  const [form, seTform] = useState('');
  const [sizeFont, seTsizeFont] = useState('');

  //on Open dropdown
  const onMaterialOpen = useCallback(() => {
    seTformOpen(false);
  }, []);

  const onFormOpen = useCallback(() => {
    seTsizeFontOpen(false);
  }, []);

  //dropdown on change

  const setMaterialDr = (callback: any) => {
    seTmaterial(callback());
  };
  const setFormDr = (callback: any) => {
    seTform(callback());
  };
  const setSizeFontDr = (callback: any) => {
    seTsizeFont(callback());
  };
  const [value, setValue] = React.useState('first');
  return (
    <>
      <Modal style={{ margin: 0 }} isVisible={secondModal}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.modelContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                }}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../../../assets/gubin.png')}
                />
                <View style={{ marginLeft: '2%' }}>
                  <Text style={{ marginTop: '2%' }}>Наименование</Text>
                  <Text style={{ marginTop: '2%' }}>Описание</Text>
                </View>
              </View>
              <Text
                style={{
                  width: '25%',
                  textAlignVertical: 'center',
                }}>
                Материал
              </Text>
              <DropDownPicker
                open={materialOpen}
                onOpen={onMaterialOpen}
                setOpen={seTmaterialOpen}
                items={itemsMaterial}
                setValue={setMaterialDr}
                value={material}
                dropDownContainerStyle={{
                  borderColor: '#dfdfdf',
                }}
                zIndex={1000}
                placeholder="Материал"
              />
              <RadioButton.Group
                onValueChange={newValue => setValue(newValue)}
                value={value}>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    onPress={() => seTcheckedMonument(!checkedMonument)}
                    style={{ margin: 8 }}>
                    Цвет
                  </Text>
                  <RadioButton.Android
                    color="blue"
                    uncheckedColor="blue"
                    value="first"
                  />
                  <RadioButton.Android
                    color="black"
                    uncheckedColor="black"
                    value="second"
                  />
                  <RadioButton.Android
                    color="green"
                    uncheckedColor="green"
                    value="third"
                  />
                  <RadioButton.Android
                    color="yellow"
                    uncheckedColor="yellow"
                    value="fourth"
                  />
                  <RadioButton.Android
                    color="orange"
                    uncheckedColor="orange"
                    value="fifth"
                  />
                  <RadioButton.Android
                    color="grey"
                    uncheckedColor="grey"
                    value="sixes"
                  />
                </View>
              </RadioButton.Group>

              <Text
                style={{
                  width: '25%',
                  textAlignVertical: 'center',
                }}>
                Форма
              </Text>
              <DropDownPicker
                open={formOpen}
                onOpen={onFormOpen}
                setOpen={seTformOpen}
                items={itemsForm}
                setValue={setFormDr}
                value={form}
                dropDownContainerStyle={{
                  borderColor: '#dfdfdf',
                }}
                zIndex={100}
                placeholder="Форма"
              />

              <Text
                style={{
                  width: '25%',
                  textAlignVertical: 'center',
                }}>
                Размер
              </Text>
              <DropDownPicker
                open={sizeFontOpen}
                setOpen={seTsizeFontOpen}
                items={itemsSize}
                setValue={setSizeFontDr}
                value={sizeFont}
                dropDownContainerStyle={{
                  borderColor: '#dfdfdf',
                }}
                placeholder="Размер"
                zIndex={10}
              />
              <View
                style={{
                  marginTop: 60,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Общая стоимость</Text>
                <Text>___руб</Text>
              </View>
              <Button
                style={{
                  width: '70%',
                  marginTop: 15,
                  backgroundColor: '#333333',
                  zIndex: 0,
                }}
                mode="contained"
                onPress={selectedModelSecond}>
                <Text style={{ color: 'white' }}>Выбрать</Text>
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default FirstStepSecondModal;
