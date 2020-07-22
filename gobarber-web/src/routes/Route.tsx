import React from 'react';
import {
  RouteProps as ReactRouterDomRouteProps,
  Route as ReactRouterDomRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouterDomRouteProps {
  isPrivite?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivite = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactRouterDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivite === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivite ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
