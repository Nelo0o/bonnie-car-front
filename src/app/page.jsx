import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import PartnersSlide from "@/app/components/PartnersSlide/PartnersSlide";
import Reinsurance from "@/app/components/Reinsurance/Reinsurance";
import AboutCard from "@/app/components/AboutCard/AboutCard";
import FeedBack from "@/app/components/FeedBack/FeedBack";
import RecentAd from "@/app/components/RecentAd/RecentAd";
import MainSection from "@/app/components/MainSection/MainSection";

export default function Home() {
  return (
     <>
       <Header/>
       <MainSection/>
       <RecentAd/>
       <AboutCard/>
       <Reinsurance/>
       <PartnersSlide/>
       <FeedBack/>
       <Footer/>
     </>
  );
}
