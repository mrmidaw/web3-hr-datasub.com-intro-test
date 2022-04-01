import React, { FC } from "react"
import { ChakraProvider, Box, Grid, theme, } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher"


export const App:FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="20vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />        
          Web3.0        
      </Grid>
    </Box>
  </ChakraProvider>
);