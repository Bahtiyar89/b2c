import React, { useState, useContext } from 'react';
import { ScrollView, SafeAreaView, View, Image } from 'react-native';
import { Card, Button, Text, Checkbox } from 'react-native-paper';
import Modal from 'react-native-modal';

import CommodityContext from '../../../../context/commodities/CommodityContext';
import styles from './styles';
import ChangeMonument from './monumetModels/changeMonument/changeModel';
import MonumentResolutionModel from './monumetModels/monumentResolutionModel';
import MonumentRestorationModal from './monumetModels/monumentRestorationModel';
import MonumentCorrectionModal from './monumetModels/monumentCorrectionModel';

interface IProps {
  navigation: any;
  route: any;
}

const ServiceForYourselfSub: React.FC<IProps> = (props: IProps) => {
  const {
    navigation,
    route: { params },
  } = props;
  const commodityContext = useContext(CommodityContext);
  const {
    getMonumentService,
    tombcareService,
    modalTombCare,
    loading,
    modalTombFalse,
    monuments,
  } = commodityContext;
  //dropdown models
  const [modalClean, seTmodalClean] = useState<boolean>(false);
  const [instModel, seTinstModel] = useState<boolean>(false);

  const [checked, setChecked] = useState(false);
  //monument button sub
  const [monumentInstModel, seTmonumentInstModel] = useState<boolean>(false);
  const [monumentResolutionModal, seTmonumentResolutionModal] =
    useState<boolean>(false);
  const [monumentChangeModel, seTmonumentChangeModel] =
    useState<boolean>(false);
  const [monumentRestorationModel, seTmonumentRestorationModel] =
    useState<boolean>(false);
  const [monumentCorrectionModel, seTmonumentCorrectionModel] =
    useState<boolean>(false);

  if ('monuments' === params.payload) {
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
              ??????????????????
            </Text>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => navigation.navigate('productOps')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ??????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentResolutionModal(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentChangeModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentRestorationModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ??????????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTmonumentCorrectionModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????????
              </Text>
            </Button>
          </View>

          <ChangeMonument
            navigation={navigation}
            route={params}
            model={monumentChangeModel}
            okPressed={() => seTmonumentChangeModel(false)}
            noPressed={() => seTmonumentChangeModel(false)}
          />
          <MonumentResolutionModel
            navigation={navigation}
            route={params}
            okPressed={val => seTmonumentResolutionModal(val)}
            model={monumentResolutionModal}
          />
          <MonumentRestorationModal
            okPressed={val => seTmonumentRestorationModel(val)}
            model={monumentRestorationModel}
            navigation={undefined}
            route={undefined}
          />
          <MonumentCorrectionModal
            okPressed={val => seTmonumentCorrectionModel(val)}
            model={monumentCorrectionModel}
            navigation={undefined}
            route={undefined}
          />
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('fences' === params.payload) {
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
              ????????????
            </Text>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTinstModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ??????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('tablesBenches' === params.payload) {
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
              C???????? C??????????????
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('flowers' === params.payload) {
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
              ????????????????
            </Text>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTinstModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ??????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('impostions' === params.payload) {
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
              ????????????????????
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={'#397AF9'}
              />
              <Text style={{ flex: 1, margin: 4 }}>??????????</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={'#397AF9'}
              />
              <Text style={{ flex: 1, margin: 8 }}>??????????</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={'#397AF9'}
              />
              <Text style={{ flex: 1, margin: 8 }}>??????????????</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
              <Image
                source={require('../../../../assets/gubin.png')} //Change your icon image here
                style={{ width: 100, height: 100 }}
              />
              <Text style={{ flex: 1, margin: 4 }}>??????????</Text>
              <Text style={{ justifyContent: 'flex-end' }}>__??????</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('clean' === params.payload) {
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
              ????????????
            </Text>
          </View>
          <Card style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
            <Card.Content>
              <Text style={styles.modelHeaderText}>????????????????????????</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={{ fontSize: 18 }}>?????????? 1</Text>
                  <Text>???????????? 1</Text>
                  <Text>???????????? 2</Text>
                  <Text>???????????? 3</Text>
                </View>

                <View>
                  <Text style={{ textAlign: 'center', fontSize: 16 }}>
                    4200 ??????
                  </Text>
                  <Button
                    onPress={() => seTmodalClean(!modalClean)}
                    uppercase={false}>
                    ??????????????
                  </Button>

                  <Button
                    onPress={() => seTmodalClean(!modalClean)}
                    uppercase={false}>
                    ???????????????? ????????????????
                  </Button>
                </View>
              </View>
            </Card.Content>
          </Card>

          <Card style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
            <Card.Content style={{ margin: 10 }}>
              <Text style={styles.modelHeaderText}>????????????????????????</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={{ fontSize: 18 }}>?????????? 2</Text>
                  <Text>???????????? 1</Text>
                  <Text>???????????? 2</Text>
                  <Text>???????????? 3</Text>
                </View>

                <View>
                  <Text style={{ textAlign: 'center', fontSize: 16 }}>
                    6800 ??????
                  </Text>
                  <Button
                    onPress={() => seTmodalClean(!modalClean)}
                    uppercase={false}>
                    ??????????????
                  </Button>

                  <Button
                    onPress={() => seTmodalClean(!modalClean)}
                    uppercase={false}>
                    ???????????????? ????????????????
                  </Button>
                </View>
              </View>
            </Card.Content>
          </Card>

          <Card style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
            <Card.Content>
              <Text style={styles.modelHeaderText}>????????????????????????</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text style={{ fontSize: 12, padding: 5 }}>?????????? ????</Text>
                  <Text style={{ fontSize: 12, padding: 0 }}>
                    ??????????????????????????????
                  </Text>
                  <Text style={{ fontSize: 12, padding: 0 }}>
                    ???????????????????? ??????????
                  </Text>
                  <Text>???????????? 1</Text>
                  <Text>???????????? 2</Text>
                  <Text>???????????? 3</Text>
                </View>

                <View>
                  <Text style={{ textAlign: 'center', fontSize: 16 }}>
                    6800 ??????
                  </Text>
                  <Button
                    onPress={() => seTmodalClean(!modalClean)}
                    uppercase={false}>
                    ??????????????
                  </Button>

                  <Button
                    onPress={() => seTmodalClean(!modalClean)}
                    uppercase={false}>
                    ???????????????? ????????????????
                  </Button>
                </View>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('churchService' === params.payload) {
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
              ?????????????????? ????????????
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else if ('vases' === params.payload) {
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
              ??????????????
            </Text>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => seTinstModel(true)}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ??????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????????
              </Text>
            </Button>
            <Button
              style={{ width: '90%' }}
              uppercase={false}
              labelStyle={{ fontSize: 25 }}
              icon="menu-right"
              contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
              }}
              onPress={() => console.log('pressed')}>
              <Text
                style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
                ????????????
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#3498db' }}>
              ?????? ???? ???? ?????? ?????????????????? ??????????
            </Text>

            <Modal isVisible={modalClean}>
              <View style={styles.modelContainer}>
                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content>
                    <Text style={styles.modelHeaderText}>????????????????????????</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <Text style={{ fontSize: 18 }}>?????????? 1</Text>
                        <Text>???????????? 1</Text>
                        <Text>???????????? 2</Text>
                        <Text>???????????? 3</Text>
                      </View>

                      <View>
                        <Text style={{ textAlign: 'center', fontSize: 16 }}>
                          4200 ??????
                        </Text>
                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          ??????????????
                        </Button>

                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          ???????????????? ????????????????
                        </Button>
                      </View>
                    </View>
                  </Card.Content>
                </Card>

                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content style={{ margin: 10 }}>
                    <Text style={styles.modelHeaderText}>????????????????????????</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <Text style={{ fontSize: 18 }}>?????????? 2</Text>
                        <Text>???????????? 1</Text>
                        <Text>???????????? 2</Text>
                        <Text>???????????? 3</Text>
                      </View>

                      <View>
                        <Text style={{ textAlign: 'center', fontSize: 16 }}>
                          6800 ??????
                        </Text>
                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          ??????????????
                        </Button>

                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          ???????????????? ????????????????
                        </Button>
                      </View>
                    </View>
                  </Card.Content>
                </Card>

                <Card
                  style={{ margin: 10, borderColor: 'black', borderWidth: 1 }}>
                  <Card.Content>
                    <Text style={styles.modelHeaderText}>????????????????????????</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <Text style={{ fontSize: 12, padding: 5 }}>
                          ?????????? ????
                        </Text>
                        <Text style={{ fontSize: 12, padding: 0 }}>
                          ??????????????????????????????
                        </Text>
                        <Text style={{ fontSize: 12, padding: 0 }}>
                          ???????????????????? ??????????
                        </Text>
                        <Text>???????????? 1</Text>
                        <Text>???????????? 2</Text>
                        <Text>???????????? 3</Text>
                      </View>

                      <View>
                        <Text style={{ textAlign: 'center', fontSize: 16 }}>
                          6800 ??????
                        </Text>
                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          ??????????????
                        </Button>

                        <Button
                          onPress={() => seTmodalClean(!modalClean)}
                          uppercase={false}>
                          ???????????????? ????????????????
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
  }
};

export default ServiceForYourselfSub;
