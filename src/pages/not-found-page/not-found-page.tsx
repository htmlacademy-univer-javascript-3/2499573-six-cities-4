
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const/const';


function NotFoundPage(): JSX.Element{
  return(
    <section className="catalog">
      <title>СТРАНИЦА НЕ НАЙДЕНА</title>
      <section className="catalog__screen">
        <h1>404 сТРАНИЦЫ НЕ СУЩЕСТВУЕТ</h1>
        <Link to={AppRoute.Main}>ВЕРНУТСЯ НА ГЛАВНУЮ</Link>
      </section>
    </section>
  );
}

export default NotFoundPage;