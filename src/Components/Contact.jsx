import "../CSS/contact.css";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


// import Components
import Footer from "./Footer";


const ContactHeroSection = styled(Box)`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content:center;
  align-items:center;
`

const MessageBox = styled(Box)`
  display:flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  margin-top:3%;
  margin-bottom:3%;
`

const Contact = () => {


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  const textFieldStyle = {
    width: "600px",
    marginTop: "10px",
    width: isSmallScreen ? "300px" : "600px",
  }

  const buttonStyle = {
    width: "600px",
    marginTop: "10px",
    marginBottom: "30px",
    color:"orange",
    borderColor: "orange",
    width: isSmallScreen ? "300px" : "600px",
  }


  return (
    <div className="contact">
      <ContactHeroSection>
        <h1 style={{ fontSize: "60px", color: "white" }}>Contact</h1>
      </ContactHeroSection>

      <MessageBox>
        <h1>Send a message to us </h1>

        <TextField id="outlined-basic" label="Name" variant="outlined" style={textFieldStyle} /> <br /><br />
        <TextField id="outlined-basic" label="Email" variant="outlined" style={textFieldStyle} />  <br /><br />
        <TextField id="outlined-basic" label="Subject" variant="outlined" style={textFieldStyle} />  <br /><br />
        <TextField id="outlined-basic" label="Message" variant="outlined" style={textFieldStyle} />  <br /><br />
        <Button variant="outlined" style={buttonStyle}>SEND</Button>

      </MessageBox>

      <Footer />

    </div>
  );
};

export default Contact;
