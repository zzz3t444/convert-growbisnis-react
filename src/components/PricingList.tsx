import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function PricingList() {
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
      <section id="pricing" className="p-80px-tb parallax bg-overlay opacity-5" style={{ backgroundImage: "url(img/pricing-bg.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-50px-b">
                <h2>Pricing Plans</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing text-center m-10px-tb">
                <div className="pricing-head p-60px-lr lg-p-30px-lr">
                  <div className="pricing-head-text">
                    <div className="package-price">
                      <span className="price">Ultimate</span>
                      <span className="validity">/ Month</span>
                    </div>
                    <div className="package-name">
                      <h5>Starter</h5>
                    </div>
                  </div>
                  <span className="wave"></span>
                  <span className="wave"></span>
                  <span className="wave"></span>
                </div>
                <div className="pricing-body p-60px-lr lg-p-30px-lr">
                  <ul>
                    <li>✓ Foto Produk</li>
                    <li>✓ Poster, Brosur</li>
                    <li>✓ Pilihan Seragam Kerja menarik</li>
                    <li>✓ Bantuan Perizinan</li>
                  </ul>
                </div>
                <div className="pricing-footer p-60px-lr lg-p-30px-lr">
                  <a href="#" className="btn btn-default btn-filled animated-btn">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing text-center featured-pricing m-10px-tb">
                <div className="pricing-head p-60px-lr lg-p-30px-lr">
                  <div className="pricing-head-text">
                    <div className="package-price">
                      <span className="price">Elite</span>
                      <span className="validity">/ Month</span>
                    </div>
                    <div className="package-name">
                      <h5>Popular</h5>
                    </div>
                  </div>
                  <span className="wave"></span>
                  <span className="wave"></span>
                  <span className="wave"></span>
                </div>
                <div className="pricing-body p-60px-lr lg-p-30px-lr">
                  <ul>
                    <li>✓ Foto Produk</li>
                    <li>✓ Poster, Brosur</li>
                    <li>✓ Pilihan Seragam Kerja menarik</li>
                    <li>✓ Bantuan Perizinan</li>
                  </ul>
                </div>
                <div className="pricing-footer p-60px-lr lg-p-30px-lr">
                  <a href="#" className="btn btn-default btn-filled animated-btn">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing text-center m-10px-tb">
                <div className="pricing-head p-60px-lr lg-p-30px-lr">
                  <div className="pricing-head-text">
                    <div className="package-price">
                      <span className="price">Premium</span>
                      <span className="validity">/ Month</span>
                    </div>
                    <div className="package-name">
                      <h5>Premium</h5>
                    </div>
                  </div>
                  <span className="wave"></span>
                  <span className="wave"></span>
                  <span className="wave"></span>
                </div>
                <div className="pricing-body p-60px-lr lg-p-30px-lr">
                  <ul>
                    <li>✓ Foto Produk</li>
                    <li>✓ Poster, Brosur</li>
                    <li>✓ Pilihan Seragam Kerja menarik</li>
                    <li>✓ Bantuan Perizinan</li>
                  </ul>
                </div>
                <div className="pricing-footer p-60px-lr lg-p-30px-lr">
                  <a href="#" className="btn btn-default btn-filled animated-btn">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
