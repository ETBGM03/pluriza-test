import {Dispatch, SetStateAction} from 'react';
import {AppStackScreenProps, ROUTES} from '../../navigation/types';

export type Props = AppStackScreenProps<ROUTES.detail>;

export type PropsConvertCurrency = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  memoValueCOP: string;
};
