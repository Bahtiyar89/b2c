import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';

const ForgotPassword: React.FC = () => {
  const goBack = () => NavigationService.navigate('Details');
  const [email, seTemail] = useState('');
  const onLogin = () => NavigationService.navigate('Login');
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 28 }}>
        Востоновить пароль
      </Text>
      <Text style={{ color: '#768192' }}>Введите свой почтовый адрес</Text>
      <View style={styles.SectionStyle}>
        <TextInput
          mode="outlined"
          label="Email"
          style={{ flex: 1 }}
          onChangeText={val => seTemail(val)}
          right={<TextInput.Icon name={require('../../assets/user-4.png')} />}
          value={email}
        />
      </View>
      <View style={{ marginTop: 10, width: '95%', flexDirection: 'row' }}>
        <Button mode="contained" onPress={goBack} style={{ marginLeft: 10 }}>
          <Text style={{ color: 'white' }}>Отправить инструкции</Text>
        </Button>
        <Button
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}
          onPress={onLogin}>
          Войти
        </Button>
      </View>
    </View>
  );
};

export default ForgotPassword;
