import "../CSS/card.css";
import React from 'react'

import styled from 'styled-components'
import Box from '@mui/material/Box';

const CardContainer = styled(Box)`
  height: 350px;
  width: 300px;
  margin-right:10px;
  border-radius:10px;
  overFlow:hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin : 0 10px 10px 10px;
  
`


// changing tag using styled()
const CardImage = styled.img`
  max-width: 300px;
  max-height: 300px;
  border-radius-top-left:10px;
  object-fit: cover; 

`
const TitleGenericBox = styled(Box)`
  margin-left:10px;

`

export default function Card2(props) {
  return (
    <>
        <CardContainer>
          <Box>
            <CardImage src={props.image} alt="image" className="image-holder"/>
          </Box>
          <TitleGenericBox>
            <h4 style={{lineHeight:"0px"}}>{props.title}</h4>
            <h5 style={{fontWeight:"bold",color:"grey"}}>{props.description}</h5>
          </TitleGenericBox>

        </CardContainer>
    </>
  )
}
