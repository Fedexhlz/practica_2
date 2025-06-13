import Header from '../components/Header';
import MainHome from '../components/MainHome';
import Footer from '../components/Footer';

const Home = ({ numero }) => {
  return (
    <>
      <Header />
      <MainHome numero={numero} />
      <Footer />
    </>
  );
};

export default Home;
