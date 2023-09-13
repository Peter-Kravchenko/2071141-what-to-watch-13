import { Link } from 'react-router-dom';
import { TFilms } from '../../types/films';
import { AppRoute } from '../../const';

type TFilmCardSmaillProps = {
  film: TFilms;
};

function FilmCardSmall({ film }: TFilmCardSmaillProps): JSX.Element {
  const { name, previewImage } = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCardSmall;
