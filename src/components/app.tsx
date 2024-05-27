import {Route, Routes} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import {AppRoute} from '../const/const';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../components/private-route';
import { AuthorizationStatus } from '../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../types/offer';
import {useAppSelector } from '../hooks';
import HistoryRouter from '../browser/history-router/history-router';
import browserHistory from '../browser/browser-history/browser-history';
import LoadingScreen from '../pages/loading-screen/loading-screen';


function App(): JSX.Element{
  const offers: Offers = useAppSelector((state) => state.offers);

  const authorizationStatus = useAppSelector((state) => state.AuthorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOfferataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  const favourites = offers.filter((o) => o.isFavorite);

  return (
    <HelmetProvider>
       <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage favorites = {favourites}/>}
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
                <FavoritesPage favoriteOffers = {favourites} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage favorites={favourites}/>}
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