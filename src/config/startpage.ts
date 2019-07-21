import { SearchEngineConfig } from '../types';

export const startpage: SearchEngineConfig = {
  resultSelector: '.search-result',
  domainSelector: '.search-item__url',
  observerSelector: '.column--main__content > ol',
};
