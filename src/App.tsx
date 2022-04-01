import React, { FC } from "react"
import { ChakraProvider, Box, Grid, theme, } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { WalletCard } from "./components/WalletCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export const App:FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="20vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />        
        <WalletCard/>     
        <ToastContainer/>
      </Grid>
    </Box>
  </ChakraProvider>
);