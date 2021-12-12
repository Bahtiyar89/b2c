import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import Modal from 'react-native-modal';

import styles from './styles';

interface IState {
  model: boolean;
  selectPressed: (params: any) => void;
  cancelModel: () => void;
  monuments: any;
}

const MonumentModel: React.FC<IState> = ({
  model,
  cancelModel,
  selectPressed,
  monuments,
}: IState) => {
  const elements = {
    email: '',
    phone: '',
  };
  const [user, seTuser] = useState({ ...elements });

  const validationElements = {
    email: false,
    phone: false,
  };

  const [validObj, seTvalidObj] = useState({ ...validationElements });

  const handleChange = (val: string, fieldName: string) => {
    seTuser(prev => {
      const varPr = { ...prev };
      switch (fieldName) {
        case 'email':
          varPr.email = val;
          break;
        case 'phone':
          varPr.phone = val;
          break;
      }
      return varPr;
    });
  };

  const validation = () => {
    let err = false;
    if (!user.email.includes('@')) {
      err = true;
      seTvalidObj({ ...validObj, email: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, email: false });
      }, 1000);
      return err;
    }
    if (user.phone.length < 3) {
      err = true;
      seTvalidObj({ ...validObj, phone: true });
      setTimeout(() => {
        seTvalidObj({ ...validObj, phone: false });
      }, 1000);
    }
    return err;
  };

  return (
    <>
      <Modal style={{ margin: 0 }} isVisible={model}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={{ backgroundColor: 'white', padding: 10 }}>
              <Text style={styles.modelHeaderText}>Перечень памятников</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  {Object.keys(monuments).length > 0 ? (
                    <View>
                      {monuments.map(m => (
                        <TouchableOpacity
                          onPress={() =>
                            selectPressed({
                              name: m.name,
                              price: m.price,
                            })
                          }>
                          <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../../../../../assets/gubin.png')}
                          />
                          <Text style={{ textAlign: 'center' }}>{m.name}</Text>
                          <Text style={{ textAlign: 'center' }}>{m.price}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ) : (
                    <Text></Text>
                  )}
                </View>
              </View>

              <Button
                style={{
                  width: '100%',
                  marginTop: 5,
                  backgroundColor: '#333333',
                  zIndex: 1,
                  elevation: 0,
                }}
                mode="contained"
                onPress={() => console.log('')}>
                <Text style={{ color: 'white' }}>Показать еще</Text>
              </Button>
              <View style={styles.modelYesNo}>
                <Button onPress={cancelModel}>
                  <Text style={styles.modelButtonNoColor}>Отмена</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default MonumentModel;
