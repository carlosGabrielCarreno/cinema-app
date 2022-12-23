import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';
import { Spinner } from '../spinner/Spinner';
import HomeIcon from '@mui/icons-material/Home';
import './_detailMovie.scss';

export const DetailMovie = () => {
  const { dataMovieDetail, setIdMovieDetail, isLoading } =
    useContext(MoviesContext);

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(dataMovieDetail);

  useEffect(() => {
    setIdMovieDetail(id);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <div className="container-detail-movie">
            <Link to={`/`} className="container-btn-home">
              <HomeIcon fontSize="large" />
            </Link>
            <div className="container-data">
              <img
                className="img-detail-movie"
                src={
                  'https://image.tmdb.org/t/p/w300' +
                  dataMovieDetail?.backdrop_path
                }
                alt={dataMovieDetail?.original_title}
              />
              <h2>{dataMovieDetail?.original_title}</h2>
              <p className="overview">
                {' '}
                <span>overview: </span> {dataMovieDetail?.overview}
              </p>
              <ul className="info-list">
                <li>
                  <span>vote average:</span> {dataMovieDetail?.vote_average}
                </li>
                <li>
                  <span>release date:</span> {dataMovieDetail?.release_date}
                </li>
                <li>
                  <span>popularity:</span> {dataMovieDetail?.popularity}
                </li>
              </ul>
              <ul className="genres">
                {dataMovieDetail?.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
