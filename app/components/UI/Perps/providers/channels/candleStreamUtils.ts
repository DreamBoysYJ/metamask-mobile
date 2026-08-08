import type { CandleData } from '@metamask/perps-controller';

export const isCandleStreamClearSignal = (data: CandleData): boolean =>
  data.symbol === '' && data.candles.length === 0;
