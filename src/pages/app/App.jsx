import './app.scss';
import { Cards, Footer, Header, Sidebar, Pagination } from '../../components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Pagination />
      <Sidebar />
      <Cards />
      <Footer />
    </div>
  );
};
