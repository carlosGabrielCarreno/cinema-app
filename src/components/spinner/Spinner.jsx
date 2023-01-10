import './_spinner.scss';
import { AiOutlineLoading } from 'react-icons/ai';

export const Spinner = () => {
  return (
    <div className="container-spinner">
      <AiOutlineLoading className="spinning" size={50} />
    </div>
  );
};
