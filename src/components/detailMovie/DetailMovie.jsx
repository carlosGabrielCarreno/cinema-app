import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';
import './_detailMovie.scss';

export const DetailMovie = () => {
  const { dataMovieDetail, setIdMovieDetail } = useContext(MoviesContext);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setIdMovieDetail(id);
  }, []);

  return <div>DetailMovie</div>;
};
