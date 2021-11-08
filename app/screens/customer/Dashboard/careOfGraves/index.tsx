import React, { useContext, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AuthContext from '../../../../context/auth/AuthContext';
import F4Context from '../../../../context/f4_context';
import styles from './styles';
import I18n from '../../../../../i18';
import Modal from 'react-native-modal';

interface IProps {
  navigation: any;
}

const CareGrave: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  //const dispatch = useDispatch();
  //const onLogout = () => dispatch(loginActions.logOut());
  const authContext = useContext(AuthContext);
  const f4Context = useContext(F4Context);
  const { signOut } = authContext;
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

  const onLogout = () => {
    signOut();
  };

  const [error, setError] = useState(null);
  const [country, seTcountry] = useState('');
  const [region, seTregion] = useState('');
  const [city, seTcity] = useState('');
  const [cemetry, seTcemetry] = useState('');

  useEffect(() => {
    getCountries();
  }, []);

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

  return (
    <View style={styles.container}>
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
        <Text style={{ width: '90%', paddingTop: '2%' }}>Страны</Text>
        <View style={{ height: 65, width: '90%' }}>
          <Dropdown
            mode="outlined"
            label=""
            textInputPlaceholder="Страна"
            data={getCountryOptions()}
            value={country}
            onChange={val => {
              seTcountry(val);
              loadRegions(val);
            }}
          />
        </View>
        <Text style={{ width: '90%', paddingTop: '2%' }}>Регион</Text>
        <View style={{ height: 65, width: '90%' }}>
          <Dropdown
            mode="outlined"
            label=""
            textInputPlaceholder="Регион"
            data={getRegionOptions()}
            value={region}
            onChange={val => {
              seTregion(val);
              loadCities(val);
            }}
          />
        </View>
        <Text style={{ width: '90%', paddingTop: '2%' }}>Город</Text>
        <View style={{ height: 65, width: '90%' }}>
          <Dropdown
            mode="outlined"
            label=""
            textInputPlaceholder="Город"
            data={getCitiesOptions()}
            value={city}
            onChange={val => {
              seTcity(val);
              loadCemeteries(val);
            }}
          />
        </View>
        <Text style={{ width: '90%', paddingTop: '2%' }}>Кладбище</Text>
        <View style={{ height: 65, width: '90%' }}>
          <Dropdown
            mode="outlined"
            label=""
            textInputPlaceholder="Кладбище"
            data={getCemetryOptions()}
            value={cemetry}
            onChange={val => seTcemetry(val)}
          />
        </View>

        <Button
          style={{ width: '90%', marginTop: 20, backgroundColor: '#333333' }}
          mode="contained"
          onPress={() => seTmodelCareGrave(true)}>
          <Text style={{ color: 'white' }}>Перейти к услугам</Text>
        </Button>

        <Modal isVisible={modelCareGrave}>
          <View style={styles.modelContainer}>
            <Text style={styles.modelHeaderText}>Уход за могилами</Text>
            <Button
              onPress={navigateGravePhoto}
              uppercase={false}
              icon="chevron-right"
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Сделать фото могилы
            </Button>

            <Button
              onPress={navigateServiceYourself}
              uppercase={false}
              icon="chevron-right"
              contentStyle={{ flexDirection: 'row-reverse' }}>
              Выбрать услуги самому
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
