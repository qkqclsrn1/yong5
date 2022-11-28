import React from "react";
import { Heading, Stack, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import Aldrich from "@fontsource/aldrich";

const Header = () => {
  return (
    <Stack justify={"center"} align={"center"} my={20} pt={20}>
      <Heading fontFamily={Aldrich} as="h1" size="3xl" noOfLines={1}>
        Your NFT Games
      </Heading>
      <Flex>
        <IconButton
          colorScheme="black"
          aria-label="Search database"
          icon={<FaSearch />}
          size="lg"
        />
        <Input
          display={"flex"}
          justify={"center"}
          align={"center"}
          w={"700px"}
          placeholder="Search your game"
          size={"lg"}
          variant={"filled"}
        />
      </Flex>
    </Stack>
  );
};

export default Header;
