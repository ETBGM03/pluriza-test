import { URL } from './constants';

export const queryCurrencies = (signal: AbortSignal) =>
  fetch(`${URL}`, { signal }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  });

export function cryptoConvertToLocalCOP(props: {
  amount: string;
  priceCoinUSD: number;
}) {
  const { amount, priceCoinUSD } = props;

  const COPtoUSD = 4066;

  if (!isNaN(+amount)) {
    const valueInUSD = +amount * priceCoinUSD;
    const valueInCOP = valueInUSD * COPtoUSD;

    return valueInCOP;
  }

  return 0;
}
