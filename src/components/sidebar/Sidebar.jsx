import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './sidebar.scss';
import { MoviesContext } from '../../context/MoviesContext';
import { useContext } from 'react';

export const Sidebar = () => {
  const { setSearchTerm } = useContext(MoviesContext);

  const handleSetDiscover = () => {
    setSearchTerm('');
  };

  return (
    <div className="sidebar">
      <button onClick={handleSetDiscover}>
        <BorderAllOutlinedIcon />
        <span>Discover</span>
      </button>
      <div>
        <GradeOutlinedIcon />
        <span>Favorite</span>
      </div>
      <div>
        <FavoriteBorderOutlinedIcon />
        <span>Liked</span>
      </div>
      <div>
        <BorderAllOutlinedIcon />
        <span>Genres</span>
      </div>
    </div>
  );
};
