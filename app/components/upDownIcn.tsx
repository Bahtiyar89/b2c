import React from 'react';
import { IconButton } from 'react-native-paper';

interface IProps {
  isFocus: any;
}

const UpDownIcon: React.FC<IProps> = (props: IProps) => {
  const { isFocus } = props;

  return (
    <>
      {isFocus ? (
        <IconButton
          icon="chevron-up"
          size={20}
          onPress={() => console.log('Pressed')}
        />
      ) : (
        <IconButton
          icon="chevron-down"
          size={20}
          onPress={() => console.log('Pressed')}
        />
      )}
    </>
  );
};

export default UpDownIcon;
