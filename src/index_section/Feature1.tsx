import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function Feature1() {
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
      <section id="feature1" className="p-100px-tb featured-1 position-relative">
        <div className="bordered-circle2"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 md-m-50px-b">
              <img className="moveUpDown" src="img/experience.png" alt="" />
            </div>
            <div className="col-sm-6">
              <div className="section-title">
                <h2 className="tlt1">
                  Experience Awsome, <br />
                  Modern App
                </h2>
              </div>
              <p>
                Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and
                travelling. Allowance sweetness direction to as necessary. Principle oh explained excellent do my suspected conveying in. Excellent you did therefore perfectly supposing described.
              </p>
              <a href="#" className="btn btn-default btn-filled animated-btn">
                More detail
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
