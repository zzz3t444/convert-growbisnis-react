import { useEffect } from "react";
import "../../css/animate.min.css";
import "../../css/icofont.min.css";
import "../../css/bootstrap.min.css";
import "../../css/swiper.min.css";
import "../../css/style.css";
import "../../css/gredients/purple.css";
import "../../css/typography/poppins-quciksland.css";

// Define the props type for StepBox
interface StepBoxProps {
  icon: string;
  title: string;
  description: string;
}

const SectionTitle = () => (
  <div className="section-title text-center m-50px-b">
    <h2>Bagaimana Kami Bekerja?</h2>
  </div>
);

const StepBox: React.FC<StepBoxProps> = ({ icon, title, description }) => (
  <div className="how-it-box text-center p-15px-lr p-50px-tb m-10px-t m-10px-b">
    <i className={icon}></i>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default function StepHowWorks() {
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

  const steps = [
    {
      icon: "icofont-iphone",
      title: "Perencanaan",
      description:
        "Di GrowBisnis, kami memulai dengan mendalami ide bisnis Anda, memahami target pasar, dan mengali potensi serta tantangan yang mungkin dihadapi. Berdasarkan informasi ini, kami membantu Anda menyusun perencanaan yang komprehensif, termasuk pemetaan tujuan, rencana pemasaran, desain visual, dan proyeksi properti untuk memastikan bisnis Anda siap melangkah ke tahap berikutnya.",
    },
    {
      icon: "icofont-refresh",
      title: "Pengembangan",
      description:
        "Tahap pengembangan. GrowBisnis membantu Anda membangun elemen-elemen terpadu dan terjadwal, seperti pembuatan produk atau layanan, branding, properti, dan infrastruktur operasional. Kami bekerja sama dengan pihak lain untuk mengembangkan produk atau layanan sesuai dengan kebutuhan bisnis Anda dan menjaga kualitasnya, sehingga bisnis Anda memiliki daya saing yang kuat.",
    },
    {
      icon: "icofont-hand-drag1",
      title: "Pelaksanaan",
      description:
        "Tahap eksekusi. GrowBisnis memastikan semua rencana dan elemen yang telah dikembangkan diimplementasikan dengan lancar. Kami mendukung Anda dalam menjalankan strategi bisnis, mengelola pengembangan bisnis serta memantau perkembangan untuk membuat penyesuaian yang diperlukan. Dengan pendekatan yang responsif dan adaptif, kami bekerja agar bisnis Anda terus tumbuh dan mencapai hasil yang diharapkan.",
    },
  ];

  return (
    <section id="how-it-works" className="p-80px-tb gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <SectionTitle />
          </div>
        </div>
        <div className="row align-items-center">
          {steps.map((step, index) => (
            <div className="col-lg-4" key={index}>
              <StepBox icon={step.icon} title={step.title} description={step.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
