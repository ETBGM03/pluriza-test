import React, {memo, useMemo, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import numeral from 'numeral';

import {Props} from './types';
import {styles} from './styles';
import {DetailCoin} from './DetailCoin';
import {ConvertCurrency} from './ConvertCurrency';

import {PageContainer} from '../../components';
import {ArrowLeft} from '../../assets';
import {cryptoConvertToLocalCOP} from '../../utils/helpers';

function DetailMemo(props: Props) {
  const [value, setValue] = useState<string>('');
  const {route, navigation} = props;
  const {params} = route;

  const memoValueCOP = useMemo(() => {
    const valueConverted = cryptoConvertToLocalCOP({
      amount: String(value),
      priceCoinUSD: params.current_price,
    });
    return numeral(valueConverted).format('$0,0');
  }, [params.current_price, value]);

  return (
    <PageContainer>
      <View style={styles.header}>
        <Pressable onPress={navigation.goBack}>
          <Image style={styles.arrowBack} source={ArrowLeft} />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image source={{uri: params.image}} style={styles.image} />
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {params.name} ({params.symbol.toUpperCase()})
            </Text>
            <Text style={styles.price}>
              Current Price {numeral(params.current_price).format('$0,0')}
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <DetailCoin
              high_24h={params.high_24h}
              low_24h={params.low_24h}
              market_cap={params.market_cap}
              price_change_24h={params.price_change_24h}
            />
          </View>
        </View>
        <ConvertCurrency
          value={value}
          setValue={setValue}
          memoValueCOP={memoValueCOP}
        />
      </View>
    </PageContainer>
  );
}

export const Detail = memo(DetailMemo);
