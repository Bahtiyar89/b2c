import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import AuthContext from '../../../../context/auth/AuthContext';
import styles from './styles';
import utility from '../../../../utils/Utility';
import InstallationModel from './InstallationModel';

const data = [
  {
    value: 'inst',
    label: 'Установка',
  },
  {
    value: 'str',
    label: 'Демонтаж',
  },
  {
    value: 'change',
    label: 'Замена',
  },
  {
    value: 'reg',
    label: 'Реставрация',
  },
  {
    value: 'cor',
    label: 'Поправка',
  },
];

const dataFences = [
  {
    value: 'inst',
    label: 'Установка',
  },
  {
    value: 'str',
    label: 'Демонтаж',
  },
  {
    value: 'change',
    label: 'Замена',
  },
];

const dataChairs = [];

const dataFlowers = [
  {
    value: 'inst',
    label: 'Установка',
  },
  {
    value: 'str',
    label: 'Демонтаж',
  },
  {
    value: 'change',
    label: 'Замена',
  },
];

const dataChurchServices = [];

const dataVases = [
  {
    value: 'inst',
    label: 'Установка',
  },
  {
    value: 'str',
    label: 'Демонтаж',
  },
  {
    value: 'change',
    label: 'Замена',
  },
];

const dataClean = [
  {
    value: 'set1',
    label: 'Набор 1',
  },
  {
    value: 'set2',
    label: 'Набор 2',
  },
];

const dataImp = [
  {
    value: 'basket',
    label: 'Корзина',
  },
  {
    value: 'fl',
    label: 'Цветы',
  },
  {
    value: 'wr',
    label: 'Венки',
  },
];

interface IProps {
  navigation: any;
}

