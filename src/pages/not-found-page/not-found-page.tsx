
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const/const';


function NotFoundPage(): JSX.Element{
  return(
    <section className="catalog__screen">
    <h1>404. PAGE NOT FOUND</h1>
    <Link to={AppRoute.Main} >BACK TO MAIN</Link>
    </section>
  );
}

export default NotFoundPage;