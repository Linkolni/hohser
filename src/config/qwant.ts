import { SearchEngineConfig } from '../types';

export const qwant: SearchEngineConfig = {
  resultSelector: '.result',
  domainSelector: '.result__url',
  observerSelector: '#top',
  ajaxResults: true
};