const ServiceForYourself: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

  useEffect(() => {
    const storage = async () => {
      let user = await utility.getItemObject('user');
    };
    storage();
  }, []);

  const [modelServices, seTmodelServices] = useState(false);

  const modelOkServices = () => {
    seTmodelServices(!modelServices);
  };

  const [monument, seTmonument] = useState<string>('');
  const [fences, seTfences] = useState<string>('');
  const [chairs, seTchairs] = useState<string>('');
  const [flowers, seTflowers] = useState<string>('');
  const [impostions, seTimpostions] = useState<string[]>([]);
  const [churchService, seTchurchService] = useState<string>('');
  const [vases, seTvases] = useState<string>('');
  const [cleanValue, seTcleanValue] = useState<string>('');

  const [monumentOpen, seTmonumentOpen] = useState(false);
  const [fencesOpen, seTfencesOpen] = useState(false);
  const [chairsOpen, seTchairsOpen] = useState(false);
  const [flowersOpen, seTflowersOpen] = useState(false);
  const [impositionOpen, seTimpositionOpen] = useState(false);
  const [cleanOpen, seTcleanOpen] = useState(false);
  const [churchOpen, seTchurchOpen] = useState(false);
  const [vasesOpen, seTvasesOpen] = useState(false);

  //dropdown models
  const [modalClean, seTmodalClean] = useState<boolean>(false);
  const [instModel, seTinstModel] = useState<boolean>(false);
  //on Open dropdown
  const onMonumentOpen = useCallback(() => {
    seTfencesOpen(false);
  }, []);

  const onFencesOpen = useCallback(() => {
    seTchairsOpen(false);
  }, []);

  const onChairsOpen = useCallback(() => {
    seTflowersOpen(false);
  }, []);
  const onFlowersOpen = useCallback(() => {
    seTimpositionOpen(false);
  }, []);
  const onImpositionOpen = useCallback(() => {
    seTcleanOpen(false);
  }, []);
  const onCleanOpen = useCallback(() => {
    seTchurchOpen(false);
  }, []);
  const onChirchOpen = useCallback(() => {
    seTvasesOpen(false);
  }, []);

  //dropdown on change
  const setMonumentDr = (callback: any) => {
    if (callback() === 'inst') {
      seTinstModel(true);
    } else {
    }
    seTmonument(callback());
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 26,
              textAlign: 'center',
            }}>
            Уход за могилами
          </Text>
          <Text>Выбрать типы услуг самому</Text>
          <View style={styles.buttonMenuContainer}>
            <DropDownPicker
              open={monumentOpen}
              onOpen={onMonumentOpen}
              setOpen={seTmonumentOpen}
              items={data}
              setValue={setMonumentDr}
              value={monument}
              zIndex={10}
              placeholder="Памятники"
              dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
              containerStyle={{ paddingTop: '2%' }}
            />

            <DropDownPicker
              open={fencesOpen}
              onOpen={onFencesOpen}
              setOpen={seTfencesOpen}
              items={dataFences}
              setValue={seTfences}
              value={fences}
              zIndex={8}
              placeholder="Ограды"
              dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
              containerStyle={{ paddingTop: '2%' }}
            />

            <DropDownPicker
              open={chairsOpen}
              onOpen={onChairsOpen}
              setOpen={seTchairsOpen}
              items={dataChairs}
              setValue={seTchairs}
              value={fences}
              zIndex={7}
              placeholder="Столы/Скамейки"
              dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
              containerStyle={{ paddingTop: '2%' }}
            />

            <DropDownPicker
              open={flowersOpen}
              onOpen={onFlowersOpen}
              setOpen={seTflowersOpen}
              items={dataFlowers}
              setValue={seTflowers}
              value={flowers}
              zIndex={6}
              placeholder="Цветники"
              dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
              containerStyle={{ paddingTop: '2%' }}
            />

            <DropDownPicker
              multiple={true}
              min={0}
              max={3}
              open={impositionOpen}
              onOpen={onImpositionOpen}
              setOpen={seTimpositionOpen}
              items={dataImp}
              setValue={seTimpostions}
              value={impostions}
              zIndex={5}
              placeholder="Возложение"
              dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
              containerStyle={{ paddingTop: '2%' }}
            />

            <DropDownPicker
              open={cleanOpen}
              onOpen={onCleanOpen}
              setOpen={seTcleanOpen}
              items={dataClean}
              setValue={seTcleanValue}
              value={cleanValue}
              zIndex={4}
              placeholder="Уборка"
              dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
              containerStyle={{ paddingTop: '2%' }}
            />

            <DropDownPicker
              open={churchOpen}
              onOpen={onChirchOpen}
              setOpen={seTchurchOpen}
              items={dataChurchServices}
              setValue={seTchurchService}
              value={churchService}
              zIndex={3}
              placeholder="Церковные услуги"
              dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
              containerStyle={{ paddingTop: '2%' }}
              dropDownDirection="TOP"
            />

            <DropDownPicker
              open={vasesOpen}
              setOpen={seTvasesOpen}
              items={dataVases}
              setValue={seTvases}
              value={vases}
              zIndex={2}
              dropDownDirection="TOP"
              dropDownContainerStyle={{ borderColor: '#dfdfdf' }}
              containerStyle={{ paddingTop: '2%' }}
              placeholder="Вазочки"
            />

            <Button
              style={{ width: '90%', marginTop: 5, backgroundColor: '#333333' }}
              mode="contained"
              onPress={() => seTmodelServices(true)}>
              <Text style={{ color: 'white' }}>Перейти к заказу</Text>
            </Button>
          </View>
          <InstallationModel
            instCloseModal={() => seTinstModel(false)}
            model={instModel}
            okPressed={() => console.log('pressed')}
            noPressed={() => console.log('nooo')}
          />
          <Modal isVisible={modalClean}>
            <View style={styles.modelContainer}>
              <Card
                style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                <Card.Content>
                  <Text style={styles.modelHeaderText}>Наименование</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Text style={{ fontSize: 18 }}>набор 1</Text>
                      <Text>Услуга 1</Text>
                      <Text>Услуга 2</Text>
                      <Text>Услуга 3</Text>
                    </View>

                    <View>
                      <Text style={{ textAlign: 'center', fontSize: 16 }}>
                        4200 руб
                      </Text>
                      <Button
                        onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Выбрать
                      </Button>

                      <Button
                        onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Оформить подписку
                      </Button>
                    </View>
                  </View>
                </Card.Content>
              </Card>

              <Card
                style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                <Card.Content style={{ margin: 10 }}>
                  <Text style={styles.modelHeaderText}>Наименование</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Text style={{ fontSize: 18 }}>набор 2</Text>
                      <Text>Услуга 1</Text>
                      <Text>Услуга 2</Text>
                      <Text>Услуга 3</Text>
                    </View>

                    <View>
                      <Text style={{ textAlign: 'center', fontSize: 16 }}>
                        6800 руб
                      </Text>
                      <Button
                        onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Выбрать
                      </Button>

                      <Button
                        onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Оформить подписку
                      </Button>
                    </View>
                  </View>
                </Card.Content>
              </Card>

              <Card
                style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                <Card.Content>
                  <Text style={styles.modelHeaderText}>Наименование</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Text style={{ fontSize: 12, padding: 5 }}>набор по</Text>
                      <Text style={{ fontSize: 12, padding: 0 }}>
                        благоустройству
                      </Text>
                      <Text style={{ fontSize: 12, padding: 0 }}>
                        мобильного холма
                      </Text>
                      <Text>Услуга 1</Text>
                      <Text>Услуга 2</Text>
                      <Text>Услуга 3</Text>
                    </View>

                    <View>
                      <Text style={{ textAlign: 'center', fontSize: 16 }}>
                        6800 руб
                      </Text>
                      <Button
                        onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Выбрать
                      </Button>

                      <Button
                        onPress={() => seTmodalClean(!modalClean)}
                        uppercase={false}>
                        Оформить подписку
                      </Button>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceForYourself;
