import "../CSS/about.css";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import Footer from "./Footer";
import { about } from "../Data/DataAPI";


const AboutHeroSection = styled(Box)`

  width : 100%;
  height : 100%;
  display : flex;
  justify-content:center;
  align-items:center;
`

const HeadingBox = styled(Box)`
    padding: 1% 7%;

`

const About = () => {
  return (
    <div className="about">
      <AboutHeroSection>
        <h1 style={{ fontSize: "60px", color: "white" }}>About</h1>
      </AboutHeroSection>

      <HeadingBox>
        {about.map((currentElement) => {
          return <div key={currentElement.id}>
            <h1>{currentElement.heading}</h1>
            <h4 style={{color:"grey"}}>{currentElement.content}</h4>
          </div>
        })}

      </HeadingBox>

      <Footer />

    </div>
  );
};

export default About;
