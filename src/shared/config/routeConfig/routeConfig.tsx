import { CiderPage } from '@/pages/CiderPage';
import { MainPage } from '@/pages/MainPage';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  CIDER = 'cider',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CIDER]: '/cider',
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
};
