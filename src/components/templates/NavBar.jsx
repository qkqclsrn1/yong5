import React, { useState, useEffect } from "react";
// import  useMetaMask from "../../useMetamask.js";
// import { useWeb3React } from "@web3-react/core";
//import { ethers } from "ethers";
import { Box, Flex, Text, Stack, Link } from "@chakra-ui/react";
import { ethers } from "ethers";
import { HamburgerIcon } from "@chakra-ui/icons";
// import { injected } from "../../utils/injected";
// import Web3 from "web3";
export default function NavBar() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        await accountsChanged(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };
  // const [loading, setLoading] = useState(false);
  // const { active, account, library, chainId, activate, deactivate } =
  //   useWeb3React();
  // // const [account, setAccount] = useState(null);
  // // const [buttonText, setButtonText] = useState("Connect Your Wallet");
  // // const [buttonColor, setButtonColor] = useState("#Be2525");
  // // // const [walletAddress, SetWalletAddress] = useState("")
  // let acc = localStorage.getItem("account");
  // let web3;

  // // function connectWallet() {
  // //   activate(injected) }
  // //   useEffect(() => {
  // //     console.log(chainId, account, activate)
  // //   })

  // const connectWalletHandler = () => {
  //   if (window.ethereum && window.ethereum.isMetaMask) {
  //     console.log("MetaMask Here!");
  //     web3 = new Web3(window.ethereum);
  //     window.ethereum.request({ method: "eth_requestAccounts" });
  //   } else {
  //     alert("Please install MetaMask");
  //   }
  // };
  // async function connectOnLoad() {
  //   try {
  //     await activate(injected);
  //     console.log(chainId, account, activate);
  //   } catch (ex) {
  //     console.log(ex);
  //   }

  //   const account1 = await web3.eth.getAccounts();
  //   acc = localStorage.setItem("accounts", account1);
  // }

  // useEffect(() => {
  //   if (acc != null) {
  //     connectOnLoad();
  //   }
  //   connectWalletHandler();
  // }, []);

  // async function connectOnClick() {
  //   if (localStorage.getItem("accounts") == null) {
  //     setLoading(true);
  //     try {
  //       await activate(injected);
  //     } catch (ex) {
  //       console.log(ex);
  //     }
  //     const account1 = await web3.eth.getAccounts();
  //     console.log(account1);
  //     acc = localStorage.setItem("account", account1);
  //     console.log(acc);
  //     setTimeout(function () {
  //       setLoading(false);
  //     }, 1600);
  //   } else {
  //     disconnect();
  //   }
  // }

  // async function disconnect() {
  //   try {
  //     deactivate();
  //     localStorage.removeItem("account");
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // }
  // // const accountChangeHandler = (newAccount) => {
  // //   setAccount(newAccount);

  // // };
  // // const chainChangeHandler = (chainId) => {
  // //   window.location.reload();
  // // };

  // // window.ethereum.on("accountsChanged", accountChangeHandler);
  // // window.ethereum.on("chainChanged", chainChangeHandler);
  return (
    <Box pos={"fixed"} top={0} width={"100%"} zIndex={999}>
      <Flex
        bg={"rgba(#272944,0.7)"}
        backdropFilter={"blur(7px)"}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 7 }}
        borderBottom={1}
        align={"center"}>
        <Stack
          flex={{ base: 1 }}
          justify={"flex-start"}
          direction={"row"}
          spacing={3}>
          <Link href="/about">
            <Box
              as={"button"}
              position={"relative"}
              justify={"center"}
              align={"start"}>
              <HamburgerIcon w={16} h={10} />
            </Box>
          </Link>

          <Box as={"button"} justify={"center"} align={"center"}>
            <Link href="/">
              <Text
                mt={-2}
                fontWeight={600}
                fontSize={"28px"}
                // textShadow={"0 0 0.30em #1da9cc"}
                color={"#F7FF58"}>
                0xchips
              </Text>
            </Link>
          </Box>
        </Stack>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={3}>
          <Box
            as="button"
            height="44px"
            width="200px"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            borderRadius="20px"
            fontSize="20px"
            fontWeight="semibold"
            bg="gray.700"
            // color="black"
            _hover={{ bg: "black" }}
            _active={{
              bg: "#0A090C",
              transform: "scale(0.98)",
            }}>
            List Your Game
          </Box>
          <Box
            as="button"
            height="44px"
            width="240px"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
            borderRadius="20px"
            fontSize="20px"
            fontWeight="semibold"
            bg={account ? "#24E500" : "#Be2525"}
            _hover={{ bg: "black" }}
            _active={{
              bg: "#0A090C",
              transform: "scale(0.98)",
            }}
            onClick={connectHandler}>
            {account ? "Connected" : "Connect your Wallet"}
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
