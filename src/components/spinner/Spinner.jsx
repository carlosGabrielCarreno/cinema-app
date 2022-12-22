import './_spinner.scss';
import { FaSpinner } from 'react-icons/fa';

export const Spinner = () => {
  return (
    <div className="container-spinner">
      <FaSpinner className="spinning" size={50} />
    </div>
  );
};
