import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {AppRoute} from '../../const/const';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../../components/private-route/private-route';
import { AuthorizationStatus } from '../../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types/offer';
import {useAppSelector } from '../../hooks';
import HistoryRouter from '../../browser/history-router/history-router';
import browserHistory from '../../browser/browser-history/browser-history';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getIsOffersDataLoading, getFavorites } from '../../store/offer-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getCity } from '../../store/other-process/selectors';



function App(): JSX.Element{
  const favorites: Offers = useAppSelector(getFavorites);
  const city = useAppSelector(getCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HelmetProvider>
       <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage favorites = {favorites} city={city}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage favoriteOffers = {favorites} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage favorites={favorites}/>}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;