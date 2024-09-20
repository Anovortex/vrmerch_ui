import Footer from "@/components/Footer";
import BagCart from "./BagCart";
import Belief from "./Belief";
import Book from "./Book";
import CapTshirt from "./CapTshirt";
import Hero from "./Hero";

import Navbar from "@/components/Navbar";
import NewArrivals from "./NewArrivals";
import Newsletter from "./Newsletter";
import RandomDude from "./RandomDude";
import SectionProduct from "./SectionProduct";
import ShopCollection from "./ShopCollection";

export default function Home() {
  return (
    <div className=" md:overflow-visible ">
      <Navbar />
      <Hero />
      <SectionProduct />
      <Book />
      {/*<RandomDude />
      <ShopCollection />
      <NewArrivals />
      <CapTshirt />
      <Belief />
      <BagCart />
      <Newsletter />
      <Footer /> */}
    </div>
  );
}
