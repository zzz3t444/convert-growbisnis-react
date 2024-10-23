import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

const InformationScreenshot = () => {
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

  const SectionTitle = ({ title }: { title: string }) => (
    <div className="section-title text-center m-50px-b">
      <h2>{title}</h2>
    </div>
  );

  const ScreenshotSlide = ({ src }: { src: string }) => (
    <div className="swiper-slide col-sm-4">
      <img src={src} alt="" />
    </div>
  );

  const ScreenshotSlider = () => {
    const screenshots = ["img/ss1.png", "img/ss2.png", "img/ss3.png", "img/ss4.png", "img/ss5.png"];

    return (
      <div className="row swiper-container screenshot-swiper p-50px-b">
        <div className="swiper-wrapper">
          {screenshots.map((src, index) => (
            <ScreenshotSlide key={index} src={src} />
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next">
          <i className="icofont-stylish-right"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="icofont-stylish-left"></i>
        </div>
      </div>
    );
  };

  const CircleDecorations = () => {
    const circles = Array.from({ length: 10 }, (_, index) => <div key={index} className={`circle x${index + 1}`}></div>);

    return <>{circles}</>;
  };

  return (
    <section id="screenshots" className="p-80px-tb position-relative">
      <CircleDecorations />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <SectionTitle title="App Screenshots" />
          </div>
        </div>
        <ScreenshotSlider />
      </div>
    </section>
  );
};

export default InformationScreenshot;
