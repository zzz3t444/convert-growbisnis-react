import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function Footer() {
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
      <footer id="footer" className="p-70px-t p-30px-b footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="footer-top text-center p-30px-tb">
                <a className="footer-logo" href="">
                  <img src="img/logo.png" alt="" />
                </a>
                <p>Jl. Gamelan Raya No.10, RW.8, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131.</p>
                <div className="social-network">
                  <a href="#">
                    <i className="social-icon icofont-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="social-icon icofont-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="social-icon icofont-google-plus"></i>
                  </a>
                  <a href="#">
                    <i className="social-icon icofont-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="social-icon icofont-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="social-icon icofont-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="social-icon icofont-pinterest"></i>
                  </a>
                </div>
              </div>
              <div className="footer-copyright p-30px-tb text-center">
                <p>
                  Copyright &copy; GrowBisnis 2024. All Rights Reserved. Made with <i className="icofont-heart"></i> by <a href="#">Zeeta</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}
