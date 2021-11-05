import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Text, HelperText, TextInput } from 'react-native-paper';
import Modal from 'react-native-modal';

import styles from './styles';

interface IState {
  model: boolean;
  okPressed: (params: any) => void;
  noPressed: () => void;
}

const ProfileEditModal: React.FC<IState> = ({
  okPressed,
  noPressed,
  model,
}: IState) => {
  const elements = {
    surname: '',
    name: '',
    phone: '',
    fname: '',
    dr: '',
    ds: '',
    country: '',
    region: '',
    city: '',
    tomb: '',
  };
  const [user, seTuser] = useState({ ...elements });

  const validationElements = {
    email: false,
    phone: false,
  };

  const [validObj, seTvalidObj] = useState({ ...validationElements });

  const validation = () => {
    let err = false;

    if (user.phone.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, phone: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, phone: false });
      }, 1000);
    }
    return err;
  };

  const onButtonPressed = () => {
    let err = validation();
    if (err) {
    } else {
      okPressed(user);
    }
  };

  return (
    <>
      <Modal isVisible={model}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.modelContainer}>
              <Text style={{ fontSize: 26 }}>Найти могилу</Text>
              <Text style={{ fontSize: 20 }}>Описание услуги</Text>
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Фамилия</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="Фамилия"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, surname: val })}
                value={user.surname}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Имя</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="имя"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, name: val })}
                value={user.name}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Имя</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.phone}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="имя"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, fname: val })}
                value={user.name}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Отчество</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="имя"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, fname: val })}
                value={user.fname}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Д.Р.</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="имя"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, dr: val })}
                value={user.dr}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Д.C.</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="имя"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, ds: val })}
                value={user.ds}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Страна</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="имя"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, country: val })}
                value={user.country}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Регион</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="имя"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, region: val })}
                value={user.region}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Город</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="Город"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, city: val })}
                value={user.city}
              />
              <View style={styles.modelTextAndError}>
                <Text style={{ flex: 1 }}>Кладбище</Text>
                <HelperText
                  style={styles.modelHelperText}
                  type="error"
                  visible={validObj.email}>
                  input недействителень!
                </HelperText>
              </View>
              <TextInput
                placeholder="имя"
                mode="outlined"
                onChangeText={val => seTuser({ ...user, tomb: val })}
                value={user.tomb}
              />

              <View style={styles.modelYesNo}>
                <Button onPress={() => noPressed()}>
                  <Text style={styles.modelButtonNoColor}>Отмена</Text>
                </Button>
                <Button onPress={() => onButtonPressed()}>
                  <Text style={styles.modelButtonYesColor}>Да</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default ProfileEditModal;
