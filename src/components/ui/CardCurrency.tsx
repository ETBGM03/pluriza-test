import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import numeral from 'numeral';

import {styles} from './styles';

import {CryptoCurrencies} from '../../utils';

type Props = CryptoCurrencies & {
  handlePress: (values: CryptoCurrencies) => void;
};

export function CardCurrency(props: Props) {
  const {handlePress, ...rest} = props;

  const onPress = () => handlePress(rest);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.cardLeft}>
        <Image
          source={{uri: props.image}}
          alt={`icon-currency-${props.name}`}
          style={styles.iconImage}
        />
        <View>
          <Text>{props.name}</Text>
          <Text>{props.symbol.toUpperCase()}</Text>
        </View>
      </View>
      <Text style={styles.price}>
        {numeral(props.current_price).format('$0,0.00')}
      </Text>
    </Pressable>
  );
}
