
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element{
  return(
    <section className="catalog">
      <title>СТРАНИЦА НЕ НАЙДЕНА</title>
      <section className="catalog__screen">
        <h1>404 сТРАНИЦЫ НЕ СУЩЕСТВУЕТ</h1>
        <Link to="/">ВЕРНУТСЯ НА ГЛАВНУЮ</Link>
      </section>
    </section>
  );
}

export default NotFoundPage;