import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Image } from 'react-native';
import { Button, Text, FAB } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import utility from '../../../../utils/Utility';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import F4Context from '../../../../context/f4_context';
import styles from './styles';
import I18n from '../../../../../i18';
import DashboardContext from '../../../../context/dashboard/DashboardContext';
import Validation from '../../../../components/validation';

interface IProps {
  navigation: any;
}

const CareGrave: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  //const dispatch = useDispatch();
  //const onLogout = () => dispatch(loginActions.logOut());
  const dashboardContext = useContext(DashboardContext);
  const {
    getTombCareService,
    tombcareService,
    modalTombCare,
    loading,
    modalTombFalse,
  } = dashboardContext;

  const f4Context = useContext(F4Context);
  const {
    getCountries,
    countryList,
    loadRegions,
    regionList,
    loadCities,
    citiesList,
    loadCemeteries,
    cemeteryList,
  } = f4Context;
  const toast = useToast();

  useEffect(() => {
    getCountries();
  }, []);

  const [country, seTcountry] = useState('');
  const [region, seTregion] = useState('');
  const [city, seTcity] = useState('');
  const [cemetry, seTcemetry] = useState('');

  const [modelCareGrave, seTmodelCareGrave] = useState(false);

  const navigateGravePhoto = () => {
    seTmodelCareGrave(false);
    navigation.navigate('CareOfGravesPhoto');
  };

  const navigateServiceYourself = () => {
    seTmodelCareGrave(false);
    navigation.navigate('ServiceForYourself');
  };

  const getCountryOptions = () => {
    if (!countryList) {
      return [];
    }
    let out = countryList.map(c => {
      return {
        value: parseInt(c.id, 10),
        label: c.name,
      };
    });
    return out;
  };
  const getRegionOptions = () => {
    if (!regionList) {
      return [];
    }
    let out = regionList.map(c => {
      return {
        value: parseInt(c.id, 10),
        label: c.name,
      };
    });
    return out;
  };

  const getCitiesOptions = () => {
    if (!citiesList) {
      return [];
    }
    let out = citiesList.map(c => {
      return {
        value: parseInt(c.id, 10),
        label: c.name,
      };
    });
    return out;
  };

  const getCemetryOptions = () => {
    if (!cemeteryList) {
      return [];
    }
    let out = cemeteryList.map(c => {
      return {
        value: parseInt(c.id, 10),
        label: c.name,
      };
    });
    return out;
  };

  const [countryOpen, setCountryOpen] = useState(false);
  const [regionOpen, seTregionOpen] = useState(false);
  const [cityOpen, seTCityOpen] = useState(false);
  const [cemetryOpen, seTcemetryOpen] = useState(false);

  //on Open dropdown
  const onCountryOpen = useCallback(() => {
    seTregionOpen(false);
  }, []);

  const onRegionOpen = useCallback(() => {
    setCountryOpen(false);
  }, []);

  const onCityOpen = useCallback(() => {
    seTregionOpen(false);
  }, []);
  const onCemetryOpen = useCallback(() => {
    seTCityOpen(false);
  }, []);

  //dropdown on change
  const setCountryDr = (callback: any) => {
    seTcountry(callback());
    loadRegions(callback());
  };

  const setRegionDr = (callback: any) => {
    seTregion(callback());
    loadCities(callback());
  };

  const setCityDr = (callback: any) => {
    seTcity(callback());
    loadCemeteries(callback());
  };

  const setCemetryDr = (callback: any) => {
    seTcemetry(callback());
    loadCemeteries(callback());
  };

  const goCareGrave = () => {
    getTombCareService(region);
    seTmodelCareGrave(true);
  };

  const navigateYourSelf = () => {
    modalTombFalse();
    navigateServiceYourself();
  };
  const gravePhoto = () => {
    modalTombFalse();
    navigateGravePhoto();
  };

  const validationElements = {
    country: false,
    region: false,
    city: false,
    cemetry: false,
  };

  const [validObj, seTvalidObj] = useState({ ...validationElements });

  const validation = () => {
    let err = false;
    if (country.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, country: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, country: false });
      }, 1000);
      return err;
    }
    if (region.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, region: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, region: false });
      }, 1000);
      return err;
    }
    /*
    if (city.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, city: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, city: false });
      }, 1000);
      return err;
    }
    if (cemetry.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, cemetry: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, cemetry: false });
      }, 1000);
    }*/
    return err;
  };

  const goChooseService = () => {
    const err = validation();

    if (err) {
    } else {
      getTombCareService(region ? region : 1);
      navigation.navigate('ChooseService');
    }
  };

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={'Загружается...'}
        textStyle={{ color: '#3498db' }}
      />
      <View style={styles.buttonMenuContainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 26,
          }}>
          Уход за могилами
        </Text>

        <Text
          style={{
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Местоположение захоронения
        </Text>

        <View style={{ marginTop: 20 }}>
          <Validation
            text={'Страны'}
            visible={validObj.country}
            errText={'Выберите Страну!'}
          />
        </View>
        <DropDownPicker
          open={countryOpen}
          onOpen={onCountryOpen}
          setOpen={setCountryOpen}
          items={getCountryOptions()}
          setValue={setCountryDr}
          value={country}
          zIndex={10}
          dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
          placeholder={'Выберите Страну'}
          placeholderStyle={{ color: '#707070' }}
        />
        <Validation
          text={'Регионы'}
          visible={validObj.region}
          errText={'Выберите Регион!'}
        />
        <DropDownPicker
          open={regionOpen}
          onOpen={onRegionOpen}
          setOpen={seTregionOpen}
          items={getRegionOptions()}
          setValue={setRegionDr}
          value={region}
          zIndex={9}
          dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
          placeholder={'Выберите Регион'}
          placeholderStyle={{ color: '#707070' }}
        />

        <Validation
          text={'Город'}
          visible={validObj.city}
          errText={'Выберите Город!'}
        />
        <DropDownPicker
          open={cityOpen}
          onOpen={onCityOpen}
          setOpen={seTCityOpen}
          items={getCitiesOptions()}
          setValue={setCityDr}
          value={city}
          zIndex={8}
          dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
          placeholder={'Выберите Город'}
          placeholderStyle={{ color: '#707070' }}
        />

        <Validation
          text={'Кладбище'}
          visible={validObj.cemetry}
          errText={'Выберите Кладбище!'}
        />
        <DropDownPicker
          open={cemetryOpen}
          onOpen={onCemetryOpen}
          setOpen={seTcemetryOpen}
          items={getCemetryOptions()}
          setValue={setCemetryDr}
          value={cemetry}
          zIndex={7}
          dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
          placeholder={'Выберите Кладбище'}
          placeholderStyle={{ color: '#707070' }}
        />

        <Button
          style={{
            width: '100%',
            marginTop: 20,
            justifyContent: 'center',
            backgroundColor: '#333333',
            zIndex: 1,
            elevation: 0,
          }}
          contentStyle={{ zIndex: 0 }}
          mode="contained"
          onPress={goChooseService}>
          <Text style={{ color: 'white', zIndex: 0 }}>Перейти к услугам</Text>
        </Button>

        <Modal isVisible={false}>
          <View style={styles.modelContainer}>
            <Text style={styles.modelHeaderText}>Уход за могилами</Text>
            <Button
              onPress={navigateYourSelf}
              uppercase={false}
              icon="chevron-right"
              contentStyle={{ flexDirection: 'row-reverse' }}>
              {tombcareService[0]?.name}
            </Button>

            <Button
              onPress={gravePhoto}
              uppercase={false}
              icon="chevron-right"
              contentStyle={{ flexDirection: 'row-reverse' }}>
              {tombcareService[1]?.name}
            </Button>

            <Text style={{ padding: 10, fontSize: 20, textAlign: 'center' }}>
              Комплексы
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Комплекс 1</Text>
                <Text style={{ textAlign: 'center' }}>от 53600 руб</Text>
              </View>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Комплекс 2</Text>
                <Text style={{ textAlign: 'center' }}>от 78500 руб</Text>
              </View>
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Комплекс 3</Text>
                <Text style={{ textAlign: 'center' }}>от 84000 руб</Text>
              </View>
              <View>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../../../assets/gubin.png')}
                />
                <Text style={{ textAlign: 'center' }}>Комплекс 4</Text>
                <Text style={{ textAlign: 'center' }}>от 71000 руб</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CareGrave;
