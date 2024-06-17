import react from "react";
import Banner from "../../assets/Banner/Footer-Banner.jpg";
import Logo from "../../assets/logo.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog  ",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg}>
      <div className="container mb-20 text-white ">
        <div className="grid md:grid-cols-3 pv-44 pt-5">
          {/* company details  */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={Logo} alt="" className="max-w-[50px]" />
              ویتوس
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              architecto.
            </p>
          </div>
          {/* footer links */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
