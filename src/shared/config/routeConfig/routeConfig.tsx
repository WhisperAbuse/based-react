import { type RouteProps } from 'react-router-dom';

import { CiderPage } from '@/pages/CiderPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  CIDER = 'cider',
  NOT_FOUND = 'not found',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CIDER]: '/cider',
  [AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.CIDER]: {
    path: routePath[AppRoutes.CIDER],
    element: <CiderPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
