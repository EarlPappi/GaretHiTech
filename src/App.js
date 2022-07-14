import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import SliderSection from './Components/SliderSection/SliderSection';
import PreFooter from './Components/PreFooterSection/PreFooter'

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <SliderSection/>

     <PreFooter/>
    </div>
  );
}

export default App;
