import { Link } from 'react-router-dom';

import './card.scss';

export const Card = (props) => {
  const { img, title, id } = props;
  return (
    <Link to={`detail/${id}`} className="container-card">
      <div className="container-img">
        <img src={'https://image.tmdb.org/t/p/w300' + img} alt={title} />
      </div>
      <h3>{title}</h3>
    </Link>
  );
};
