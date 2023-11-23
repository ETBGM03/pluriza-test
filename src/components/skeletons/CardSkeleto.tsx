import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {styles} from './style';

export const CardSkeleton = () => {
  return (
    <View style={styles.cardLoader}>
      <SkeletonPlaceholder>
        <View style={styles.placeholder} />
      </SkeletonPlaceholder>
    </View>
  );
};
