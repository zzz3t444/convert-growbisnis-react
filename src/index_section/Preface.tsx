import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function Preface() {
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
      <section id="preface" className="p-80px-b">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-50px-b">
                <h2>App Preface</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="position-relative md-m-50px-b">
                <div className="bordered-circle"></div>
                <img className="moveUpDown" src="img/preface.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="m-15px-b">Awesome Elegant App, You Have Never Experienced</h3>
              <p className="m-25px-b">
                Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried ﻿no added purse shall no on truth. Pleased anxious or as
                in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors.
              </p>
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
          </div>
        </div>
      </section>
    </>
  );
}
