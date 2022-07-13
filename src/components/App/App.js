import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox.js';
import About from '../About/About';
import Footer from '../Footer/Footer';
import ResultsSection from '../ResultsSection/ResultsSection';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='wrapper'>
      <div className='upper-section'>
        <Header></Header>
        <SearchBox></SearchBox>
      </div>
      <ResultsSection></ResultsSection>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;

