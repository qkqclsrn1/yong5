import React, { useState, useEffect } from "react";

import { ethers } from "ethers";
import {
  Box,
  Flex,
  Text,
  Stack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

//TODO 2: List your game:: firebase integration
//TODO 3: hamburger button-> link
//TODO 4: MyPage Button :: (avatar button??)

import { HamburgerIcon } from "@chakra-ui/icons";


export default function NavBar() {
  const [account, setAccount] = useState(null);
  const [buttonText, setButtonText] = useState("Connect Your Wallet");
  const [buttonColor, setButtonColor] = useState("#Be2525");
  // const [walletAddress, SetWalletAddress] = useState("")


  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          // accountChangeHandler(result[0]);
          setButtonText("Wallet connected");
          setButtonColor("#24E500");
        });
    } else {
      alert("Please install MetaMask");
    }

    // const accountChangeHandler = (newAccount) => {
    //   setAccount(newAccount);

    // };
    // const chainChangeHandler = (chainId) => {
    //   window.location.reload();
    // };

    // window.ethereum.on("accountsChanged", accountChangeHandler);
    // window.ethereum.on("chainChanged", chainChangeHandler);
  };
  return (
    <Box pos={"fixed"} top={0} width={"100%"} zIndex={999}>
      <Flex
        bg={"rgba(#272944,0.7)"}
        backdropFilter={"blur(7px)"}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/about">
            <Box
              as={"button"}
              position={"relative"}
              justify={"center"}
              align={"center"}>
              <HamburgerIcon w={10} h={8} />
            </Box>
          </Link>

          <Box
            as={"button"}
            position={"relative"}
            justify={"center"}
            align={"center"}>
            <Link href="/">
              <Text
                pl={"10px"}
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontWeight={600}
                fontSize={"28px"}
                // textShadow={"0 0 0.30em #1da9cc"}
                color={"#F7FF58"}>
                0xchips
              </Text>
            </Link>
          </Box>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={20}
            align={"center"}></Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={3}>
          <Box
            as="button"
            height="44px"
            width={"200px"}
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
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
            width={"240px"}
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
            borderRadius="20px"
            fontSize="20px"
            fontWeight="semibold"
            bg={buttonColor}
            _hover={{ bg: "white" }}
            _active={{
              bg: { buttonColor },
              transform: "scale(0.98)",
            }}
            onClick={connectWalletHandler}>
            {buttonText}
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

/* XXX DesktopItems*/

const NAV_ITEMS = [
  {
    label: "About Us",
    href: "#",
  },
];
