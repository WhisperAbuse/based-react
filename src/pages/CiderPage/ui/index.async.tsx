import { lazy } from 'react';

export const CiderPageAsync = lazy(async () => await import('./index'));
