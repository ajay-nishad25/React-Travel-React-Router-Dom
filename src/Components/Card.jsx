import "../CSS/card.css";
import React from 'react'

import styled from 'styled-components'
import Box from '@mui/material/Box';

const CardContainer = styled(Box)`
  height: 400px;
  width: 400px;
  // background-color:#1C321D;
  // border: solid 1px grey;
  margin-right:10px;
  border-radius:10px;
  overFlow:hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin : 0 10px 10px 10px;
  
`

// changing tag using styled()
const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  object-fit: cover; 
  transition:all ease 1s;
  &:hover{
    transform:scale(1.05);
  }
`
const TitleGenericBox = styled(Box)`
  line-height:0;
  margin-left:10px;

`
const ButtonContainerBox = styled(Box)`
  display:flex;
  justify-content:space-around;
`

const ButtonBox = styled(Box)`
  border-radius: 5px;
  width: 100px;
  color: white;
  text-align:center;
  background: #3287e2;
  cursor: pointer;
`

export default function Card(props) {
  return (
    <>
        <CardContainer>
          <Box>
            <CardImage src={props.image} alt="image" className="image-holder"/>
          </Box>
          <TitleGenericBox>
            <h5 style={{lineHeight:"0px"}}>{props.country}</h5>
            <h4>{props.title}</h4>
            <h5>{props.price}</h5>
          </TitleGenericBox>
          <ButtonContainerBox>
            <ButtonBox><p style={{lineHeight:"1px"}}>BUY</p></ButtonBox>
          </ButtonContainerBox>
        </CardContainer>
    </>
  )
}
