import React from 'react';
import { View, Text } from 'react-native';

const OutputErrors = props => {
  const { errors } = props;
  if (errors === null || errors === undefined || errors.length === 0) {
    return <Text>{''}</Text>;
  }

  return (
    <View>
      {errors.map((item, idx) => (
        <Text key={idx}>{item}</Text>
      ))}
    </View>
  );
};
export default OutputErrors;
