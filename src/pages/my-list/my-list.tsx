import { useEffect } from 'react';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserHeaderAuth from '../../components/user-header/user-header-auth';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMyList } from '../../store/films-data/films-data-selectors';
import { fetchMyListAction } from '../../store/api-actions';

function MyList(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMyListAction());
  }, [dispatch]);

  const favoriteFilms = useAppSelector(getMyList);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list{' '}
          <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
        <UserHeaderAuth />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmCardsList films={favoriteFilms} />
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
