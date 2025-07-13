import React, { useEffect, useState } from "react";
import { Code2, Globe, Youtube, Link as LinkIcon } from "lucide-react";
import "./App.css";

const offerings = [
  {
    title: "Full Stack Development",
    description:
      "Delivering complete web applications with robust backends and seamless user experiences using React.js,Firebase, Node.js",
    icon: Globe,
    link: "https://github.com/yagnarashagan6",
  },
  {
    title: "YouTube Tutorials",
    description:
      "Publishing quality content on intersting facts , vlogs and true stories on my YouTube channel.",
    icon: Youtube,
    link: "https://www.youtube.com/channel/UCI6i0_kzNxzKc6SIVm1x9_Q",
  },
  {
    title: "Product Advertisement",
    description:
      "Reach your target audience by showcasing your service or product through my popular YouTube platform.",
    icon: LinkIcon,
    link: "https://www.youtube.com/channel/UCI6i0_kzNxzKc6SIVm1x9_Q",
  },
];

const Services = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const section = document.getElementById("services");
    if (!section) {
      setHasLoaded(true);
      return;
    }
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasLoaded(false);
          setTimeout(() => setHasLoaded(true), 10);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="overall-section" id="services">
      <div className="offerings-container services-offerings-container">
        <h2 className="section-title services-section-title">My Services</h2>
        <div className="underline"></div>
        <div className="features-grid services-features-grid">
          {offerings.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                className={`feature-box services-feature-box ${
                  hasLoaded
                    ? index === 0
                      ? "feature-left-in"
                      : index === 1
                      ? "feature-center-in"
                      : "feature-right-in"
                    : ""
                }`}
                key={offer.title}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="feature-icon-wrapper services-feature-icon-wrapper">
                  <div className="feature-icon">
                    <Icon size={36} />
                  </div>
                </div>
                <h3 className="feature-title services-feature-title">
                  {offer.title}
                </h3>
                <p className="feature-description services-feature-description">
                  {offer.description}
                </p>
                {offer.link ? (
                  <a
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="feature-link services-feature-link"
                  >
                    Learn More →
                  </a>
                ) : (
                  <span className="feature-link-disabled services-feature-link-disabled">
                    Not Available
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
