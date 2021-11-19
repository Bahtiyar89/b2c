import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import styles from './styles';

interface IProps {
  navigation: any;
}

const ServiceForYourselfSub: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.mainHeader}>Уход за могилами</Text>
          <Text style={styles.subHeader}>Выбор услуг самому</Text>
          <Button
            style={styles.buttonWidth}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            onPress={() =>
              navigation.navigate('ServiceForYourselfSub', {
                payload: 'monuments',
              })
            }>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Памятники
            </Text>
          </Button>
          <Button
            style={styles.buttonWidth}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            onPress={() =>
              navigation.navigate('ServiceForYourselfSub', {
                payload: 'fences',
              })
            }>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Ограды
            </Text>
          </Button>
          <Button
            style={styles.buttonWidth}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            onPress={() =>
              navigation.navigate('ServiceForYourselfSub', {
                payload: 'tablesBenches',
              })
            }>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Столы/Скамейки
            </Text>
          </Button>
          <Button
            style={styles.buttonWidth}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            onPress={() =>
              navigation.navigate('ServiceForYourselfSub', {
                payload: 'flowers',
              })
            }>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Цветники
            </Text>
          </Button>

          <Button
            style={styles.buttonWidth}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            onPress={() =>
              navigation.navigate('ServiceForYourselfSub', {
                payload: 'impostions',
              })
            }>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Возложение
            </Text>
          </Button>

          <Button
            style={styles.buttonWidth}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            onPress={() =>
              navigation.navigate('ServiceForYourselfSub', {
                payload: 'clean',
              })
            }>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Уборка
            </Text>
          </Button>

          <Button
            style={styles.buttonWidth}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            onPress={() =>
              navigation.navigate('ServiceForYourselfSub', {
                payload: 'churchService',
              })
            }>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Церковные услуги
            </Text>
          </Button>

          <Button
            style={styles.buttonWidth}
            uppercase={false}
            labelStyle={{ fontSize: 25 }}
            icon="menu-right"
            contentStyle={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
            onPress={() =>
              navigation.navigate('ServiceForYourselfSub', {
                payload: 'vases',
              })
            }>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              Вазочки
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceForYourselfSub;
