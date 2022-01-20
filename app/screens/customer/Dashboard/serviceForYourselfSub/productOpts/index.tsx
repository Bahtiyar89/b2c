import React, { useRef, useState, useContext } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Wizard from 'react-native-wizard';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';

import AuthContext from '../../../../../context/auth/AuthContext';
import CommodityContext from '../../../../../context/commodities/CommodityContext';
import styles from './styles';
import FirstStep from '../monumetModels/installationMonument/firstStep';
import SecondStep from '../monumetModels/installationMonument/secondStep';
import ForthStep from '../monumetModels/installationMonument/forthStep';
import FifthStep from '../monumetModels/installationMonument/fifthStep';
import ForthsStep from '../monumetModels/installationMonument/fifthsStep';
import SixthStep from '../monumetModels/installationMonument/sixthStep';
import Login from '../../../../Login';
import I18n from '../../../../../../i18';
import UpDownIcn from '../../../../../components/upDownIcn';

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
  const selected = (val: any) => {
    seTmonument(val);
  };
  const [type, seTtype] = useState('');
  const [typeValue, seTtypeValue] = useState('');
  const items = [
    { label: 'Портрет', value: 'portre' },
    { label: 'Фотокерамика', value: 'photocamera' },
    { label: 'Фото на стекле', value: 'photoOnCam' },
  ];
  const [lookOpen, seTlookOpen] = useState(false);
  const cancelPressed = () => {
    console.log('cannnn: ');

    navigation.navigate('ServiceForYourselfSub', {
      payload: 'monuments',
    });
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
  const [isFocusType, seTisFocusType] = useState(false);
  const onTypeChange = (item: any) => {
    seTtype(item.value)
    if (item.value === 'portre') {
      seTtypeValue('3500 руб.')
    } else if(item.value === 'photocamera'){
      seTtypeValue('4500 руб.')
    }else{
      seTtypeValue('5500 руб.')
    }
  }
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
        <View>
          <Text style={{ marginTop: '2%', fontSize: 20 }}>
            Фото на памятнике
          </Text>

          <View style={{ width: '100%', marginTop: 10 }}>
            <Text>Вид</Text>
            <View style={{flexDirection:'row'}}>
            <Dropdown
              autoScroll={false}
              style={{
                height: 50,
                borderColor: 'black',
                borderWidth: 0.5,
                borderRadius: 8,
                paddingHorizontal: 8,
                width: '70%',
              }}
              placeholderStyle={{ fontSize: 16 }}
              selectedTextStyle={{ fontSize: 16, marginLeft: 8 }}
              inputSearchStyle={{ height: 40, fontSize: 16 }}
              data={items} 
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={'Выберите вид памятника'}
              searchPlaceholder={I18n.t('search')}
              value={type}
              onFocus={() => seTisFocusType(true)}
              onBlur={() => seTisFocusType(false)}
              onChange={item => onTypeChange(item)}
              renderRightIcon={() => <UpDownIcn isFocus={isFocusType} />}
            />
            <Text style={{flex:1, textAlign:'center', marginTop:10}}>{typeValue}</Text>
            </View>
          </View>
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
        <ForthsStep
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
          chooseSixStep={cancelPressed}
        />
      ),
    },
  ];

  return (
    <>
      {isSigned ? (
        <View style={{ flex: 1 }}>
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
              <Text>{currentStep + 1} из 7</Text>
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
              contentContainerStyle={{ width: '100%' }}
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
            <View style={{ flexDirection: 'row', flex: 1, margin: 18 }}>
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
