import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

interface IState {
  secondModal: boolean;
  selectedModelSecond: any;
  monuments: any;
}

const FirstStepSecondModal: React.FC<IState> = ({
  secondModal,
  selectedModelSecond,
  monuments,
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

  const [material, seTmaterial] = useState(0);
  const [form, seTform] = useState(0);
  const [sizeFont, seTsizeFont] = useState(0);
  const [totalPrice, seTtotalPrice] = useState(0);

  //on Open dropdown
  const onMaterialOpen = useCallback(() => {
    seTformOpen(false);
  }, []);

  const onFormOpen = useCallback(() => {
    seTsizeFontOpen(false);
  }, []);

  //dropdown on change

  const setMaterialDr = (callback: any) => {
    seTtotalPrice(callback() + sizeFont + form);
    seTmaterial(callback());
  };
  const setFormDr = (callback: any) => {
    seTtotalPrice(callback() + sizeFont + material);
    seTform(callback());
  };
  const setSizeFontDr = (callback: any) => {
    seTtotalPrice(callback() + material + form);
    seTsizeFont(callback());
  };
  const [value, setValue] = React.useState('first');

  const getItemsMaterial = () => {
    if (!monuments[0]?.customs) {
      return [];
    }
    const werksBranchOptions = monuments[0]?.customs.filter(
      wa => wa.type === 'material',
    );

    let out = werksBranchOptions.map(c => {
      return {
        value: parseInt(c.priceAdd, 10),
        label: c.name,
        id: parseInt(c.id, 10),
      };
    });
    return out;
  };

  const getItemsSize = () => {
    if (!monuments[0]?.customs) {
      return [];
    }
    const werksBranchOptions = monuments[0]?.customs.filter(
      wa => wa.type === 'size',
    );

    let out = werksBranchOptions.map(c => {
      return {
        value: parseInt(c.priceAdd, 10),
        label: c.name,
      };
    });
    return out;
  };

  const getItemsForm = () => {
    if (!monuments[0]?.customs) {
      return [];
    }
    const werksBranchOptions = monuments[0]?.customs.filter(
      wa => wa.type === 'form',
    );

    let out = werksBranchOptions.map(c => {
      return {
        value: parseInt(c.priceAdd, 10),
        label: c.name,
      };
    });
    return out;
  };

  const getColors = () => {
    if (!monuments[0]?.customs) {
      return [];
    }
    const werksBranchOptions = monuments[0]?.customs.filter(
      wa => wa.type === 'colour',
    );

    let out = werksBranchOptions.map(c => {
      return {
        value: parseInt(c.priceAdd, 10),
        label: c.name,
        id: parseInt(c.id, 10),
      };
    });
    return out;
  };

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
                items={getItemsMaterial()}
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
                    style={{ marginTop: 7 }}>
                    Цвет
                  </Text>
                  {getColors().map(x => (
                    <View style={{ marginLeft: 7 }}>
                      <Text style={{ marginTop: 7 }}>{x.label}</Text>
                      <RadioButton.Android
                        color={'black'}
                        uncheckedColor={'black'}
                        value={x.id}
                      />
                    </View>
                  ))}
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
                items={getItemsForm()}
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
                items={getItemsSize()}
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
                  marginTop: 100,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Общая стоимость</Text>
                <Text>{totalPrice} руб</Text>
              </View>
              <Button
                style={{
                  width: '70%',
                  marginTop: 15,
                  backgroundColor: '#333333',
                  zIndex: 0,
                }}
                mode="contained"
                onPress={() => selectedModelSecond(totalPrice)}>
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
