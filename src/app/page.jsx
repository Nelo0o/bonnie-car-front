import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import PartnersSlide from "@/app/components/PartnersSlide/PartnersSlide";
import Reinsurance from "@/app/components/Reinsurance/Reinsurance";
import AboutCard from "@/app/components/AboutCard/AboutCard";
import FeedBack from "@/app/components/FeedBack/FeedBack";
import ProductCard from "./components/ProductCard/ProductCard";
import VehicleFilter from "./components/VehicleFilter/VehicleFilter";

export default function Home() {
  return (
    <>
      <VehicleFilter />
      {/* <ProductCard /> */}
      {/* <Header/>
       <PartnersSlide/>
       <AboutCard/>
       <Reinsurance/>
       <FeedBack/>
       <Footer/> */}
    </>
  );
}
