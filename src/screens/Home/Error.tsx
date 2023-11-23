import React from 'react';
import {Text, View} from 'react-native';
import {PageContainer} from '../../components';
import {styles} from './style';
import {useHome} from '../../hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';

export function Error() {
  const {refetch} = useHome();

  return (
    <PageContainer>
      <View>
        <Text style={styles.title}>Currencies</Text>
        <Text style={styles.errorText}>
          Opp something went wrong, please try again
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonError}
        onPress={() => refetch()}>
        <Text style={styles.textError}>Try again</Text>
      </TouchableOpacity>
    </PageContainer>
  );
}
