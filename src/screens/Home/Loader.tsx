import React from 'react';
import {ScrollView, Text} from 'react-native';

import {styles} from './style';

import {PageContainer, CardSkeleton} from '../../components';

export function Loader() {
  return (
    <PageContainer>
      <Text style={styles.loadingText}>Loading currencies...</Text>
      <ScrollView style={styles.containerLoader}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <CardSkeleton key={`card-skeleton-${i}`} />
        ))}
      </ScrollView>
    </PageContainer>
  );
}
