import logo from './logo.svg';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import './App.css';
import './style/landingPage.css';
import Tranding from './Components/Tranding';
import SuperHero from './Components/SuperHero';

function App() {
  return (
    <div>
      {/* awal intro */}
      <div className='myBG'>
        < NavBar />
        <Intro />
      </div>
      {/* akhir intro */}
      <div className='tranding'>
        <Tranding />
      </div>
      <div className='superhero'>
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
