import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AuthContext from '../../../context/auth/AuthContext';
import styles from './styles';
import utility from '../../../utils/Utility';
import I18n from '../../../../i18';

import CareGrave from './careGrave';
import RitualGoods from './ritualGoods';

interface IProps {
  navigation: any;
}

const Dashboard: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;

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
      let user = await utility.getItemObject('user');
    };
    storage();
  }, []);

  const [modelCareGrave, seTmodelCareGrave] = useState(false);
  const [modelRitualGoods, seTmodelRitualGoods] = useState(false);

  const modelOkPressed = (params: any) => {
    console.log('params: ', params);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonMenuContainer}>
        <Button
          onPress={() => navigation.navigate('CareOfGraves')}
          uppercase={false}
          icon="chevron-right"
          contentStyle={{ flexDirection: 'row-reverse' }}>
          {I18n.t('care_grave')}
        </Button>

        <Button
          onPress={() => navigation.navigate('RitualGoodsCustomer')}
          uppercase={false}
          icon="chevron-right"
          contentStyle={{ flexDirection: 'row-reverse' }}>
          {I18n.t('ritual_goods')}
        </Button>

        <Button
          onPress={() => seTmodelRitualGoods(!modelRitualGoods)}
          uppercase={false}
          icon="chevron-right"
          contentStyle={{ flexDirection: 'row-reverse' }}>
          {I18n.t('find_grave')}
        </Button>

        <CareGrave
          okPressed={modelOkPressed}
          model={modelCareGrave}
          noPressed={() => seTmodelCareGrave(false)}
        />

        <RitualGoods
          okPressed={modelOkPressed}
          model={modelRitualGoods}
          noPressed={() => seTmodelRitualGoods(false)}
        />
      </View>
    </View>
  );
};

export default Dashboard;
