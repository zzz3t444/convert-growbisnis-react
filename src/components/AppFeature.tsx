import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function AppFeature() {
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
      <section id="feature" className="p-80px-tb position-relative">
        <div className="filled-circle"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-50px-b">
                <h2>App Features</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 md-p-50px-b">
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-feature">
                    <i className="icofont-drawing-tablet"></i>
                    <h4>Easy Installation</h4>
                    <p>Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="single-feature">
                    <i className="icofont-responsive"></i>
                    <h4>Responsive Design</h4>
                    <p>Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="single-feature">
                    <i className="icofont-ui-note"></i>
                    <h4>Flexible Interface</h4>
                    <p>Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="single-feature">
                    <i className="icofont-file-avi-mp4"></i>
                    <h4>High Resolution</h4>
                    <p>Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="single-feature">
                    <i className="icofont-code-alt"></i>
                    <h4>Bug Free Code</h4>
                    <p>Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="single-feature">
                    <i className="icofont-cloud-refresh"></i>
                    <h4>Cloud Storage</h4>
                    <p>Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="position-relative featured-mockup">
                <div className="bordered-box"></div>
                <img className="phone-1" src="img/iphone-1.png" alt="" />
                <img className="phone-2" src="img/iphone-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
