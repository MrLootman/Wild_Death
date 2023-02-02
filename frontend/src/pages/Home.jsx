import React, { useEffect } from "react";
import AOS from "aos";
import BackgroundImages from "../components/BackgroundImages";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="home">
      <BackgroundImages />
      <span>W</span>
      <h1>Wild Death</h1>
      <h3 data-aos="fade-up">
        “L`inquiétude présente est moindre que l`horreur imaginaire.”
      </h3>
    </div>
  );
}

export default Home;
