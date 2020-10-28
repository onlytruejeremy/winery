
import './App.css';
import Header from "./components/header/header"
import Showcase from './components/showcase/showcase';
import Works from './components/works/works';
import DivSection from "./components/divsection/divsection"
import Footer from "./components/footer/footer"
function App() {
  return (
    <div className="App">
      <Header />
      <Showcase/>
      <Works/>
      <DivSection/>
      <Footer/>
    </div>
  );
}

export default App;
