import Home from './Pages/home';
import Navbar from './Pages/navbar';
import Featured from './Pages/featured';
import SearchBar from './Pages/searchbar';
import NewArrivals from './Pages/newArrivals';
import PlantStands from './Pages/plantStand';
import ShippingCard from './Pages/shippingCard';
import Footer from './Pages/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Featured/>
      <SearchBar/>
      <NewArrivals/>
      <PlantStands/>
      <ShippingCard/>
      <Footer/>
    </div>
  );
}

export default App;
