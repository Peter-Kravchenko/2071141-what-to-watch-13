import { TFilm } from '../../../types/film';

type TTabOverviewProps = {
  film: TFilm;
};

function TabOverview({ film }: TTabOverviewProps): JSX.Element {
  const { rating, scoresCount, director, starring, description } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.join(', ')}
            and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default TabOverview;
