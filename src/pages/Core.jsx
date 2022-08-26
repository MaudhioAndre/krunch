import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Waypoint } from "react-waypoint";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCode,
  faMobile,
  faCamera,
  faWandMagicSparkles,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => (
    <div>{/* <ul className="testimonial-dots"> {dots} </ul> */}</div>
  ),
};

export default function Core() {
  const [toggleMenu, settoggleMenu] = useState("");
  const [currentContent, setcurrentContent] = useState("home");

  useEffect(() => {
    gotoPage();
  }, []);

  function gotoPage() {
    var s = window.location.href;
    var last = s.lastIndexOf("#");
    var id = s.substring(last + 1);
    if (id == "content") {
      goContent();
    }
    if (id == "about") {
      goAbout();
    }
    if (id == "portfolio") {
      goportfolio();
    }
    if (id == "services") {
      goservices();
    }
    if (id == "team") {
      goteam();
    }
    if (id == "news") {
      gonews();
    }
    if (id == "contact") {
      gocontact();
    }
  }

  const myRef = useRef(null);
  const portfolio = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const team = useRef(null);
  const news = useRef(null);
  const contact = useRef(null);

  const goContent = () => myRef.current.scrollIntoView();
  const goAbout = () => about.current.scrollIntoView();
  const goportfolio = () => portfolio.current.scrollIntoView();
  const goservices = () => services.current.scrollIntoView();
  const goteam = () => team.current.scrollIntoView();
  const gonews = () => news.current.scrollIntoView();
  const gocontact = () => contact.current.scrollIntoView();

  // function handleToggleMenu(msg) {
  //   if (msg == "enterBanner") {
  //     setTimeout(() => {
  //       setcurrentContent("home");
  //     }, "300");
  //   }
  //   settoggleMenu(msg);
  // }

  function handleToggleMenu(msg) {
    if (msg == "enterBanner") {
      setTimeout(() => {
        setcurrentContent("home");
      }, "300");
      settoggleMenu("leaveBanner enterBanner");
      setTimeout(() => {
        settoggleMenu("noBanner");
      }, "300");
    } else {
      settoggleMenu(msg);
    }
  }

  function handleSetContent(content) {
    console.log(content);
    setcurrentContent(content);
  }

  return (
    <>
      <Waypoint
        onEnter={handleToggleMenu.bind(this, "enterBanner")}
        onLeave={handleToggleMenu.bind(this, "leaveBanner")}
      >
        <div
          // className={`banner ${toggleMenu == "leaveBanner" && "LB"}`}
          className={`banner ${
            (toggleMenu == "leaveBanner" ||
              toggleMenu == "leaveBanner enterBanner") &&
            "LB"
          }`}
          id="home"
        >
          <Header className={toggleMenu} currentContent={currentContent} />
          <div className="banner-content">
            <div className="banner-content2">
              <div className="banner-text">CLEAN AND FLEXIBLE TEMPLATE</div>
              <div className="banner-desc">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat.{" "}
              </div>
            </div>
          </div>
        </div>
      </Waypoint>

      <div ref={about} id="about" className="div-aboutus-1">
        <div className="div-aboutus-2">
          <div className="text-aboutus-1">ABOUT US</div>
          <div className="text-aboutus-2">
            Setibulum rutrum quam vitae fringilla tincidunt
          </div>
          <Waypoint
            onEnter={handleSetContent.bind(this, "about")}
            // onLeave={handleSetContent.bind(this, "")}
          >
            <div className="hr-about"></div>
          </Waypoint>
        </div>
        <div className="div-aboutus-3">
          <div className="div-aboutus-4">
            <span>
              Lorem ipsum dolor sitamet, consectetur adipisicing elit, seddo
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quisus nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Excepteur sint occaecat cupidatat none proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum voluptate dolor.
            </span>
          </div>
          <div>
            <img
              src={require("../assets/img/home-about.jpg")}
              className="img-about"
            />
          </div>
        </div>
      </div>

      <div ref={portfolio} id="portfolio">
        <div className="div-aboutus-2">
          <div className="text-aboutus-1">PORTFOLIO</div>
          <div className="text-aboutus-2">
            An eye for detail makes our work beautiful
          </div>
          <Waypoint
            onEnter={handleSetContent.bind(this, "portfolio")}
            // onLeave={handleSetContent.bind(this, "")}
          >
            <div className="hr-about"></div>
          </Waypoint>
        </div>
        <div className="div-img-portfolio">
          <div className="div-img-portfolio-2">
            <img
              src={require("../assets/img/2.jpg")}
              className="img-portfolio"
            />
            <div className="text-portfolio-1">GRAPHIC DESIGN</div>
          </div>
          <div className="div-img-portfolio-2">
            <img
              src={require("../assets/img/5.jpg")}
              className="img-portfolio"
            />
            <div className="text-portfolio-1">PRINT DESIGN</div>
          </div>
          <div className="div-img-portfolio-2">
            <img
              src={require("../assets/img/6.jpg")}
              className="img-portfolio"
            />
            <div className="text-portfolio-1">MOBILE APPS</div>
          </div>
          <div className="div-img-portfolio-2">
            <img
              src={require("../assets/img/7.jpg")}
              className="img-portfolio"
            />
            <div className="text-portfolio-1">3D DRAWING</div>
          </div>
          <div className="div-img-portfolio-2">
            <img
              src={require("../assets/img/8.jpg")}
              className="img-portfolio"
            />
            <div className="text-portfolio-1">INTERIOR DESIGN</div>
          </div>
          <div className="div-img-portfolio-2">
            <img
              src={require("../assets/img/9.jpg")}
              className="img-portfolio"
            />
            <div className="text-portfolio-1">WEB DESIGN</div>
          </div>
          <div className="div-img-portfolio-2">
            <img
              src={require("../assets/img/11.jpg")}
              className="img-portfolio"
            />
            <div className="text-portfolio-1">PRINT DESIGN</div>
          </div>
          <div className="div-img-portfolio-2">
            <img
              src={require("../assets/img/12.jpg")}
              className="img-portfolio"
            />
            <div className="text-portfolio-1">HOME DESIGN</div>
          </div>
        </div>
      </div>

      <div className="div-1">
        <div>
          <div>Have a Project in Mind?</div>
          <button>CONTACT NOW</button>
        </div>
      </div>
      <Waypoint
        onEnter={handleSetContent.bind(this, "")}
        // onLeave={handleSetContent.bind(this, "")}
      >
        <div className="div-testimonial-1">
          <div className="text-testimonials">
            TESTIMONIALS
            <div className="hr-testimonials"></div>
          </div>
          <Slider {...settings}>
            <div className="satu">
              <div>
                It really saves me time and effort. web design is exactly what
                our business has been lacking. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                imperdiet. Nunc ut sem risus tristique posuere.
              </div>
              <div className="nama-testimonials">WALTER WARD</div>
            </div>
            <div className="satu">
              <div>
                It really saves me time and effort. web design is exactly what
                our business has been lacking. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                imperdiet. Nunc ut sem risus tristique posuere.
              </div>
              <div className="nama-testimonials">WALTER WARD</div>
            </div>
            <div className="satu">
              <div>
                It really saves me time and effort. web design is exactly what
                our business has been lacking. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                imperdiet. Nunc ut sem risus tristique posuere.
              </div>
              <div className="nama-testimonials">WALTER WARD</div>
            </div>
          </Slider>
        </div>
      </Waypoint>

      <div ref={services} id="services" className="div-services-1">
        <div className="div-aboutus-2">
          <div className="text-aboutus-1">SERVICES</div>
          <div className="text-aboutus-2">
            Scope of our featured premium services
          </div>
          <Waypoint
            onEnter={handleSetContent.bind(this, "services")}
            // onLeave={handleSetContent.bind(this, "")}
          >
            <div className="hr-about"></div>
          </Waypoint>
        </div>
        <div className="div-services-2">
          <div className="div-services-3">
            <FontAwesomeIcon className="icon-services" icon={faDesktop} />
            <div className="text-services-1">WEB DESIGN</div>
            <div className="text-services-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim eros elementum tristique. Duis cursus,
              viverra ornare, eros dolor interdum nulla, commodo diam libero
              vitae.
            </div>
          </div>
          <div className="div-services-3">
            <FontAwesomeIcon className="icon-services" icon={faCode} />
            <div className="text-services-1">WEB DESIGN</div>
            <div className="text-services-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim eros elementum tristique. Duis cursus,
              viverra ornare, eros dolor interdum nulla, commodo diam libero
              vitae.
            </div>
          </div>
          <div className="div-services-3">
            <FontAwesomeIcon className="icon-services" icon={faMobile} />
            <div className="text-services-1">APPS DESIGN</div>
            <div className="text-services-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim eros elementum tristique. Duis cursus,
              viverra ornare, eros dolor interdum nulla, commodo diam libero
              vitae.
            </div>
          </div>
          <div className="div-services-3">
            <FontAwesomeIcon className="icon-services" icon={faCamera} />
            <div className="text-services-1">PHOTOGRAPHY</div>
            <div className="text-services-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim eros elementum tristique. Duis cursus,
              viverra ornare, eros dolor interdum nulla, commodo diam libero
              vitae.
            </div>
          </div>
          <div className="div-services-3">
            <FontAwesomeIcon
              className="icon-services"
              icon={faWandMagicSparkles}
            />
            <div className="text-services-1">BRANDING</div>
            <div className="text-services-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim eros elementum tristique. Duis cursus,
              viverra ornare, eros dolor interdum nulla, commodo diam libero
              vitae.
            </div>
          </div>
          <div className="div-services-3">
            <FontAwesomeIcon className="icon-services" icon={faEarthAmerica} />
            <div className="text-services-1">HOSTING</div>
            <div className="text-services-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim eros elementum tristique. Duis cursus,
              viverra ornare, eros dolor interdum nulla, commodo diam libero
              vitae.
            </div>
          </div>
        </div>
      </div>

      <div ref={team} id="team" className="div-team-1">
        <div className="div-aboutus-2">
          <div className="text-aboutus-1">TEAM</div>
          <div className="text-aboutus-2">
            Setibulum rutrum quam vitae fringilla tincidunt
          </div>
          <Waypoint
            onEnter={handleSetContent.bind(this, "team")}
            // onLeave={handleSetContent.bind(this, "")}
          >
            <div className="hr-about"></div>
          </Waypoint>
        </div>
        <div className="div-team-2">
          <div className="div-team-3">
            <div className="div-img-team">
              <img src={require("../assets/img/13.jpg")} className="img-team" />
              <div className="sosmed-team">
                <FontAwesomeIcon className="icon-team" icon={faFacebookF} />
                <FontAwesomeIcon className="icon-team" icon={faTwitter} />
                <FontAwesomeIcon className="icon-team" icon={faLinkedinIn} />
              </div>
            </div>
            <div className="nama-team">MICHAEL THOMAS</div>
            <div className="role-team">Creative Director</div>
          </div>
          <div className="div-team-3">
            <div className="div-img-team">
              <img src={require("../assets/img/14.jpg")} className="img-team" />
              <div className="sosmed-team">
                <FontAwesomeIcon className="icon-team" icon={faFacebookF} />
                <FontAwesomeIcon className="icon-team" icon={faTwitter} />
                <FontAwesomeIcon className="icon-team" icon={faLinkedinIn} />
              </div>
            </div>
            <div className="nama-team">ALEXA MEYER</div>
            <div className="role-team">Graphic Designer</div>
          </div>
          <div className="div-team-3">
            <div className="div-img-team">
              <img src={require("../assets/img/16.jpg")} className="img-team" />
              <div className="sosmed-team">
                <FontAwesomeIcon className="icon-team" icon={faFacebookF} />
                <FontAwesomeIcon className="icon-team" icon={faTwitter} />
                <FontAwesomeIcon className="icon-team" icon={faLinkedinIn} />
              </div>
            </div>
            <div className="nama-team">JEFFREY STEWARD</div>
            <div className="role-team">Web Developer</div>
          </div>
          <div className="div-team-3">
            <div className="div-img-team">
              <img src={require("../assets/img/15.jpg")} className="img-team" />
              <div className="sosmed-team">
                <FontAwesomeIcon className="icon-team" icon={faFacebookF} />
                <FontAwesomeIcon className="icon-team" icon={faTwitter} />
                <FontAwesomeIcon className="icon-team" icon={faLinkedinIn} />
              </div>
            </div>
            <div className="nama-team">BRUCE MOORE</div>
            <div className="role-team">Web Designer</div>
          </div>
        </div>
      </div>

      <div className="div-play">
        {/* <img src={require("../assets/img/play.svg")} className="img-play"/> */}
        <FontAwesomeIcon className="img-play" icon={faCirclePlay} />
        <div className="text-play">
          Aenean commodo ligula eget dolor sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus consectetur muse.
        </div>
        <button className="button-play">DOWNLOAD NOW</button>
      </div>

      <div ref={news} id="news" className="div-news">
        <div className="div-aboutus-2">
          <div className="text-aboutus-1">LATEST NEWS</div>
          <div className="text-aboutus-2">
            Check out our latest news and activities
          </div>
          <Waypoint
            onEnter={handleSetContent.bind(this, "news")}
            // onLeave={handleSetContent.bind(this, "")}
          >
            <div className="hr-about"></div>
          </Waypoint>
        </div>
        <div className="div-news-1">
          <div className="div-news-2">
            <img src={require("../assets/img/18.jpg")} className="img-news" />
            <div className="judul-news">Tempor incidunt labore dolor</div>
            <div className="tgl-news">August 24, 2016</div>
            <div className="desc-news">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <div className="read-more-news">READ MORE</div>
          </div>
          <div className="div-news-2">
            <img src={require("../assets/img/17.jpg")} className="img-news" />
            <div className="judul-news">Eiusmod tempor labore aliqua</div>
            <div className="tgl-news">August 20, 2016</div>
            <div className="desc-news">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="read-more-news">READ MORE</div>
          </div>
          <div className="div-news-2">
            <img src={require("../assets/img/4.jpg")} className="img-news" />
            <div className="judul-news">Conseqntur distinctio ipsum</div>
            <div className="tgl-news">August 18, 2016</div>
            <div className="desc-news">
              Aenean commodo ligula eget dolor sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div className="read-more-news">READ MORE</div>
          </div>
        </div>
        <button className="btn-read">READ OUR NEWS</button>
      </div>

      <div ref={contact} id="contact" className="div-contact">
        <div className="div-aboutus-2">
          <div className="text-aboutus-1">KEEP IN TOUCH</div>
          <div className="text-aboutus-2">
            Setibulum rutrum quam vitae fringilla tincidunt
          </div>
          <Waypoint
            onEnter={handleSetContent.bind(this, "contact")}
            // onLeave={handleSetContent.bind(this, "")}
          >
            <div className="hr-about"></div>
          </Waypoint>
        </div>
        <div className="div-contact-1">
          <input
            type={"text"}
            placeholder="Firstname"
            className="input-contact"
          />
          <input
            type={"text"}
            placeholder="Lastname"
            className="input-contact"
          />
        </div>
        <input type={"email"} placeholder="Email" className="input-contact2" />
        <textarea rows={10} placeholder="Message" className="input-contact2" />
        <button className="button-play">SEND MESSAGE</button>
      </div>
      <Footer />
    </>
  );
}
