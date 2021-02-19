import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <section>
      <h1>Page not found</h1>
      <Link to="/">Вернуться на главну</Link>
    </section>
  );
};

export default NotFoundScreen;
