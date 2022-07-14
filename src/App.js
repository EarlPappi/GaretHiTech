import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import SliderSection from './Components/SliderSection/SliderSection';
import PreFooter from './Components/PreFooterSection/PreFooter'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <SliderSection/>

     <PreFooter/>

     <Footer/>
    </div>
  );
}

export default App;
