import { lazy } from 'react';
import { ROUTES } from './paths';

export const publicRoutes = {
  eventList: {
    path: ROUTES.EVENT_LIST,
    component: lazy(() => import('../pages/events')),
  },
  eventCreate: {
    path: ROUTES.EVENT_CREATE,
    component: lazy(() => import('../pages/events/create')),
  },
  eventUpdate: {
    path: ROUTES.EVENT_UPDATE,
    component: lazy(() => import('../pages/events/update')),
  },
  error: {
    notFound: {
      path: ROUTES.EVENT_UPDATE,
      component: lazy(() => import('../features/error/notFound')),
    },
  },
};
