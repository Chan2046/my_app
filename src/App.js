//import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Davangere </h1>
        <p>your preferred store</p>

      <Profile firstname="puneeth" lastname="rajkumar" />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
