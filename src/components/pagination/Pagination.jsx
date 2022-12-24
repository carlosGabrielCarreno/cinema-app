import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './_pagination.scss';

export const Pagination = () => {
  return (
    <div className="container-pagination">
      <div className="container-btns">
        <button className="pagination-btn">
          <ArrowLeftIcon fontSize="large" />
        </button>
        <span className="value-pagination">1</span>
        <button className="pagination-btn">
          <ArrowRightIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};
