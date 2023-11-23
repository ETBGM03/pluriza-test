import React, {PropsWithChildren} from 'react';
import {SafeAreaView, View} from 'react-native';

import {styles} from './style';

export function PageContainer(props: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.body}>{props.children}</View>
    </SafeAreaView>
  );
}
