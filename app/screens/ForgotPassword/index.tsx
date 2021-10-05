import React, {useState} from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
const Dashboard: React.FC = () => {
  const goBack = () => NavigationService.navigate('Details');
  const [email, seTemail] = useState("");
  const onLogin = () => NavigationService.navigate('Login');
  return (
    <View style={styles.container}>
      <Text style={{ color: "black", fontWeight: 'bold', fontSize: 28 }} >Forgot Password</Text>
        <Text style={{ color: "#768192" }}>Sign in to your account</Text>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../assets/user-4.png')} //Change your icon image here
            style={styles.ImageStyle}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={val => seTemail(val)}
            value={email}
          />
        </View> 
        <View style={{ flexDirection: 'row' }}>
          <Button  mode="outlined" onPress={goBack} 
            style={{ backgroundColor: "#2819ae", marginLeft:10 }}
          >
            <Text style={{ color: "white" }}>Send Instructions</Text>
          </Button>
          <Text style={{ marginRight: 10, flex: 1, color: '#321fdb', textAlign: 'right', fontSize: 16 }}
            onPress={onLogin}
            >
            Login
          </Text>
        </View>
      
    </View>
  );
};

export default Dashboard;
