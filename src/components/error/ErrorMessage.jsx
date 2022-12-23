import ErrorIcon from '@mui/icons-material/Error';
import './_error.scss';

export const ErrorMessage = () => {
  return (
    <div className="main error">
      <h2>
        Movies not fount{' '}
        <span>
          <ErrorIcon className="icon" />
        </span>
      </h2>
    </div>
  );
};
