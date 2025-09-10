import React from "react";
import { Title, Divider, Flex } from "@mantine/core";
import * as classes from "./SubHeadings.module.css";

// Specify the type for each Prop entering the BlockQuoteComp function
interface QuoteProps {
    subHeading : string;
}

// returns a subheading
// subHeading = input parameter provided by user 
export function SubHeading ({subHeading} : QuoteProps) {
  return ( 
    <Title order={2}  className={classes.title}>
        { subHeading }   
    </Title>   
  );
}
