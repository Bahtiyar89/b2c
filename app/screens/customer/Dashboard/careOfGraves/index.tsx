import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import { Dropdown } from 'react-native-element-dropdown';
import F4Context from '../../../../context/f4_context';
import styles from './styles';
import I18n from '../../../../../i18';
import Validation from '../../../../components/validation';
import UpDownIcn from '../../../../components/upDownIcn';

interface IProps {
  navigation: any;
}

const CareGrave: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

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
    loading,
  } = f4Context;

  useEffect(() => {
    getCountries();
  }, []);

  const [country, seTcountry] = useState('');
  const [region, seTregion] = useState('');
  const [city, seTcity] = useState('');
  const [cemetry, seTcemetry] = useState('');

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

  const validationElements = {
    country: false,
    region: false,
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
    return err;
  };

  const goChooseService = () => {
    const err = validation();

    if (err) {
    } else {
      //getTombCareService(region ? region : 1);
      navigation.navigate('ChooseService');
    }
  };
  const [isFocusCountry, seTisFocusCountry] = useState(false);
  const [isFocusRegions, seTisFocusRegions] = useState(false);
  const [isFocusCity, seTisFocusCity] = useState(false);
  const [isFocusCemetry, seTisFocusCemetry] = useState(false);

  const onChangeCountry = (value: string) => {
    seTcountry(value);
    loadRegions(value);
    seTisFocusCountry(false);
  };
  const onChangeRegion = (value: string) => {
    seTregion(value);
    loadCities(value);
    seTisFocusRegions(false);
  };

  const onChangeCity = (value: string) => {
    seTcity(value);
    loadCemeteries(value);
    seTisFocusCity(false);
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
        <View style={{ width: '95%', marginTop: 20 }}>
          <Validation
            text={I18n.t('countries')}
            visible={validObj.country}
            errText={I18n.t('choose_country')}
          />
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
              isFocusCountry && { borderColor: 'black' },
            ]}
            placeholderStyle={{ fontSize: 16 }}
            selectedTextStyle={{ fontSize: 16, marginLeft: 8 }}
            inputSearchStyle={{ height: 40, fontSize: 16 }}
            data={getCountryOptions()}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={I18n.t('choose_country')}
            searchPlaceholder={I18n.t('search')}
            value={country}
            onFocus={() => seTisFocusCountry(true)}
            onBlur={() => seTisFocusCountry(false)}
            onChange={item => onChangeCountry(item.value)}
            renderRightIcon={() => <UpDownIcn isFocus={isFocusCountry} />}
          />
        </View>

        <View style={{ width: '95%', marginTop: 10 }}>
          <Validation
            text={I18n.t('regions')}
            visible={validObj.region}
            errText={I18n.t('choose_region')}
          />
          <Dropdown
            autoScroll={false}
            style={{
              height: 50,
              borderColor: 'black',
              borderWidth: 0.5,
              borderRadius: 8,
              paddingHorizontal: 8,
            }}
            placeholderStyle={{ fontSize: 16 }}
            selectedTextStyle={{ fontSize: 16, marginLeft: 8 }}
            inputSearchStyle={{ height: 40, fontSize: 16 }}
            data={getRegionOptions()}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={I18n.t('choose_region')}
            searchPlaceholder={I18n.t('search')}
            value={region}
            onFocus={() => seTisFocusRegions(true)}
            onBlur={() => seTisFocusRegions(false)}
            onChange={item => onChangeRegion(item.value)}
            renderRightIcon={() => <UpDownIcn isFocus={isFocusRegions} />}
          />
        </View>

        <View style={{ width: '95%', marginTop: 10 }}>
          <Text>{I18n.t('cities')}</Text>
          <Dropdown
            autoScroll={false}
            style={{
              height: 50,
              borderColor: 'black',
              borderWidth: 0.5,
              borderRadius: 8,
              paddingHorizontal: 8,
            }}
            placeholderStyle={{ fontSize: 16 }}
            selectedTextStyle={{ fontSize: 16, marginLeft: 8 }}
            inputSearchStyle={{ height: 40, fontSize: 16 }}
            data={getCitiesOptions()}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={I18n.t('choose_city')}
            searchPlaceholder={I18n.t('search')}
            value={city}
            onFocus={() => seTisFocusCity(true)}
            onBlur={() => seTisFocusCity(false)}
            onChange={item => onChangeCity(item.value)}
            renderRightIcon={() => <UpDownIcn isFocus={isFocusCity} />}
          />
        </View>

        <View style={{ width: '95%', marginTop: 10 }}>
          <Text>{I18n.t('cemetries')}</Text>
          <Dropdown
            autoScroll={false}
            style={{
              height: 50,
              borderColor: 'black',
              borderWidth: 0.5,
              borderRadius: 8,
              paddingHorizontal: 8,
            }}
            placeholderStyle={{ fontSize: 16 }}
            selectedTextStyle={{ fontSize: 16, marginLeft: 8 }}
            inputSearchStyle={{ height: 40, fontSize: 16 }}
            data={getCemetryOptions()}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={I18n.t('choose_cemetry')}
            searchPlaceholder={I18n.t('search')}
            value={cemetry}
            onFocus={() => seTisFocusCemetry(true)}
            onBlur={() => seTisFocusCemetry(false)}
            onChange={item => seTcemetry(item.value)}
            renderRightIcon={() => <UpDownIcn isFocus={isFocusCemetry} />}
          />
        </View>

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
      </View>
    </View>
  );
};

export default CareGrave;
