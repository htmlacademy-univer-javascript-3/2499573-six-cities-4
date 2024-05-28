import { Offers, Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type ListFavoritesProps = {
  favorites: Offers;
}


function ListFavorites({favorites}: ListFavoritesProps): JSX.Element {
  const favoritesMap = favorites.reduce(
    (acc: Record<string, Offer[]>, place: Offer) => {
      const city = place.city.name;
      acc[city] = [...(acc[city] ?? []), place];
      return acc;
    },
    {}
  );
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoritesMap).map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favoritesMap[city].map((place) => (
                <PlaceCard key={place.id} offer={place} typeOfCard={'defoult'}/>
              ))}
            </div>
          </li>
        ))}

      </ul>
    </section>
  );
}

export default ListFavorites;