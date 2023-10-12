import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserHeaderNotAuth from '../../components/user-header/user-header-not-auth';
import { AppRoute } from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilm } from '../../store/films-data/films-data-selectors';
import { useEffect } from 'react';
import { fetchFilmAction } from '../../store/api-actions';
import PageNotFound from '../page-not-found/page-not-found';

function AddReview(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [id, dispatch]);

  const film = useAppSelector(getFilm);

  if (!film) {
    return <PageNotFound />;
  }

  return (
    <section
      className="film-card film-card--full"
      style={{ backgroundColor: film.backgroundColor }}
    >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserHeaderNotAuth />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <ReviewForm id={film.id} backgroundColor={film.backgroundColor} />
    </section>
  );
}

export default AddReview;
