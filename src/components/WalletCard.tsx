import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Box, Button, Text } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { toast } from 'react-toastify';

const { ethereum }: any = window;

export const WalletCard = () => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [userBalance, setUserBalance] = useState('');
    const [connectButtonText, setConnectButtonText] = useState('Connect Wallet');

    const connectWallet = async () => {
        setConnectButtonText('MetaMask is locked - please login');

        try {
            if (!ethereum) {
                return toast.error("Please install Metamask");
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const address = accounts[0];


            setCurrentAccount(address);
            setConnectButtonText('Wallet Connected')
            toast.success('Wow so easy!');


            const balance = await ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] });
            const correctBalance = await ethers.utils.formatEther(balance);
            setUserBalance(correctBalance);


        } catch (error: any) {
            toast.error(`Error: ${error.message}`);
        }
    };


    return (
        <Box h='100vh' mt={20}>
            <Button leftIcon={<DownloadIcon />} onClick={connectWallet} w={80}>
                {connectButtonText}
            </Button>

            <Box mt={4}>
                <Text>{currentAccount}</Text>
                <Text>{userBalance ? ` ${userBalance} ETH` : ''} </Text>
            </Box>
        </Box>
    );
};