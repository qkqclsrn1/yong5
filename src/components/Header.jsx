import React, { useEffect, useState } from "react";
import { Heading, Stack, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch, FaWordpress } from "react-icons/fa";

import "@fontsource/iceberg";
import displayItems from "../mock/data";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = async() => {
    window.location.href = "/search"
  };


  // const searchGames = (e) => {
  //   e.preventDefault();
  //   setSearchTerm(e.target.value);
  // };

  // if (searchTerm.length > 0) {
  //   displayItems.filter((game) => {
  //     return game.title.match(searchTerm);
  //   });
  // }

  return (
    <Stack h={"300px"} justify={"center"} align={"center"} my={10} pt={10}>
      <Heading
        as="h1"
        // fontFamily="Iceberg"
        size="2xl"
        // color={"#F7FF58"}
      >
        Play, Trade and Connect
      </Heading>
      <Flex pt={5}>
        <Input
          display={"flex"}
          justify={"center"}
          align={"center"}
          w={"800px"}
          h={"60px"}
          placeholder="Search your game"
          size={"lg"}
          variant={"filled"}
          focusBorderColor={"#E9AFA3"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          type={"button"}
          colorScheme="black"
          aria-label="Search database"
          icon={<FaSearch />}
          size="lg"
          h={"60px"}
          onClick={() =>onSubmit()}
        />
      </Flex>
    </Stack>
  );
};

export default Header;
