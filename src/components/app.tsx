import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { AppRoute, AuthStatus } from './const/const';
import PrivateRoute from './private-route';
import { Offer } from '../types/offer';
import { Review } from '../types/review';


type AppPageProps = {
  cardsNumber: number;
  offers: Offer[];
  reviews: Review[];
};

function App({cardsNumber, offers, reviews}: AppPageProps): JSX.Element {
  const favorites = offers.filter((o) => o.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage cardsNumber = {cardsNumber} offers = {offers}/>}/>

        <Route path={AppRoute.Login} element={<LoginPage/>}/>

        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <FavoritesPage favorites={favorites}/>
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Offer} element={<OfferPage reviews={reviews} offers={offers}/>}/>

        <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;