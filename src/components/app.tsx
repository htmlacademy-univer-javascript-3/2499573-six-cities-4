import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/login';
import Offer from '../pages/offer';
import NotFound from '../pages/not-found';
import Favorites from '../pages/favorites';
import PrivateRoute from './private-route';
import { AuthStatus, OFFERS_TEST } from '../utils/const';
type AppScreenProps = {
    placesFound: number;
  }
  
  export default function App({placesFound}: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main placesFound={placesFound}/>} />
          <Route path="login" element={<Login />} />
          <Route path="favorites" element={<PrivateRoute authStatus={AuthStatus.NoAuth}><Favorites /></PrivateRoute>} />
          <Route path="offer/">
          <Route path=":id" element={<Offer offers={OFFERS_TEST} />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}