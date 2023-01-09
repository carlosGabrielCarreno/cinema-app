import './app.scss';
import {
  Cards,
  Footer,
  Header,
  Sidebar,
  Pagination,
  Carousel,
} from '../../components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <Pagination />
      <Sidebar />
      <Cards />
      <Footer />
    </div>
  );
};
