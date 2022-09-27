import React from "react";
import "./AboutMe.css";
import Photo from "../../img/photo.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AboutMe = () => {
  return (
    
    <div className="summary">
      
      <Card sx={{ maxWidth: 400 }} >
        <CardActionArea>
          <CardMedia className="image"
            component="img"                       
            image={Photo}
            height="400"
            alt="Profile Picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About Me
            </Typography>
            <Typography variant="body2" className="summary-text">
              SAP Security Consultant with 4+ years of experience in SAP ERP
              Central Component (ECC) 6.0. Experience in Production Support for
              R/3 Security and GRC. Full stack web developer with background
              knowledge of MERN stacks. I am an enthusiastic team player, deep
              thinker and a strong customer focus. To adopt new technology
              quickly.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, Flutter, NPM, Ionic, BootStrap,
              MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB, DynamoDB, AWS S3</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AboutMe;
