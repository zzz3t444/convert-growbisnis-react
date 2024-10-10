import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

export default function LatestBlog() {
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
      <section id="blog" className="p-100px-tb gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="section-title text-center m-50px-b">
                <h2>Latest Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6">
              <article className="page-content">
                <div className="blog-post-img">
                  <img src="img/blog/4.jpg" alt="" />
                  <div className="blog-tag">
                    <a href="#">Apps UI</a>
                  </div>
                </div>

                <div className="blog-content">
                  <div className="post-meta m-15px-b">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="icofont-user-alt-5"></i> Appiya
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-calendar"></i> 08 Nov. 2022
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-speech-comments"></i> 05 Comments
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a href="single-blog.html">
                    <h2 className="m-25px-b">Top inspirational apps UI for you 2019</h2>
                  </a>
                  <p>
                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                    new shade drift hopes small.
                  </p>
                  <a className="read-more" href="single-blog.html">
                    Read more
                  </a>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-md-6">
              <article className="page-content">
                <div className="blog-post-img">
                  <img src="img/blog/5.jpeg" alt="" />
                  <div className="blog-tag">
                    <a href="#">GooglePlay</a>
                  </div>
                </div>

                <div className="blog-content">
                  <div className="post-meta m-15px-b">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="icofont-user-alt-5"></i> Appiya
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-calendar"></i> 08 Nov. 2022
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-speech-comments"></i> 05 Comments
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a href="single-blog.html">
                    <h2 className="m-25px-b">Trendy Google apps you should check 2019</h2>
                  </a>
                  <p>
                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                    new shade drift hopes small.
                  </p>
                  <a className="read-more" href="single-blog.html">
                    Read more
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="page-content">
                <div className="blog-post-img">
                  <img src="img/blog/1.jpeg" alt="" />
                  <div className="blog-tag">
                    <a href="#">AppFeatures</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="post-meta m-15px-b">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="icofont-user-alt-5"></i> Appiya
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-calendar"></i> 08 Nov. 2022
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-speech-comments"></i> 05 Comments
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a href="single-blog.html">
                    <h2 className="m-25px-b">Booming news: Google play apps has been relese</h2>
                  </a>
                  <p>
                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                    new shade drift hopes small.
                  </p>
                  <a className="read-more" href="single-blog.html">
                    Read more
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
