import React, { useContext, useEffect } from 'react';
import { ScrollView, SafeAreaView, View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import styles from './styles';
import utility from '../../../../utils/Utility';
import DashboardContext from '../../../../context/dashboard/DashboardContext';

interface IProps {
  navigation: any;
}

const ServiceForYourself: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  const dashboardContext = useContext(DashboardContext);
  const {
    getTombCareService,
    tombcareService,
    modalTombCare,
    loading,
    modalTombFalse,
  } = dashboardContext;

  useEffect(() => {
    const storage = async () => {
      let user = await utility.getItemObject('user');
    };
    storage();
  }, []);

  const navigateYourSelf = () => {
    navigation.navigate('ServiceForYourself');
  };

  const gravePhoto = () => {
    navigation.navigate('CareOfGravesPhoto');
  };
  console.log('tombcareService[0]?.name ', tombcareService[0]?.name);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.modelHeaderText}>Уход за могилами</Text>

          <Button
            style={styles.buttonWidth}
            onPress={gravePhoto}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Сделать фото могилы
            </Text>
          </Button>
          <Button
            style={styles.buttonWidth}
            onPress={navigateYourSelf}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Выбрать услуги самому
            </Text>
          </Button>

          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              textAlign: 'center',
            }}>
            Комплексы
          </Text>
          <View
            style={{
              marginTop: 20,
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
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
            style={{
              paddingTop: '2%',
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceForYourself;
