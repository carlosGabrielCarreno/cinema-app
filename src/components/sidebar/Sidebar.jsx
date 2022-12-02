import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <BorderAllOutlinedIcon />
        <span>Beginning</span>
      </div>
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
