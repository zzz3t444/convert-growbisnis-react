import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function About() {
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
      <section id="services" className="p-100px-tb sm-p-50px-b">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6">
              <div className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                <i className="icofont-law-document"></i>
                <h4>Website Builder & Development</h4>
                <ul style={{ listStyleType: "none", padding: "0", margin: "0", textAlign: "start" }}>
                  <li>✔ Desain Poster, Banner, Spanduk</li>
                  <li>✔ Desain Seragam Kerja</li>
                  <li>✔ Desain Logo</li>
                  <li>✔ Desain Browsur, Card Company</li>
                  <li>✔ Desain Packaging</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                <i className="icofont-code"></i>
                <h4>Desain Visual Grapic</h4>
                <ul style={{ listStyleType: "none", padding: "0", margin: "0", textAlign: "start" }}>
                  <li>✔ Desain Poster, Banner, Spanduk</li>
                  <li>✔ Desain Seragam Kerja</li>
                  <li>✔ Desain Logo</li>
                  <li>✔ Desain Browsur, Card Company</li>
                  <li>✔ Desain Packaging</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                <i className="icofont-file-avi-mp4"></i>
                <h4>Tim Media</h4>
                <ul style={{ listStyleType: "none", padding: "0", margin: "0", textAlign: "start" }}>
                  <li>✔ Desain Poster, Banner, Spanduk</li>
                  <li>✔ Desain Seragam Kerja</li>
                  <li>✔ Desain Logo</li>
                  <li>✔ Desain Browsur, Card Company</li>
                  <li>✔ Desain Packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
