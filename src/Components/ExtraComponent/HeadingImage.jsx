import React from 'react'


import { Box } from '@material-ui/core';
import styled from "styled-components";
// import image from "../background.jpg";

// import image from "../background.jpg";

import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";

const CardHolder = styled(Box)`
  display: flex;
  justify-content:space-evenly;
  padding: 1% 4%;

  @media (max-width: 600px) {
    display:flex;
    justify-content:center;
    flex-direction:column;
    flex-wrap:wrap;
  }

`;

const Box1 = styled(Box)`
    display:inline;
    justify-content:center;

    @media (max-width: 600px) {
        display:flex;
        justify-content:center;
      }
`

const Box2 = styled(Box)`
    word-wrap: break-word;
    margin-left:20px;
    font-size:20px;
`


const BgImage = styled.img`
// max-width: 50%; /* Make the image responsive by setting max-width to 100% */
// max-height: 100%; /* Make the image responsive by setting max-height to 100% */
  max-width:250px;

  border-radius:10px;
  margin: 5px;
  object-fit: cover; 
`


export default function HeadingImage() {
    return (
        <>

            <CardHolder>

                <Box1>
                    <BgImage src={image1} />
                </Box1>

                <Box2>
                    <h4>Taj Mahal, India</h4>
                    <p style={{ color: "grey" }}> Taj Mahal, a timeless wonder of the world that beckons travelers from all corners of the globe. As you step into the ethereal beauty of this iconic monument, you'll find yourself transported back in time to an era of exquisite craftsmanship and love immortalized in white marble. </p>
                </Box2>
            </CardHolder>

            <CardHolder>


                <Box2>
                    <h4>White Temple Chiang Rai, Thailand</h4>
                    <p style={{ color: "grey" }}>Thailand is full of ornate temples, but when it comes to originality, the White Temple wins out. This contemporary style Buddhist temple is unique with its shape, structures, the dazzling white and silver adorning the outside, and the trippy mural on the inside. </p>
                </Box2>
                <Box1>
                    <BgImage src={image3} />
                </Box1>
            </CardHolder>

            <CardHolder>

                <Box1>
                    <BgImage src={image2} />
                </Box1>

                <Box2>
                    <h4>Lombok, Indonesia</h4>
                    <p style={{ color: "grey" }}>An increasingly popular alternative to overly commercial Bali, Lombok and its offshore coral-ringed Gili Islands are tropical paradises. Here, you can enjoy all the appeal of Bali before tourism took over – surfing hotspots, uncrowded beaches, and magical waterfalls.</p>
                </Box2>
            </CardHolder>
        </>
    )
}
