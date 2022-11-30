import './app.scss';
import { Cards, Navbar } from './components';

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Cards />
    </div>
  );
};
