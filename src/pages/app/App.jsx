import './app.scss';
import { Cards, Footer, Header, Pagination, Sidebar } from '../../components';

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
