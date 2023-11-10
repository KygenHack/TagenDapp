import HeaderCard from "../components/HeaderCard";
import Content from "../components/content";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import LaunchCard from "../components/LaunchCard";
import Navbar from "../components/Navbar";
import Stats from "../components/stats";
import NFTPackage from "../components/NFTPackage";
import ExplainCard from "../components/ExplainCard";
import TokenomicsCard from "../components/TokenomicsCard";
import Faqs from "../components/Faqs";


export default function Home() {
  return (
    <>
    <HeaderCard/>
     <Navbar/>
     <Hero/>
     <LaunchCard/>
     <Features/>
     <Stats/>
     <NFTPackage/>
     <ExplainCard/>
     <TokenomicsCard/>
     <Faqs/>
     <Footer/>
    </>
  );
}
