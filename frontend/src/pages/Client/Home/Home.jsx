import { useEffect, useState } from "react";
import Banner from "../../../components/Client/Banner/Banner";
import NewArrivalsSection from "../../../components/Client/NewArrivalsSection";
import ShoesSection from "../../../components/Client/ShoesSection";
import { BASE_URL } from "../../../constant";
import axios from "axios";
import HurrySection from "../../../components/Client/HurrySection";
import BestSellers from "../../../components/Client/BestSellers/BestSellers";
import InfoSection from "../../../components/Client/InfoSection/InfoSection";
const Home = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios(`${BASE_URL}/product`);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Banner />
      <ShoesSection />
      <NewArrivalsSection products={products} />
      <HurrySection />
      <BestSellers />
      <InfoSection />
    </>
  );
};

export default Home;
