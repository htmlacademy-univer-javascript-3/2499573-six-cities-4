import Logo from '../../components/logo'
import { Offer } from '../../types/offer';
import {Offers} from '../../types/offer';
import PlaceCard from '../../components/place-card';
import { Link } from 'react-router-dom';

type FavoriteOffer = {
  favoriteOffers: Offers;
}

function FavoritesPage({favoriteOffers}:FavoriteOffer): JSX.Element {
  const favouriteOffersMap = favoriteOffers.reduce(
    (accumulator: Record<string, Offers>, offer: Offer) => {
      if (offer.city.name in accumulator) {
        accumulator[offer.city.name].push(offer);
      } else {
        accumulator[offer.city.name] = [offer];
      }
      return accumulator;
    },
    {}
  );
  return (
    <div className ="page">
      <header className ="header">
        <div className ="container">
          <div className ="header__wrapper">
            <div className ="header__left">
              <Logo/>
            </div>
            <nav className ="header__nav">
              <ul className ="header__nav-list">
                <li className ="header__nav-item user">
                  <a className ="header__nav-link header__nav-link--profile">
                    <div className ="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className ="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className ="header__favorite-count">{favoriteOffers.length}</span>
                  </a>
                </li>
                <li className ="header__nav-item">
                  <a className ="header__nav-link" href="#">
                    <span className ="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className ="page__main page__main--favorites">
        <div className ="page__favorites-container container">
          <section className ="favorites">
            <h1 className ="favorites__title">Saved listing</h1>
            <ul className ="favorites__list">

              {Object.keys(favouriteOffersMap).map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favouriteOffersMap[city].map((offer) => (
                      <PlaceCard key={offer.id} offer={offer} typeOfCard = {'defoult'}></PlaceCard>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to = "/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
export default FavoritesPage;