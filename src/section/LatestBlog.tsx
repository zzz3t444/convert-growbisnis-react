// LatestBlog.js
import { useEffect } from "react";
import BlogPost from "../components/BlogPost";
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

  const blogPosts = [
    {
      image: "img/blog/4.jpg",
      tag: "Apps UI",
      author: "Appiya",
      date: "08 Nov. 2022",
      comments: "05",
      title: "Top inspirational apps UI for you 2019",
      description: "Far curiosity incommode now led smallness allowance...",
    },
    {
      image: "img/blog/5.jpeg",
      tag: "GooglePlay",
      author: "Appiya",
      date: "08 Nov. 2022",
      comments: "05",
      title: "Trendy Google apps you should check 2019",
      description: "Far curiosity incommode now led smallness allowance...",
    },
    {
      image: "img/blog/1.jpeg",
      tag: "AppFeatures",
      author: "Appiya",
      date: "08 Nov. 2022",
      comments: "05",
      title: "Booming news: Google play apps has been released",
      description: "Far curiosity incommode now led smallness allowance...",
    },
  ];

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
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
