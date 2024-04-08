import {Navigate} from 'react-router-dom';
import AuthStatus from './const/auth-const';
import AppRoute from './const/app-link-const';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth
      ? children : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;