import React, {Fragment} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type Props = {
  market_cap: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
};

export function DetailCoin(props: Props) {
  const {high_24h, low_24h, market_cap, price_change_24h} = props;

  return (
    <Fragment>
      <Text style={styles.textRight} numberOfLines={1} ellipsizeMode="tail">
        Market Cap ${market_cap}
      </Text>
      <Text style={styles.textRight} numberOfLines={1} ellipsizeMode="tail">
        High 24h: ${high_24h}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textRight}>
        Low 24h: ${low_24h}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textRight}>
        Price Change 24h: ${price_change_24h}
      </Text>
    </Fragment>
  );
}
