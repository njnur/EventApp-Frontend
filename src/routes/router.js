import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';
import { publicRoutes } from './appRoutes';
import { Spin } from 'antd';
import { ROUTES } from './paths';

function RoutesCollection() {
  const publicRoutesList = [
    publicRoutes.eventCreate,
    publicRoutes.eventList,
    publicRoutes.eventUpdate,
  ];
  const NotFound = publicRoutes.error.notFound.component;
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <Router>
          <Routes>
            <Route
              path={ROUTES.LANDING}
              element={<Navigate replace to={publicRoutes.eventList.path} />}
            />
            {publicRoutesList.map(routeElement => {
              const RouteComponent = routeElement.component;
              return (
                <Route
                  key={routeElement.path}
                  path={routeElement.path}
                  element={<RouteComponent />}
                />
              );
            })}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default RoutesCollection;
