import {useMemo} from 'react';
import PlacesCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import { Offers } from '../../types/offer';
import CitiesList from '../../components/cities-list/cities-list';
import { Cities } from '../../const/const';
import { useAppSelector } from '../../hooks';
import SortingOptions from '../../components/sorting-options/sorting-options';
import Header from '../../components/header/header';
import { getError } from '../../store/other-process/selectors';
import { getOffers } from '../../store/offer-process/selectors';
import MainEmpty from '../../components/main-empty/main-empty';


type MainPageProps = {
  favorites: Offers;
  city: string;
}

function MainPage({favorites, city}: MainPageProps):JSX.Element{
  const offers = useAppSelector(getOffers);
  const error = useAppSelector(getError);

  const currentCityOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === city),
    [offers, city]
  );


  return(
    <div className="page page--gray page--main">
       <Header favorites={favorites}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">citiesName</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities ={Cities} />
          </section>
        </div>
        {error ? (
          <MainEmpty city={city} />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${currentCityOffers.length} places to stay in ${city}`}</b>
                <SortingOptions/>
                <PlacesCardList offers={currentCityOffers} typeOfList={'defoult'}/>
              </section>

              <section className="cities__map map">
                <Map city={currentCityOffers.length > 0 ? currentCityOffers[0].city : offers[0].city} points={currentCityOffers} specialCaseId={undefined}/>
              </section>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainPage;