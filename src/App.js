import logo from './logo.svg';
import './App.css';
import GifDisplay from './components/GifDisplay';
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Button/>
      <GifDisplay/>
      <Footer/>
    </div>
  );
}

export default App;
