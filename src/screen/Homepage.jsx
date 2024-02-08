import React from "react";
import { Box } from "@chakra-ui/react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import Crousel from "../components/Crousel";
import PageLink from "../components/PageLink";

// import Navbar from "../components/Navbar";



const Homepage = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <Box>
        <Box width={"90%"} margin={"auto"}>
          <Crousel/>
          <PageLink/>
        </Box>
        <Box
          bg={"rgb(245,247,250)"}
          border="1px solid rgb(245,247,250)"
          marginTop="-50px"
        >
          {/* <SliderHome />
          <MyOwlCarousel /> */}
        </Box>
        {/* <Features />
        <Reviews /> */}
        {/* chat icon */}
        {/* <Footer /> */}
      </Box>
    
    </Box>
  );
};

export default Homepage;