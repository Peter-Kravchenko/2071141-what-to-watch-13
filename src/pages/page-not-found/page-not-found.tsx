function PageNotFound(): JSX.Element {
  return (
    <div className="user-page">
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__message">
            <p>Error 404 page not found</p>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default PageNotFound;
