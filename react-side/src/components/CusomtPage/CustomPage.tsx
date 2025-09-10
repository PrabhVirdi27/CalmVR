import React from "react";
import { SubHeading } from "../SubHeadings/SubHeadings";
import * as classes from "./CustomPage.module.css"
import { Box, Container } from "@mantine/core";

interface PageProp {
    heading: string;
    children: React.ReactNode;
    idLabel: string;
}

export function CustomPage({idLabel, heading, children}:PageProp) {
    return (

        <Box id={idLabel} className={classes.main}>
            <Container >
                <SubHeading subHeading={ heading }/>
                { children }
            </Container>
        </Box>

    );
}