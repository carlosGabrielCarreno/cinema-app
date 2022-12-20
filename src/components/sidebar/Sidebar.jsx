import UpcomingIcon from '@mui/icons-material/Upcoming';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './sidebar.scss';
import { MoviesContext } from '../../context/MoviesContext';
import { useContext } from 'react';

export const Sidebar = () => {
  const {
    topRated,
    setTopRated,
    nowPlaying,
    setNowPlaying,
    upcoming,
    setUpcoming,
  } = useContext(MoviesContext);

  const handleTopRated = () => {
    setTopRated(!topRated);
  };

  const handleNowPlaying = () => {
    setNowPlaying(!nowPlaying);
  };

  const handleUpcoming = () => {
    setUpcoming(!upcoming);
  };

  return (
    <div className="sidebar">
      <button onClick={handleTopRated}>
        <FavoriteBorderOutlinedIcon />
        <span>Top Rated</span>
      </button>
      <button onClick={handleNowPlaying}>
        <OpenInNewIcon />
        <span>Now Playing</span>
      </button>
      <button onClick={handleUpcoming}>
        <UpcomingIcon />
        <span>Upcoming</span>
      </button>
    </div>
  );
};
