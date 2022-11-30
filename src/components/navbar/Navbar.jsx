import { Search } from '../search/Search';
import './_navbar.scss';

export const Navbar = () => {
  return (
    <div className="container-navbar">
      <p className="title-icon">cinema app</p>
      <Search />
    </div>
  );
};
