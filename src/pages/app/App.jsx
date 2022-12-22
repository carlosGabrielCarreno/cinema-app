import './app.scss';
import { Cards, Footer, Header, Sidebar } from '../../components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Cards />
      <Footer />
    </div>
  );
};
