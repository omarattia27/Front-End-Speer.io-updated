import './App.css';
import SlideShow from './SlideShow.js';

function App() {
  return (
    <div className="App">

      <header>
        <a className="burger_icon">
          
          &#8801;
        </a>
        <div className="H_item">
          Home
        </div>
        <div className="H_item">
          About
        </div>
        <div className="H_item">
          Contact
        </div>
        <div className="H_item">
          <button className="button">
            Shopping Basket
          </button>
        </div>
      </header>
      <SlideShow />

    </div>
  );
}

export default App;
