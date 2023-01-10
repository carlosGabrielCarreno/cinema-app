import './app.scss';
import {
  Cards,
  Footer,
  Header,
  Sidebar,
  Pagination,
  Carrusel,
} from '../../components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Carrusel />
      <Pagination />
      <Sidebar />
      <Cards />
      <Footer />
    </div>
  );
};
