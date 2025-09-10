import { Divider, Flex, Text } from "@mantine/core";
import React from "react";
import * as classes from "./Facts.module.css"

export function Facts() {
    return (
        <>
        
            <Flex className={classes.flexCont}>
                <Flex className={classes.main}>
                    <img src="mind.svg"/>
                    <Divider className={classes.divider}/>
                    <Text className={classes.text}>
                        1 in 5 Canadians experience a mental illness
                    </Text>
                </Flex>
                <Flex className={classes.main}>
                    <img src="young_people.svg"/>
                    <Divider className={classes.divider}/>
                    <Text className={classes.text}>
                        Young people from 15 to 24 are more likely to experience mental illness
                    </Text>
                </Flex>
                <Flex className={classes.main}>
                    <img src="study.png"/>
                    <Divider className={classes.divider}/>
                    <Text className={classes.text}>
                        Studies show visual images and sounds of nature have positive impacts
                    </Text>
                </Flex>
            </Flex>
        
        
        
        </>
    );
}