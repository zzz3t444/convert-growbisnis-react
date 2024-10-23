import React, { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

interface ServiceBoxProps {
  icon: string;
  title: string;
  items: string[];
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ icon, title, items }) => (
  <div className="col-lg-4 col-md-6">
    <div className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
      <i className={icon}></i>
      <h4>{title}</h4>
      <ul style={{ listStyleType: "none", padding: "0", margin: "0", textAlign: "start" }}>
        {items.map((item: string, index: number) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const About: React.FC = () => {
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

  const services = [
    {
      icon: "icofont-law-document",
      title: "Website Builder & Development",
      items: ["Desain Poster, Banner, Spanduk", "Desain Seragam Kerja", "Desain Logo", "Desain Browsur, Card Company", "Desain Packaging"],
    },
    {
      icon: "icofont-code",
      title: "Desain Visual Grapic",
      items: ["Desain Poster, Banner, Spanduk", "Desain Seragam Kerja", "Desain Logo", "Desain Browsur, Card Company", "Desain Packaging"],
    },
    {
      icon: "icofont-file-avi-mp4",
      title: "Tim Media",
      items: ["Desain Poster, Banner, Spanduk", "Desain Seragam Kerja", "Desain Logo", "Desain Browsur, Card Company", "Desain Packaging"],
    },
  ];

  return (
    <section id="services" className="p-100px-tb sm-p-50px-b">
      <div className="container">
        <div className="row justify-content-md-center">
          {services.map((service, index) => (
            <ServiceBox key={index} icon={service.icon} title={service.title} items={service.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
