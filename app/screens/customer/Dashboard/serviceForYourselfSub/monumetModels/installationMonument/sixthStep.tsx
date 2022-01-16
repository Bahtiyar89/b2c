import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';

import AppStyles from '../../../../../../config/styles';
import styles from '../../productOpts/styles';

interface IState {
  model: boolean;
  selectedMonument: any;
  monument: any;
  chooseSixStep: () => void;
}

const SixthStep: React.FC<IState> = ({
  model,
  monument,
  selectedMonument,
  chooseSixStep,
}: IState) => {
  //Checkbox

  const [checkedQrCode, seTcheckedQrCode] = useState(false);

  return (
    <View style={{ width: '90%' }}>
      <View style={{ flexDirection: 'row', width: '90%' }}>
        <Checkbox.Android
          status={checkedQrCode ? 'checked' : 'unchecked'}
          onPress={() => {
            seTcheckedQrCode(!checkedQrCode);
          }}
          color={AppStyles.color.COLOR_BLUE}
        />
        <Text
          onPress={() => {
            seTcheckedQrCode(!checkedQrCode);
          }}
          style={{ flex: 1, margin: 4 }}>
          Qr code
          <Image
            source={require('../../../../../../assets/exclamation-mark-1.png')} //Change your icon image here
            style={{ width: 20, height: 20 }}
          />
        </Text>
        <Text style={{ marginTop: 8, justifyContent: 'flex-end' }}>__руб</Text>
      </View>

      <TextInput
        numberOfLines={3}
        mode="outlined"
        multiline={true}
        placeholder="Коментарии к заказу"
      />
      <Button
        style={{
          backgroundColor: '#333333',
          marginTop: 10,
        }}
        onPress={chooseSixStep}
        mode="contained">
        <Text style={{ color: 'white' }}>Выбрать</Text>
      </Button>
    </View>
  );
};

export default SixthStep;
