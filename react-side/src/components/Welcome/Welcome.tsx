import React from "react";
import { Box, Flex, Title, Text } from "@mantine/core";
import * as classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      {/* <Box id="Landing" className={classes.main} style={{ height: 'calc(100vh - var(--nav-height) - var(--borderH))' }}> */}
      <Flex id="Landing" className={classes.main}>
        <Flex className={classes.content}>
          <Title className={classes.title}>
            <span>Calm</span><i>VR</i>
          </Title>
          <Text className={classes.text}>
            Immerse Yourself Into Serenity
          </Text>
        </Flex>
      </Flex>


    </>
  );
}
