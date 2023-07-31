import React from 'react'
import { Box } from '@material-ui/core';
import "../CSS/service.css";
import styled from 'styled-components';
import {recentTrip} from "../../src/Data/DataAPI";
import Card2 from "./Card2";
import Footer from "./Footer";


const ServiceHeroSection = styled(Box)`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content:center;
  align-items:center;
`
const RecentTrips = styled(Box)`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  padding: 1% 7%;
`

const GenericBox = styled(Box)`
  text-align:center;
  color : black;
`

export default function Service() {
  return (
    <div className='service'>
      <ServiceHeroSection>
        <h1 style={{ fontSize: "60px", color: "white" }}>Service</h1>
      </ServiceHeroSection>

      <GenericBox><h2 style={{ color: "#1C321D" }}>Recent Trip</h2>  <hr style={{width:"8%"}}/> </GenericBox>
      <RecentTrips>

        {recentTrip.map((currentElement,index)=>{
          
          return <Card2 
            key = {currentElement.id}
            title = {currentElement.title}
            description = {currentElement.description}
            image = {currentElement.image}
          /> 

        })}
      </RecentTrips>

      <Footer />
    </div>
  )
}
