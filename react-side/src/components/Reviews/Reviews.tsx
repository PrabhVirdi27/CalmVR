import React from "react";
import { Rating, Box, Text, Flex, Center } from "@mantine/core";
import * as classes from "./Reviews.module.css"

interface ReviewProp {
    image: string;
    name: string;
    remark: string;
    rating: number;
}

function CreateReview({image, name, remark, rating } : ReviewProp) {
    return (
        <Flex className={classes.outerFlex}>
            <Flex className={classes.imgFlex}>
                <img className={classes.imgs} src={image}/>
                <Text className={classes.text}>{name}</Text>
            </Flex>
            <Flex className={classes.ratingFlex}>
             <Rating value={rating} fractions={2} readOnly />
                <Text className={classes.text}>
                    {remark}
                </Text>

            </Flex>
            
        </Flex>
    );
}

export function Review() {
    return (
        <>
            <CreateReview 
                image="zuckerberg.png"
                name="Mark Zuckerberg"
                remark="Wow, it's better than my Metaverse!"
                rating={5}
            />
            
            <CreateReview 
                image="Bezos.png"
                name="Jeff Bezos"
                remark="It's good, but not better than Amazon."
                rating={4.5}
            />
            
            <CreateReview 
                image="Gates.png"
                name="Bill Gates"
                remark="Great VR app! Contact me ASAP (206-709-3100)!"
                rating={5}
            />
        </>



    );
}