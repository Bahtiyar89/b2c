import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button, RadioButton, TextInput } from 'react-native-paper';
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
  const [materialOpen, seTmaterialOpen] = useState(false);
  const [formOpen, seTformOpen] = useState(false);
  const [sizeFontOpen, seTsizeFontOpen] = useState(false);
  const [checkedMonument, seTcheckedMonument] = useState(false);

  const [material, seTmaterial] = useState(0);
  const [form, seTform] = useState(0);
  const [sizeFont, seTsizeFont] = useState(0);
  const [totalPrice, seTtotalPrice] = useState(780);

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
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: 'center' }}>????????????????????????</Text>
                  <TextInput
                    label="O??????????????..."
                    mode="outlined"
                    style={{
                      marginLeft: '5%',
                      width: '100%',
                      textAlign: 'center',
                    }}
                  />
                </View>
              </View>
              <Text
                style={{
                  marginTop: 10,
                  width: '25%',
                  textAlignVertical: 'center',
                }}>
                ????????????????
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
                placeholder="????????????????"
              />
              <RadioButton.Group
                onValueChange={newValue => setValue(newValue)}
                value={value}>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    onPress={() => seTcheckedMonument(!checkedMonument)}
                    style={{ marginTop: 7 }}>
                    ????????
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
                ????????????
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
                placeholder="????????????"
                zIndex={10}
              />
              <View
                style={{
                  marginTop: 100,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>?????????? ??????????????????</Text>
                <Text>{totalPrice} ??????</Text>
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
                <Text style={{ color: 'white' }}>??????????????</Text>
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default FirstStepSecondModal;
