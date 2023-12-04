import nodeFetch from 'node-fetch';

export * from 'inversify';
export * from './api';
export * from './architecture';
export * from './config';
export * from './utils/utils';

export const fetch = nodeFetch;
