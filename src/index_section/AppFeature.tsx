import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

const SectionTitle = ({ title }: { title: string }) => (
  <div className="section-title text-center m-50px-b">
    <h2>{title}</h2>
  </div>
);

const SingleFeature = ({ iconClass, title, description }: { iconClass: string; title: string; description: string }) => (
  <div className="col-sm-6">
    <div className="single-feature">
      <i className={iconClass}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const FeatureList = () => {
  const features = [
    { iconClass: "icofont-drawing-tablet", title: "Easy Installation", description: "Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot" },
    { iconClass: "icofont-responsive", title: "Responsive Design", description: "Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot" },
    { iconClass: "icofont-ui-note", title: "Flexible Interface", description: "Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot" },
    { iconClass: "icofont-file-avi-mp4", title: "High Resolution", description: "Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot" },
    { iconClass: "icofont-code-alt", title: "Bug Free Code", description: "Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot" },
    { iconClass: "icofont-cloud-refresh", title: "Cloud Storage", description: "Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot" },
  ];

  return (
    <div className="row">
      {features.map((feature, index) => (
        <SingleFeature key={index} iconClass={feature.iconClass} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
};

const MockupImages = () => (
  <div className="position-relative featured-mockup">
    <div className="bordered-box"></div>
    <img className="phone-1" src="img/iphone-1.png" alt="" />
    <img className="phone-2" src="img/iphone-2.png" alt="" />
  </div>
);

const AppFeature = () => {
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
    <section id="feature" className="p-80px-tb position-relative">
      <div className="filled-circle"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <SectionTitle title="App Features" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 md-p-50px-b">
            <FeatureList />
          </div>
          <div className="col-lg-6 col-md-12">
            <MockupImages />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeature;
