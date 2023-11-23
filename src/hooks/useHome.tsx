import {useQuery} from 'react-query';
import {useCallback} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {CryptoCurrencies} from '../utils';
import {queryCurrencies} from '../utils/helpers';
import {
  NavigationProps as CustomNavigationProps,
  ROUTES,
} from '../navigation/types';

export function useHome() {
  const {navigate} = useNavigation<NavigationProp<CustomNavigationProps>>();

  const {isLoading, data} = useQuery<CryptoCurrencies[]>({
    queryKey: ['currencies'],
    queryFn: ({signal}) => queryCurrencies(signal!),
  });

  const handleViewDetail = useCallback(
    (props: CryptoCurrencies) => {
      navigate(ROUTES.detail, {...props});
    },
    [navigate],
  );

  return {isLoading, data, handleViewDetail};
}
