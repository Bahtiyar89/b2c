import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, View, Dimensions } from 'react-native';
import { Card, Button, Text, Checkbox, TextInput } from 'react-native-paper';
import Modal from 'react-native-modal';

import styles from '../styles';
import mainStyles from '../../../../../config/styles';

interface IProps {
  model: boolean;
  okPressed: (params: boolean) => void;
}

const MonumentCorrectionModal: React.FC<IProps> = ({
  okPressed,
  model,
}: IProps) => {
  return (
    <View>
      <Modal
        onBackButtonPress={() => okPressed(false)}
        style={{ margin: 0 }}
        isVisible={model}>
        <View
          style={{
            backgroundColor: 'white',
            height: Dimensions.get('window').height,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              paddingTop: '15%',
            }}>
            Поправка памятника
          </Text>

          <View
            style={{
              flexDirection: 'row',
              margin: '5%',
            }}>
            <Text style={{ flex: 1 }}>Реставрация памятника</Text>
            <Text style={{ justifyContent: 'flex-end' }}>__руб</Text>
          </View>

          <Text
            style={{
              flexDirection: 'row',
              marginBottom: '0%',
              marginTop: '0%',
              marginLeft: '5%',
              marginRight: '5%',
            }}>
            Коментарии к заказу
          </Text>
          <TextInput
            style={{ marginLeft: '5%', marginRight: '5%' }}
            numberOfLines={3}
            mode="outlined"
            multiline={true}
            placeholder="Коментарии к заказу"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '5%',
              marginLeft: '5%',
              marginRight: '5%',
            }}>
            <Button
              uppercase={false}
              mode="outlined"
              style={{ backgroundColor: 'orange', width: '45%' }}
              onPress={() => okPressed(false)}>
              <Text style={{ color: 'white' }}>Отмена</Text>
            </Button>
            <Button
              uppercase={false}
              mode="outlined"
              style={{ backgroundColor: '#333333', width: '45%' }}
              onPress={() => okPressed(false)}>
              <Text style={{ color: 'white' }}>Выбрать</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default MonumentCorrectionModal;
