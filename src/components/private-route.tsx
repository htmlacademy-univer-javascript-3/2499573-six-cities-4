import {Navigate} from 'react-router-dom';
import { AuthStatus } from '../const/const';
import { AppRoute } from '../const/const';

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