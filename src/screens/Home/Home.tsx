import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, Text} from 'react-native';

import {CryptoCurrencies} from '../../utils';
import {CardCurrency, PageContainer} from '../../components';
import {useHome} from '../../hooks';

import {styles} from './style';
import {Loader} from './Loader';
import {Error} from './Error';

export function Home() {
  const {data, isLoading, error, handleViewDetail} = useHome();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<CryptoCurrencies>) => (
      <CardCurrency {...item} handlePress={handleViewDetail} />
    ),
    [handleViewDetail],
  );
  console.log('render');
  if (isLoading) {
    return <Loader />;
  }

  if (error && !isLoading) {
    return <Error />;
  }

  return (
    <PageContainer>
      <Text style={styles.title}>Currencies</Text>
      <FlatList<CryptoCurrencies>
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </PageContainer>
  );
}
