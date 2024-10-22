import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function DummyTestimonial() {
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
      <section id="testimonials" className="p-175px-tb md-p-80px-tb position-relative testimonials">
        <div className="container">
          <div className="row">
            <div className="rotate-heading">
              <h2>
                Clients
                <br />
                Review
              </h2>
            </div>
            <div className="col-lg-8 offset-lg-2 swiper-container testimonialSwiper p-50px-b">
              <div className="swiper-wrapper">
                <div className="single-testimonial swiper-slide">
                  <div className="row">
                    <div className="col-lg-2 col-md-3">
                      <img className="rounded-circle" src="img/avater1.jpeg" alt="" />
                    </div>
                    <div className="col-lg-10 col-md-9">
                      <p>“ Is he staying arrival address earnest. To preference considered it themselves inquietude collecting estimating. View park for why gay knew face. ”</p>
                      <h5>Jenifar deo.</h5>
                      <p className="designation">Apps Developer</p>
                      <p className="ratings">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial swiper-slide">
                  <div className="row">
                    <div className="col-lg-2 col-md-3">
                      <img className="rounded-circle" src="img/avater2.jpeg" alt="" />
                    </div>
                    <div className="col-lg-10 col-md-9">
                      <p>“ Among going manor who did. Do ye is celebrated it sympathize considered. May ecstatic did surprise elegance the ignorant age. Own her miss cold last. ”</p>
                      <h5>Kate Hauly</h5>
                      <p className="designation">Digital Marketer</p>
                      <p className="ratings">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial swiper-slide">
                  <div className="row">
                    <div className="col-lg-2 col-md-3">
                      <img className="rounded-circle" src="img/avater3.jpeg" alt="" />
                    </div>
                    <div className="col-lg-10 col-md-9">
                      <p>“ It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution. ”</p>
                      <h5>John Deo</h5>
                      <p className="designation">Web Developer</p>
                      <p className="ratings">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
