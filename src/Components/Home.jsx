import { React } from "react";

import "../CSS/home.css";
import Box from '@mui/material/Box';
import styled from "styled-components";


// Component Import
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";

// Data import 
import { recentTrip, recommendedDestinations } from "../../src/Data/DataAPI";

import HeadingImage from "./ExtraComponent/HeadingImage";

import image from "../Images/background.jpg";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';




const HeadingBox = styled(Box)`
  color:white;
  text-align: center;
`
const HeadingBoxButton = styled(Box)`
  color:white;
  text-align: center;
  margin-top:12%;
`
const HeroSection = styled(Box)`
  margin-top : 10%;
  background-image: url("background.jpg");
`

const GenericBox = styled(Box)`
  text-align:center;
  color : black;
`

const PopularDestination = styled(Box)`
  padding: 1% 4%;
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
`
// green color #1C321D

const RecentTrips = styled(Box)`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  padding: 1% 7%;

`


const RecommendedDestinations = styled(Box)`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
`

const PerfectPlace = styled(Box)`
  display:flex;
  padding: 1% 7%;
  justify-content:space-around;
  flex-wrap:wrap;

`

const PerfectPlaceImage = styled(Box)`
  display:flex;
  justify-content:center;

`

const BgImage = styled.img`
  max-width: 275px;
  max-height: 500px;
  border-radius:10px;
  margin: 5px;
  object-fit: cover; 
`


const Home = () => {

  return (
    <>
      <div className="home">
        .
        <HeroSection >
          <HeadingBox>
            <h1 style={{ fontSize: "50px" }}>Your Journey Your Stories </h1>
            <h1>Discover the Extraordinary Journey to Uncharted Destinations</h1>
          </HeadingBox>
          <HeadingBoxButton>
            <div className="bouncing-div">
              <span className="material-icons"><KeyboardDoubleArrowDownIcon style={{ fontSize: "100px" }} /></span>
            </div>

          </HeadingBoxButton>
        </HeroSection>
      </div>



      {/* Popular Destination */}
      <GenericBox><h2 style={{ color: "#1C321D", marginTop: "30px" }}>Popular Destination</h2> <hr style={{ width: "8%" }} /> </GenericBox>
      <PopularDestination>
        <HeadingImage />
      </PopularDestination>



      {/* Recent Trips */}
      <GenericBox><h2 style={{ color: "#1C321D" }}>Recent Trip</h2>  <hr style={{ width: "8%" }} /> </GenericBox>
      <RecentTrips>

        {recentTrip.map((currentElement, index) => {

          return <Card2
            key={currentElement.id}
            title={currentElement.title}
            description={currentElement.description}
            image={currentElement.image}
          />

        })}
      </RecentTrips>



      {/* Recommendation Destination */}
      <GenericBox><h2 style={{ color: "#1C321D" }}>Recommended Destination</h2>  <hr style={{ width: "8%" }} /> </GenericBox>
      <RecommendedDestinations>

        {recommendedDestinations.map((currentElement, index) => {
          return <Card
            key={currentElement.id}
            image={currentElement.image}
            country={currentElement.country}
            title={currentElement.title}
            price={currentElement.price}
          />
        })}

      </RecommendedDestinations>


      {/* Perfect places */}
      <GenericBox><h2 style={{ color: "#1C321D" }}></h2>  <hr style={{ width: "80%" }} /> </GenericBox>

      <PerfectPlace>
        <Box>
          <h1>Find The Perfect Place</h1>
          <h4 style={{ wordWrap: "break-word" }}>Explore and find your dream destinations with our handpicked collection of perfect places for every traveler's taste</h4>
          <button className="css-button-gradient--7">View more</button>
        </Box>

        <PerfectPlaceImage>
          <BgImage src={image} />
        </PerfectPlaceImage>

      </PerfectPlace>



      {/* Footer section */}
      <Footer />


    </>
  );
};

export default Home;
