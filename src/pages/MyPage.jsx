import React, { useState, useEffect } from 'react'
import { Mark, Box, Heading, useHighlight, Flex } from "@chakra-ui/react";
import { ethers } from "ethers";

const MyPage = () => {
  
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);

	const connectWallet= () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

 const chunks = useHighlight({
    text:
      "Hello there, Thank you so much for using 0xchips gaming NFT marketplace. Your precious connected wallet address is" +
      "  " +
      `${defaultAccount}` +
      " " +
      "and balance is" +
      `${ userBalance }`,
    query: ["account", "connected", "accentuate", "instantly"],
  });
  
  return (

  <Flex display={"flex"} justify={"center"} align={"center"} my={200} mx={200}>
      <Heading lineHeight="tall">
        {chunks.map(({ match, text }) => {
          if (!match) return text;
          return text === "instantly" ? (
            <Box as="u" fontFamily="NewYork">
              {text}
            </Box>
          ) : (
            <Mark bg="white" color="black" fontFamily="NewYork" px="2" py="1">
              {text}
            </Mark>
          );
        })}
      </Heading>
    </Flex>
  );
};


export default MyPage