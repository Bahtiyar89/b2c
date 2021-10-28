import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
//import { useDispatch } from 'react-redux';
//import * as loginActions from 'app/store/actions/loginActions';
import AuthContext from '../../../context/auth/AuthContext';
import styles from './styles';
import utility from '../../../utils/Utility';
import I18n from '../../../../i18';

import CareGrave from './careGrave';
import FuneralOrganization from './funeralOrganization';
import RitualGoods from './ritualGoods';
import OrderFuneral from './orderFuneral';

interface IProps {
  navigation: any;
}

const Dashboard: React.FC<IProps> = (props: IProps) => {
  const { navigation } = props;
  console.log('navigation: ', navigation);

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

      toast.show('Добро пожаловать: ' + user?.role!, {
        type: 'success',
        duration: 5000,
        animationType: 'zoom-in',
      });
    };
    storage();
  }, []);

  const [modelCareGrave, seTmodelCareGrave] = useState(false);
  const [modelFuneralOrganization, seTmodelFuneralOrganization] =
    useState(false);
  const [modelRitualGoods, seTmodelRitualGoods] = useState(false);
  const [modelOrderFuneral, seTmodelOrderFuneral] = useState(false);

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
          onPress={() => seTmodelFuneralOrganization(!modelFuneralOrganization)}
          uppercase={false}
          icon="chevron-right"
          contentStyle={{ flexDirection: 'row-reverse' }}>
          {I18n.t('funeral_organization')}
        </Button>

        <Button
          onPress={() => seTmodelRitualGoods(!modelRitualGoods)}
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

        <Button
          onPress={() => seTmodelOrderFuneral(!modelOrderFuneral)}
          uppercase={false}
          icon="chevron-right"
          contentStyle={{ flexDirection: 'row-reverse' }}>
          {I18n.t('order_funeral')}
        </Button>

        <CareGrave
          okPressed={modelOkPressed}
          model={modelCareGrave}
          noPressed={() => seTmodelCareGrave(false)}
        />

        <FuneralOrganization
          okPressed={modelOkPressed}
          model={modelFuneralOrganization}
          noPressed={() => seTmodelFuneralOrganization(false)}
        />

        <RitualGoods
          okPressed={modelOkPressed}
          model={modelRitualGoods}
          noPressed={() => seTmodelRitualGoods(false)}
        />

        <OrderFuneral
          okPressed={modelOkPressed}
          model={modelOrderFuneral}
          noPressed={() => seTmodelOrderFuneral(false)}
        />
      </View>
      <Button
        style={{ marginTop: 100 }}
        icon="logout"
        mode="outlined"
        onPress={onLogout}>
        Выйти
      </Button>
    </View>
  );
};

export default Dashboard;
