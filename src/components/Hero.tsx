import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function Hero() {
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
      <section className="hero-area circle-wrap">
        <div className="circle x1"></div>
        <div className="circle x2"></div>
        <div className="circle x3"></div>
        <div className="circle x4"></div>
        <div className="circle x5"></div>
        <div className="circle x6"></div>
        <div className="circle x7"></div>
        <div className="circle x8"></div>
        <div className="circle x9"></div>
        <div className="circle x10"></div>

        <div className="container">
          <div className="row full-height align-items-center">
            <div className="col-md-6 p-100px-t p-50px-b md-p-10px-b">
              <h2 className="text-capitalize m-25px-b">Buat Bisnis Anda Tumbuh dari Konsep hingga Kesuksesan dengan GrowBisnis!</h2>
              <p className="m-25px-b">
                GrowBisnis adalah platform pengembangan bisnis yang menyediakan solusi menyeluruh bagi Anda yang ingin membangun bisnis dari awal hingga sukses. Kami mendampingi setiap tahap proses,
                mulai dari perencanaan, pengembangan, hingga eksekusi, memastikan setiap langkah yang diambil terarah dan tepat sasaran. GrowBisnis berfokus pada realisasi ide-ide bisnis Anda.
              </p>
              <div className="hero-btn-wrapper">
                <a href="#" className="btn btn-default animated-btn">
                  Download App
                </a>
                <a className="btn btn-default btn-default-outline animated-btn" href="#">
                  More Details
                </a>
              </div>
            </div>
            <div className="col-md-6 p-100px-t p-50px-b md-p-10px-t">
              <img className="hero-mock" src="img/hero-mock.png" alt="Hero mockup" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
