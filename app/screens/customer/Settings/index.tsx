import React, { useContext, useEffect } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';

//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AuthContext from '../../../context/auth/AuthContext';
import styles from './styles';
import utility from '../../../utils/Utility';

interface IState {
  lbarStyle: any;
}

const Settings: React.FC = () => {
  //const dispatch = useDispatch();
  //const onLogout = () => dispatch(loginActions.logOut());
  const authContext = useContext(AuthContext);
  const { signOut } = authContext;

  const toast = useToast();

  const onLogout = () => {
    signOut();
  };
  useEffect(() => {
    const storage = async () => {
      let user = await utility.getItemObject('USER');

      toast.show('Добро пожаловать: ' + user?.role!, {
        type: 'warning',
        duration: 5000,
        animationType: 'zoom-in',
      });
    };
    storage();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Settings;
