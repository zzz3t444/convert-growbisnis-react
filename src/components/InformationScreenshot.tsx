import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function InformationScreenshot() {
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
      <section id="screenshots" className="p-80px-tb position-relative">
        <div className="circle x1"></div>
        <div className="circle x2"></div>
        <div className="circle x3"></div>
        <div className="circle x4"></div>
        <div className="circle x7"></div>
        <div className="circle x8"></div>
        <div className="circle x9"></div>
        <div className="circle x10"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-50px-b">
                <h2>App Screenshots</h2>
              </div>
            </div>
          </div>
          <div className="row swiper-container screenshot-swiper p-50px-b">
            <div className="swiper-wrapper">
              <div className="swiper-slide col-sm-4">
                <img src="img/ss1.png" alt="" />
              </div>
              <div className="swiper-slide col-sm-4">
                <img src="img/ss2.png" alt="" />
              </div>
              <div className="swiper-slide col-sm-4">
                <img src="img/ss3.png" alt="" />
              </div>
              <div className="swiper-slide col-sm-4">
                <img src="img/ss4.png" alt="" />
              </div>
              <div className="swiper-slide col-sm-4">
                <img src="img/ss5.png" alt="" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next">
              <i className="icofont-stylish-right"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="icofont-stylish-left"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
