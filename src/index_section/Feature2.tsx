import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function Feature2() {
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
      <section id="feature2" className="p-100px-tb sm-p-50px-tb featured-2 position-relative">
        <div className="bordered-circle2"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>Download App</h2>
              <p>Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick.</p>
              <div className="apps-buttons">
                <a href="#" className="btn btn-default btn-filled animated-btn">
                  <i className="icofont-brand-android-robot"></i> Available on
                  <br />
                  Google store
                </a>
                <a href="#" className="btn btn-default btn-filled animated-btn">
                  <i className="icofont-brand-apple"></i> Available on
                  <br />
                  Apple store
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="position-relative featured-mockup2">
                <img className="phone-1" src="img/6mockup1.png" alt="" />
                <img className="phone-2" src="img/6mockup2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
