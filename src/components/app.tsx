import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import {AppRoute} from '../const/const';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../components/private-route';
import { AuthStatus } from '../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { Reviews } from '../types/review';
import { Offers } from '../types/offer';
import { useAppDispatch, useAppSelector } from '../hooks';
import { listFilling } from '../store/action';
type AppScreenProps = {
  reviews: Reviews;
}

function App({reviews}: AppScreenProps): JSX.Element{

  const offers: Offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  dispatch(listFilling);
  const favourites = offers.filter((o) => o.isFavorite);
  return (
    <HelmetProvider>
      <BrowserRouter>
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
                authorizationStatus={AuthStatus.Auth}
              >
                <FavoritesPage favoriteOffers = {favourites} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage reviews={reviews} favorites={favourites}/>}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;