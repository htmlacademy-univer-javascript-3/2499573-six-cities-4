import { useMemo } from 'react';
import Map from '../../components/map/map';
import { Offers } from '../../types/offer';
import CitiesList from '../../components/cities-list/cities-list';
import { Cities } from '../../const/const';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { getError } from '../../store/other-process/selectors';
import { getOffers } from '../../store/offer-process/selectors';
import MainEmpty from '../../components/main-empty/main-empty';
import ListOffers from '../../components/offers-list/offers-list';

type MainPageProps = {
  favorites: Offers;
  city: string;
};

function MainPage({ favorites, city }: MainPageProps): JSX.Element {
  const offers = useAppSelector(getOffers);
  const error = useAppSelector(getError);

  const currentCityOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === city),
    [offers, city]
  );

  return (
    <div className="page page--gray page--main">
      <Header favorites={favorites} />
      <main
        className={`page__main page__main--index ${
          error || offers.length === 0 ? 'page__main--index-empty' : ''
        }`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={Cities} />
          </section>
        </div>
        {!currentCityOffers || currentCityOffers.length === 0 ? (
          <MainEmpty city={city} />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <ListOffers city={city} offers={currentCityOffers} />
              <div className="cities__right-section">
                <section className="cities__map map">
                  {offers && offers.length > 0 && (
                    <Map
                      city={
                        currentCityOffers.length > 0
                          ? currentCityOffers[0].city
                          : offers[0].city
                      }
                      points={currentCityOffers}
                      specialCaseId={undefined}
                    />
                  )}
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainPage;
