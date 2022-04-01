import React, { FC } from "react"
import { ChakraProvider, Box, Grid, theme, } from "@chakra-ui/react";
import { WalletCard } from "./components/WalletCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export const App:FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" bg='gray.800'>
      <Grid minH="20vh" p={3}>              
        <WalletCard/>     
        <ToastContainer/>
      </Grid>
    </Box>
  </ChakraProvider>
);