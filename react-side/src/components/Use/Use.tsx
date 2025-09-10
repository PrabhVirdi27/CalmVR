import { Box, Flex, Text } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import React from "react";
import * as classes from "./Use.module.css"

const carouselStyle = {
    borderRadius: '20px', // Adjust the value based on your preference
    overflow: 'hidden',  // Ensure that content within the carousel doesn't overflow
  };


export function Use() {
    return (

        <>
            <Flex className={classes.flexCont}>
                <img className={classes.imgPeter} src="Peter.png" />
                <Box>
                    <Text className={classes.text}>
                        Find your favourite spot at home, grab the VR headset and immerse yourself into a calming and meditative journey through several scenes that enlighten you.
                    </Text>
                    
                    <Text className={classes.text}>
                        You no longer have to wait for therapy or doctors. CalmVR offers an on-demand and cost-effective solution that promotes relaxation and a resilient mindset.
                    </Text>
                </Box>            
            </Flex>

            <Text className={classes.text}>
                    Choose from a wide array of high-resolution nature scenes, with carefully curated audio and full 360° view, that feels as if you were there.
            </Text>

            <Carousel style={carouselStyle} className={classes.carousel} withIndicators >
                <Carousel.Slide className={classes.carSlider}><img src="nature1.png"/></Carousel.Slide>
                <Carousel.Slide className={classes.carSlider}><img src="nature2.png"/></Carousel.Slide>
                <Carousel.Slide className={classes.carSlider}><img src="nature3.png"/></Carousel.Slide>
                <Carousel.Slide className={classes.carSlider}><img src="nature4.png"/></Carousel.Slide>
                <Carousel.Slide className={classes.carSlider}><img src="nature5.png"/></Carousel.Slide>
                <Carousel.Slide className={classes.carSlider}><img src="nature6.png"/></Carousel.Slide>
            </Carousel>

        </>

        

    );
}