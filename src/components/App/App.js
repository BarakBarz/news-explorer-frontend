import './App.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm.js';

function App() {
  return (
    <div className='wrapper'>
      <div className='upper-section'>
        <Header></Header>

        <SearchForm></SearchForm>
      </div>
    </div>
  );
}

export default App;

