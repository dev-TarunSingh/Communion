import React from "react";
import { Link } from "react-router-dom";
import event1 from "../assets/event1.avif";
import event2 from "../assets/event2.webp";
import event3 from "../assets/event3.avif";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import people from "../assets/people.png";
import "./HomePage.css";

function Home() {
  return (
    <section className="home-container">
      <h1 className="home-title">Connect Communities</h1>
      <p className="home-subtitle">
        Bridging gaps between faiths with tech and a dash of fun!
      </p>

      <div className="content-wrapper">
        <div className="text-content">
          <span className="tag">🔵 Unlimited Advantages</span>
          <h2>
            Unite, Innovate, <img src={avatar1} alt="Avatar 1" /> <br />
            <span className="highlight">
              <img src={avatar2} alt="Avatar 2" />
              Connect, Inspires
            </span>
            <br />
            Together
            <img src={people} alt="8 People" />
          </h2>

          <p className="description">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>

          <button className="cta-btn">View Our Services →</button>
        </div>

        <div className="image-gallery">
          <img src={event1} alt="Event 1" className="gallery-image" />
          <img src={event2} alt="Community 2" className="gallery-image" />
          <img src={event3} alt="Community 3" className="gallery-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
