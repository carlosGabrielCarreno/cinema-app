import './app.scss';
import { Cards, Footer, Header, Navbar, Sidebar } from './components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Navbar /> */}
      <Sidebar />
      <Cards />
      <Footer />
    </div>
  );
};
