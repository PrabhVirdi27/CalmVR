import React from "react";
import { Heading } from "../components/Heading/Heading";
import { CustomPage } from "../components/CusomtPage/CustomPage";
import { Text, Box } from "@mantine/core";
import { About } from "../components/About/About";
import { Facts } from "../components/Facts/Facts";
import { Use } from "../components/Use/Use";
import { Demo } from "../components/Demo/Demo";
import { Review } from "../components/Reviews/Reviews";
import { Welcome } from "../components/Welcome/Welcome";
import { Footer } from "../components/Footer/Footer";
import * as classes from "./index.module.css"

export default function HomePage() {
  return (
    <>      

      <Welcome />
      <Box className={classes.stickyNav} > 
        <Heading />
      </Box>

      <CustomPage 
        idLabel={'About'}
        heading={'About'}
        children={<Text><About/></Text>}
      />

      <CustomPage 
        idLabel={'Facts'}
        heading={''}
        children={<Text><Facts/></Text>}
      />

      <Box style={{background: '#F8F9FA'} } >

        <CustomPage 
          idLabel={'How_It_Works'}
          heading={'How It Works'}
          children={<Text><Use/></Text>}
        />

        <CustomPage 
          idLabel={'Demo'}
          heading={'Demo'}
          children={<Text><Demo/></Text>}
        />

      </Box>

      <CustomPage 
        idLabel={'Reviews'}
        heading={'Reviews'}
        children={<Text><Review/></Text>}
      />

      <Footer/>

      
      

    </>
  );
}
