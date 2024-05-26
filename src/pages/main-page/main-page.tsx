import { useEffect } from 'react';
import PlacesCardList from '../../components/place-card-list';
import Map from '../../components/map';
import { Offers } from '../../types/offer';
import { useState } from 'react';
import CitiesList from '../../components/cities-list';
import { Cities } from '../../const/const';
import { useAppSelector } from '../../hooks';
import SortingOptions from '../../components/sorting-options';
import Header from '../../components/header';

type MainPageProps = {
  favorites: Offers;
}

function MainPage({favorites}: MainPageProps):JSX.Element{
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);

  const [currentCityOffers, setCurrentCityOffers] = useState<Offers>(offers);

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);


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
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentCityOffers.length} places to stay in ${city}`}</b>
              <SortingOptions/>
              <PlacesCardList offers={currentCityOffers} typeOfList={'defoult'}/>
            </section>
            <section className="cities__map map">
              <Map city={currentCityOffers.length > 0 ? currentCityOffers[0].city : offers[0].city} points={currentCityOffers}/>

            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;