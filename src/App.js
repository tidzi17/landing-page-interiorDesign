import Designs from './components/Designs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import NewArrivals from './components/NewArrivals';
import Projects from './components/Projects';
function App() {
  return (
   <div className="App">
    <div className="banner-container">
    <div className="banner"><p>Make room for better living</p></div>
    </div>
   
    <Navbar />
    <Hero />
    <NewArrivals />
    <Designs />
    <Projects />
    <Footer />
   </div>
  );
}

export default App;
