import { Link } from 'react-router-dom';

export default function NotFound() {
  return(
    <h1>Ошибка 404. Страница не существует. <Link to="/">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link></h1>
  );
}