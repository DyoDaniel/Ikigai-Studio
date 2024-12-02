"use client";

import "./page.scss";
import "./components/artist-component/artist-component.scss";
import "./components/about-us/about-us-component.scss";
import "./components/gallery/gallery-component.scss";
import { Logo } from "./components/logo";
import { IkigaiLogo } from "./components/ikigai-logo";
import { useEffect, useState } from "react";
import { ArtistComponent } from "./components/artist-component/artist-component";
import { AboutUsComponent } from "./components/about-us/about-us-component";
import { GalleryComponent } from "./components/gallery/gallery-component";

export default function Home() {
  const [text, setText] = useState("IKIGAI");
  const phrases = ["IKIGAI", "生きがい"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => {
        const currentIndex = phrases.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % phrases.length;
        return phrases[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInSections.forEach((section) => observer.observe(section));
    return () => {
      fadeInSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <main>
        <section>
          <header className="header-container">
            <Logo></Logo>
            <nav className="menu-options">
              <a href="#aboutUs">Sobre</a>
              <a href="#artists">Artistas</a>
              <a href="#gallery">Galeria</a>
            </nav>
          </header>
          <div className="content-container">
            <div className="ikigai-logo">
              <IkigaiLogo></IkigaiLogo>
            </div>
            <h1 className="ikigai-name glitch">{text}</h1>
            <div className="video-overlay">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
              >
                <source src="IkigaiIntro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </main>
      <section id="aboutUs" className="fade-in-section">
        <AboutUsComponent></AboutUsComponent>
      </section>
      <section>
        <div id="artists">
          <div className="artists-title">
            <h1>ARTISTAS</h1>
          </div>
        </div>
        <div className="artists-section fade-in-section">
          <div className="artists-container">
            <div className="artist-frame">
              <img src="sofiPet.png" className="artist-1" />
              <ArtistComponent
                color="#E0473A"
                logo="sofiLogo.png"
                artistName="Sofi"
                artistSurname="ダマセノ"
                profileVideo="sofiProfileVideo.mp4"
                artistFooter="BLACKWORK  -  ANIME"
                instagramUser="@sofidamaceno"
                instragramUrl="https://www.instagram.com/sofidamaceno?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                backgroundImage="sofiBackground.png"
              ></ArtistComponent>
            </div>

            <div className="artist-frame">
              <img src="klopperPet.png" className="artist-2" />
              <ArtistComponent
                color="#3D507A"
                logo="klopperLogo.png"
                artistName="Gabe"
                artistSurname="クロッパー"
                profileVideo="klopperProfileVideo.mp4"
                artistFooter="BLACKWORK  -  ANIME"
                instagramUser="@gabriel.klopper"
                instragramUrl="https://www.instagram.com/gabriel_klopper?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                backgroundImage="klopperBackground.png"
              ></ArtistComponent>
            </div>

            <div className="artist-frame">
              <ArtistComponent
                color="#000000"
                logo="joaoLogo.png"
                artistName="João"
                artistSurname="マテウス"
                profileVideo="joaoProfileVideo.mp4"
                artistFooter="BLACKWORK  -  ANIME"
                instagramUser="@joaoink_"
                instragramUrl="https://www.instagram.com/joaoink_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                backgroundImage="joaoBackground.png"
              ></ArtistComponent>
              <img src="joaoPet.png" className="artist-3" />
            </div>

            <div className="artist-frame">
              <ArtistComponent
                color="#986DB2"
                logo="gysaLogo.png"
                artistName="Gysa"
                artistSurname="聖人"
                profileVideo="gysaProfileVideo.mp4"
                artistFooter="BLACKWORK"
                instagramUser="@gysas_"
                instragramUrl="https://www.instagram.com/gysas_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                backgroundImage="gysaBackground.png"
              ></ArtistComponent>
              <img src="gysaPet.png" className="artist-4" />
            </div>

            <div className="artist-frame">
              <ArtistComponent
                color="#F596AA"
                logo="brunaLogo.png"
                artistName="Bruna"
                artistSurname="ビオンド"
                profileVideo="brunaProfileVideo.mp4"
                artistFooter="FINELINE"
                instagramUser="@auimaue.ink"
                instragramUrl="https://www.instagram.com/auimaue.ink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                backgroundImage="brunaBackground.png"
              ></ArtistComponent>
              <img src="brunaPet.png" className="artist-5" />
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <GalleryComponent></GalleryComponent>
      </section>
      <footer>
        <div>
          <div className="footer-info">
            <h1>NOS ACOMPANHE TAMBÉM NO INSTA</h1>
            <a
              target="_blank"
              href="https://www.instagram.com/ikigaitt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <button className="contact-us-ikigai">
                <i className="fab fa-instagram"></i>Seguir
              </button>
            </a>
          </div>
        </div>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.300295972239!2d-51.18445599458984!3d-29.167310631235505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea30623515c97%3A0x127fee683c6ba2fc!2sStudio%20Ikigai!5e0!3m2!1spt-BR!2sbr!4v1733025989517!5m2!1spt-BR!2sbr"
            width="50%"
            height="400"
            loading="lazy"
          ></iframe>
          <h2> Localização: Caxias do Sul - RS </h2>
        </div>
        <div className="footer-logo">
          <IkigaiLogo></IkigaiLogo>
        </div>
      </footer>
    </div>
  );
}
