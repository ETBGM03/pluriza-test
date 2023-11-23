import {NavigationProp, RouteProp} from '@react-navigation/native';

import {CryptoCurrencies} from '../utils';

export enum ROUTES {
  home = 'HOME',
  detail = 'DETAIL',
}

export type NavigationProps = {
  [ROUTES.home]: undefined;
  [ROUTES.detail]: CryptoCurrencies;
};

export type AppStackNavigatorParamList = {
  [ROUTES.home]: undefined;
  [ROUTES.detail]: CryptoCurrencies;
};

export type AppStackScreenProps<T extends keyof AppStackNavigatorParamList> = {
  navigation: NavigationProp<AppStackNavigatorParamList, T>;
  route: RouteProp<AppStackNavigatorParamList, T>;
};
