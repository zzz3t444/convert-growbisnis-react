import { useEffect } from "react";
import "../css/animate.min.css";
import "../css/icofont.min.css";
import "../css/bootstrap.min.css";
import "../css/swiper.min.css";
import "../css/style.css";
import "../css/gredients/purple.css";
import "../css/typography/poppins-quciksland.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Preface from "./components/Preface";
import StepHowWorks from "./components/StepHowWorks";
import AppFeature from "./components/AppFeature";
import DummyTestimonial from "./components/DummyTestimonial";
import InformationScreenshot from "./components/InformationScreenshot";
import PricingList from "./components/PricingList";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import LatestBlog from "./components/LatestBlog";
import FormContact from "./components/FormContact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const scripts = [
      "js/jquery-3.2.1.min.js",
      "js/jquery-migrate-3.0.0.min.js",
      "js/bootstrap.min.js",
      "js/jquery.textillate.js",
      "js/jquery.lettering.js",
      "js/jquery.fittext.js",
      "js/jquery.ajaxchimp.min.js",
      "js/swiper.min.js",
      "js/custom.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <section>
        <main>
          <body data-spy="scroll" data-target="#navbarCodeply" data-offset="70">
            <div className="loader-wrapper">
              <div className="loader"></div>
            </div>

            <Header />
            <Hero />
            <About />
            <Preface />
            <StepHowWorks />
            <AppFeature />
            <DummyTestimonial />
            <InformationScreenshot />
            <PricingList />
            <Feature1 />
            <Feature2 />
            <LatestBlog />
            <FormContact />
            <Footer />
          </body>
        </main>
      </section>
    </>
  );
}
