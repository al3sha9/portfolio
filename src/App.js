import logo from './logo.svg';
import './App.css';
import NAVBAR from './components/navbar/nav';
import Header from './components/header/header';
import About from './components/about/about';
import Work from './components/work/work';
import Footer from './components/footer/footer';



function App() {

  return (
    <div>
      <NAVBAR />
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
