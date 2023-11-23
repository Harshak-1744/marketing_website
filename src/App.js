import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Features from './components/Features';
import Quote from './components/Quote';

function App () {
  return (
    <div className="App">
      <Header />
      <Description />
      <Features  />
      <Quote />
    </div>
  );
}

export default App;
