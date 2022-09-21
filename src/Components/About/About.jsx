import React from "react";
import "./About.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Typical from "react-typical";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-name">
          <span>Hi! I Am</span>
          <span>Murali Selvaraj</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>

          <div className="a-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Ethusiastic Developer 😎",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Developer 🌐",
                    1000,
                    "React Developer 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
        </div>
        <div>
          <button className="button a-button">Hire me</button>
          <a href="Murali Selvaraj.pdf" download={"Murali Selvaraj.pdf"}>
            <button className="button resume-btn">Resume</button>
          </a>
        </div>

        <div className="a-icons">
          <a href="https://github.com/Murali07" target="_blank">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/murali-selvaraj/"
            target="_blank"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* <div className="a-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div> */}

      <div className="profile-pic">
        <div className="profile-pic-bg"></div>
      </div>
    </div>
  );
};

export default About;
