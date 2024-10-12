import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function Header() {
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
      <header id="home">
        <nav className="navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header">
          <div className="container">
            <a className="navbar-brand" href="index.html"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
              <i className="icofont-navigation-menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarCodeply">
              <ul className="nav navbar-nav ml-auto">
                <li>
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#services">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#feature">
                    Feature
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#testimonials">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#screenshots">
                    Screenshot
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#pricing">
                    Price
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#blog">
                    Blog
                  </a>
                  <span className="sub-menu-toggle" role="navigation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icofont-rounded-down"></i>
                  </span>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-full.html">Blog Full</a>
                    </li>
                    <li>
                      <a href="blog-2-col.html">Blog 2 col</a>
                    </li>
                    <li>
                      <a href="blog-3-col.html">Blog 3 col</a>
                    </li>
                    <li>
                      <a href="blog-full-left-sidebar.html">Blog left sidebar</a>
                    </li>
                    <li>
                      <a href="blog-full-right-sidebar.html">Blog right sidebar</a>
                    </li>
                    <li>
                      <a href="single-blog.html">Single blog</a>
                    </li>
                    <li>
                      <a href="single-left-sidebar.html">Single left sidebar</a>
                    </li>
                    <li>
                      <a href="single-right-sidebar.html">Single right sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
