import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ScrollReveal from "scrollreveal";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Routes from "./config/Routes";
import ModalItem from "./components/modalItem/ModalItem";
import ScollTop from "./components/scollTop/ScollTop";

function App() {
  const [windowScroll, setWindowScroll] = useState(getWindowScroll());
  function getWindowScroll() {
    const heightScroll = window.scrollY;
    return heightScroll;
  }
  useEffect(() => {
    function handleWindownScroll() {
      setWindowScroll(getWindowScroll());
    }
    window.addEventListener("scroll", handleWindownScroll);
    return () => {
      window.removeEventListener("scroll", handleWindownScroll);
    };
  }, []);

  const sr = ScrollReveal({
    distance: "100px",
    duration: 1000,
    delay: 100,
    scale: 1,
    easing: "ease",
  });

  useEffect(() => {
    sr.reveal(`.left-discordContainer, .header-sale, .bestsellers`, {
      delay: 300,
      origin: "left",
    });
    sr.reveal(
      `.right-discordContainer, .discord-img, .Card, .most_wishlisted`,
      { delay: 300, origin: "right" }
    );
    sr.reveal(`.discord-header, .main-dead, .main-content, .main-foot`, {
      delay: 300,
      origin: "top",
    });
    sr.reveal(`.discord-more, .main-slide, .card-typeGame`, {
      delay: 300,
      origin: "bottom",
    });
    sr.reveal(`.header-left, .bag-infor-content`, { origin: "left" });
    sr.reveal(`.header-right`, { origin: "right" });
    sr.reveal(`.nitro-left`, { origin: "top" });
  }, []);
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <ModalItem />
            <div className={windowScroll < 200 ? "" : "header-el"}>
              <Header />
            </div>
            <Routes />
            <Footer />
            <div className={`scroll-top ${windowScroll < 80 ? "" : "active"}`}>
              <ScollTop />
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
