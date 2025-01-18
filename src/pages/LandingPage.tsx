import { useEffect } from "react";
import HeroHome from "../components/landingPage/hero-home";
import BusinessCategories from "../components/landingPage/business-categories";
import FeaturesPlanet from "../components/landingPage/features-planet";
import Cta from "../components/landingPage/cta";
import Header from "../components/landingPage/header";
import Footer from "../components/landingPage/footer";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <div
      className={` bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
    >
      <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />
        <main className="grow w-screen">
          <HeroHome />
          <BusinessCategories />
          <FeaturesPlanet />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
