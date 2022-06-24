import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from './components/NavbarComp';
import BookSlider from './components/BookSlider';
import Books from './components/Books';
import Home from './components/Home';
import Witness from './components/Witness';
import SignIn from './components/SignIn';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <NavbarComp />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
