import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function FormContact() {
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
      <section id="contact" className="p-80px-tb">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-50px-b">
                <h2>Get in touch</h2>
              </div>
            </div>
          </div>
          <div className="row row-eq-height">
            <div className="col-lg-4 col-md-6 contact-address p-30px">
              <div className="address-box text-center p-15px m-15px-b">
                <i className="icofont-google-map"></i>
                <h5>Address</h5>
                <p>Jl. Gamelan Raya No.10, RW.8, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131</p>
              </div>
              <div className="address-box text-center p-15px m-15px-b">
                <i className="icofont-phone"></i>
                <h5>Phone</h5>
                <p>
                  0123 45600 7892
                  <br />
                  0027 11566 0124
                </p>
              </div>
              <div className="address-box text-center p-15px">
                <i className="icofont-envelope-open"></i>
                <h5>Email Address</h5>
                <p>
                  growbisnis@gmail.com <br />
                  cs@growbisnis.com
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-6 contact-form p-30px">
              <h3 className="m-25px-b">Ask any kind of questions</h3>
              <p className="m-25px-b">To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on.</p>
              <form id="contact-form" method="post" action="php/sendmail.php">
                <div className="message">
                  <p className="email-loading alert alert-warning">
                    <img src="img/loading.gif" alt="" />
                    &nbsp;&nbsp;&nbsp;Sending...
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </p>
                  <p className="email-success alert alert-success">
                    <i className="icon icon-icon-check-alt2"></i> Your quote has successfully been sent.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </p>
                  <p className="email-failed alert alert-danger">
                    <i className="icon icon-icon-close-alt2"></i> Something went wrong!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </p>
                </div>
                <div className="mb13">
                  <input name="name" className="contact-name" id="contact-name" type="text" placeholder="Your Name" />
                </div>
                <div className="mb13">
                  <input name="email" className="contact-email" id="contact-email" type="email" placeholder="Your Email" />
                </div>
                <div className="mb13">
                  <input name="subject" className="contact-subject" id="contact-subject" type="text" placeholder="Subject" />
                </div>
                <div className="mb30">
                  <textarea name="message" className="contact-message" id="contact-message" placeholder="Your Message"></textarea>
                </div>
                <button className="btn btn-default btn-filled animated-btn">Send Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
