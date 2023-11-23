import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {styles} from './styles';
import {PropsConvertCurrency} from './types';

export function ConvertCurrency(props: PropsConvertCurrency) {
  const {memoValueCOP, setValue, value} = props;

  return (
    <View style={styles.convertCurrent}>
      <TextInput
        style={styles.input}
        placeholder="amount of crypto"
        inputMode="numeric"
        onChangeText={setValue}
        value={`${value}`}
      />

      <View>
        <Text
          style={styles.convertedText}
          numberOfLines={1}
          ellipsizeMode="tail">
          Value to convert to COP ${memoValueCOP}
        </Text>
      </View>
    </View>
  );
}
