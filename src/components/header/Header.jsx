import { Search } from '../search/Search';
import './header.scss';

export const Header = () => {
  return (
    <header className="headerContainer">
      <p className="title-icon">cinema app</p>
      <Search />
    </header>
  );
};
