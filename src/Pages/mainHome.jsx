import React from 'react'
import { Navbar } from './navbar';
import { Home } from './home';
import { Featured } from './featured';
import { SearchBar } from './searchbar';
import { NewArrivals } from './newArrivals';
import { PlantStands } from './plantStand';
import { ShippingCard } from './shippingCard';
import { Footer } from './footer';

export default function MainHome() {
  return (
    <div>
      <Navbar />
      <Home />
      <Featured />
      <SearchBar />
      <NewArrivals />
      <PlantStands />
      <ShippingCard />
      <Footer />
    </div>
  )
}
