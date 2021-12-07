import React, { useRef, useCallback, useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Button,
  Checkbox,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import Wizard from 'react-native-wizard';

import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

import AppStyles from '../../../../../../config/styles';
import styles from './styles';
import MonumentModel from './installationMonumentModel';
import FirstStep from './firstStep';
import SecondStep from './secondStep';
import ForthStep from './forthStep';
import FifthStep from './fifthStep';
import SixthStep from './sixthStep';

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
  model: boolean;
  okPressed: (params: boolean) => void;
  noPressed: () => void;
}

const Model: React.FC<IState> = ({ okPressed, noPressed, model }: IState) => {
  const elements = {
    email: '',
    phone: '',
  };
  const [user, seTuser] = useState({ ...elements });

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
  const [third, seTthird] = useState({
    src: '',
    name: '',
    price: '',
  });
  const cancelModelMonument = () => seTmonumentModel(false);
  const selectMonumentItem = (item: any) => {
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

  //Checkbox
  const [checkedMonument, seTcheckedMonument] = useState(false);
  const [checkedPlate, seTcheckedPlate] = useState(false);
  const [checkedEpitaph, seTcheckedEpitaph] = useState(false);
  const [checkedPictureEpitaph, seTcheckedPictureEpitaph] = useState(false);
  const [checkedPictureCriss, seTcheckedPictureCriss] = useState(false);
  const [checkedQrCode, seTcheckedQrCode] = useState(false);
  console.log('monument : ', monument);
  const selected = (val: any) => {
    console.log('val: ', val);

    seTmonument(val);
  };
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
  const [value, setValue] = React.useState('first');
  const wizard = useRef<any>();
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isLastStep, setIsLastStep] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);
  const stepList = [
    {
      content: (
        <FirstStep
          selectedMonument={(val: any) => selected(val)}
          monument={monument}
          model={model}
        />
      ),
    },
    {
      content: <SecondStep />,
    },
    {
      content: (
        <View style={{ width: '90%' }}>
          <Text style={{ marginTop: '2%', fontSize: 20 }}>
            Фото на памятнике
          </Text>
          <Text style={{ marginTop: '2%' }}>Вид</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={{
              borderColor: '#dfdfdf',
            }}
            style={{ marginBottom: '5%', zIndex: 1000, elevation: 1000 }}
            zIndex={1000}
            placeholder="Вид"
          />
          <Button
            style={{
              marginTop: 15,
              backgroundColor: '#333333',
              elevation: 0,
            }}
            onPress={() => seTlookOpen(true)}
            mode="contained">
            <Text style={{ color: 'white' }}>Выбрать</Text>
          </Button>
        </View>
      ),
    },
    {
      content: (
        <ForthStep
          model={false}
          selectedMonument={undefined}
          monument={monument}
        />
      ),
    },
    {
      content: (
        <FifthStep model={false} selectedMonument={{}} monument={monument} />
      ),
    },
    {
      content: (
        <SixthStep
          model={false}
          selectedMonument={undefined}
          monument={monument}
          cancelPressed={cancelPressed}
        />
      ),
    },
  ];
  return (
    <>
      <Modal
        onBackButtonPress={cancelPressed}
        style={{ margin: 0 }}
        isVisible={model}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.modelHeaderText}>Установка памятника</Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: '#FFF',
                borderBottomColor: '#dedede',
                borderBottomWidth: 1,
              }}>
              <Button
                disabled={isFirstStep}
                onPress={() => wizard.current.prev()}>
                <Text style={{ fontSize: 8 }}>Предыдущая</Text>
              </Button>
              <Text>{currentStep + 1} из 6</Text>
              <Button
                disabled={isLastStep}
                onPress={() => wizard.current.next()}>
                <Text style={{ fontSize: 8 }}>Далее</Text>
              </Button>
            </View>

            <View style={styles.modelContainer}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000,
                }}>
                <Wizard
                  ref={wizard}
                  steps={stepList}
                  isFirstStep={val => setIsFirstStep(val)}
                  isLastStep={val => setIsLastStep(val)}
                  onNext={() => {
                    console.log('Next Step Called');
                  }}
                  onPrev={() => {
                    console.log('Previous Step Called');
                  }}
                  currentStep={({ currentStep, isLastStep, isFirstStep }) => {
                    setCurrentStep(currentStep);
                  }}
                />
                <View style={{ flexDirection: 'row', margin: 18 }}>
                  {stepList.map((val, index) => (
                    <View
                      key={'step-indicator-' + index}
                      style={{
                        width: 10,
                        marginHorizontal: 6,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor:
                          index === currentStep ? '#fc0' : '#000',
                      }}
                    />
                  ))}
                </View>
              </View>
            </View>
            <Modal style={{ margin: 0 }} isVisible={lookOpen}>
              <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                  <View style={{ backgroundColor: 'white', padding: 10 }}>
                    <Text style={styles.modelHeaderText}>
                      Перечень памятников
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            seTthird({
                              src: '.../../../../../../assets/gubin.png',
                              name: 'Наименование',
                              price: '780 руб',
                            });
                            seTlookOpen(false);
                          }}>
                          <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../../../../../assets/gubin.png')}
                          />
                          <Text style={{ textAlign: 'center' }}>
                            Наименование
                          </Text>
                          <Text style={{ textAlign: 'center' }}>780 руб</Text>
                        </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            seTthird({
                              src: '../../../../../../assets/gubin.png',
                              name: 'Наименование',
                              price: '1050 руб',
                            });
                            seTlookOpen(false);
                          }}>
                          <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../../../../../assets/gubin.png')}
                          />
                          <Text style={{ textAlign: 'center' }}>
                            Наименование
                          </Text>
                          <Text style={{ textAlign: 'center' }}>1050 руб</Text>
                        </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            seTthird({
                              src: '../../../../../../assets/gubin.png',
                              name: 'Наименование',
                              price: '1230 руб',
                            });
                            seTlookOpen(false);
                          }}>
                          <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../../../../../assets/gubin.png')}
                          />
                          <Text style={{ textAlign: 'center' }}>
                            Наименование
                          </Text>
                          <Text style={{ textAlign: 'center' }}>1230 руб</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            {
                              seTthird({
                                src: '../../../../../../assets/gubin.png',
                                name: 'Наименование',
                                price: '1320 руб',
                              });
                              seTlookOpen(false);
                            }
                          }}>
                          <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../../../../../assets/gubin.png')}
                          />
                          <Text style={{ textAlign: 'center' }}>
                            Наименование
                          </Text>
                          <Text style={{ textAlign: 'center' }}>1320 руб</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            seTthird({
                              src: '../../../../../../assets/gubin.png',
                              name: 'Наименование',
                              price: '1440 руб',
                            });
                            seTlookOpen(false);
                          }}>
                          <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../../../../../assets/gubin.png')}
                          />
                          <Text style={{ textAlign: 'center' }}>
                            Наименование
                          </Text>
                          <Text style={{ textAlign: 'center' }}>1440 руб</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            seTthird({
                              src: '../../../../../../assets/gubin.png',
                              name: 'Наименование',
                              price: '9600 руб',
                            });
                            seTlookOpen(false);
                          }}>
                          <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../../../../../assets/gubin.png')}
                          />
                          <Text style={{ textAlign: 'center' }}>
                            Наименование
                          </Text>
                          <Text style={{ textAlign: 'center' }}>9600 руб</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <Button
                      style={{
                        width: '100%',
                        marginTop: 5,
                        backgroundColor: '#333333',
                        zIndex: 1,
                        elevation: 0,
                      }}
                      mode="contained"
                      onPress={() => console.log('')}>
                      <Text style={{ color: 'white' }}>Показать еще</Text>
                    </Button>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </Modal>
            <MonumentModel
              cancelModel={cancelModelMonument}
              selectPressed={selectMonumentItem}
              model={monumentModel}
            />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Model;
