import React, { useRef, useState, useContext, Fragment } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Wizard from 'react-native-wizard';
import DropDownPicker from 'react-native-dropdown-picker';
import AuthContext from '../../../../../context/auth/AuthContext';
import CommodityContext from '../../../../../context/commodities/CommodityContext';
import styles from './styles';
import FirstStep from '../monumetModels/installationMonument/firstStep';
import SecondStep from '../monumetModels/installationMonument/secondStep';
import ForthStep from '../monumetModels/installationMonument/forthStep';
import FifthStep from '../monumetModels/installationMonument/fifthStep';
import SixthStep from '../monumetModels/installationMonument/sixthStep';
import Login from '../../../../Login';

interface IProps {
  navigation: any;
  model: boolean;
  route: any;
}

const ProductOpts: React.FC<IProps> = (props: IProps) => {
  const authContext = useContext(AuthContext);
  const { isSigned } = authContext;
  const commodityContext = useContext(CommodityContext);
  const {
    getMonumentService,
    tombcareService,
    modalTombCare,
    loading,
    modalTombFalse,
    monuments,
  } = commodityContext;

  const { navigation, model, route } = props;
  const wizard = useRef<any>();
  const [monument, seTmonument] = useState({
    src: 'rrr',
    name: '',
  });
  const [monumentPrice, seTmonumentPrice] = useState(0);
  const selected = (val: any) => {
    seTmonument(val);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState('first');
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);
  const [lookOpen, seTlookOpen] = useState(false);
  const cancelPressed = () => {
    console.log('cancel');
  };
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isLastStep, setIsLastStep] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const chooseMonument = () => {
    console.log('val: 333', getMonumentService('1'));
  };
  console.log('isSigned: ', isSigned);
  const modalTotalPrice = (val: any) => {
    console.log('modalTotalPrice:::: ', val);
  };
  const stepList = [
    {
      content: (
        <FirstStep
          selectedMonument={(val: any) => selected(val)}
          monument={monument}
          monuments={monuments}
          model={model}
          chooseMonument={chooseMonument}
          loading={loading}
          modalTotalPrice={modalTotalPrice}
        />
      ),
    },
    {
      content: <SecondStep />,
    },
    {
      content: (
        <View style={{ width: '95%', backgroundColor: 'red' }}>
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
      {isSigned ? (
        <View style={{ width: '100%' }}>
          <SafeAreaView style={{ backgroundColor: '#FFF' }}>
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
          </SafeAreaView>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              width: '90%',
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
                    backgroundColor: index === currentStep ? '#fc0' : '#000',
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      ) : (
        <>
          <Login route={route} navigation={navigation} />
        </>
      )}
    </>
  );
};

export default ProductOpts;
