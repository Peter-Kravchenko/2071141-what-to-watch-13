import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function UserInfo(): JSX.Element {
  return (
    <ul className="user-block">
      <Link to={AppRoute.MyList} className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
        </div>
      </Link>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default UserInfo;
