import React from "react";
import { Text } from "@mantine/core";
import * as classes from "./Demo.module.css"
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";

export function Demo() {
    return(
        <>
            <Text className={classes.text}>
                Look at our demo in action below.
            </Text>

            {/* <video>
                <source src="placeholder.mp4" type="video/mp4" />
            </video> */}

            <VideoPlayer />

        </>
    );
}