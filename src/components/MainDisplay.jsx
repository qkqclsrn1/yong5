//import Image from 'next/image';
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import displayItems from "../mock/data";
import React, { useEffect, useState } from "react";
import { Heading, Stack, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch, FaWordpress } from "react-icons/fa";

import "@fontsource/iceberg";

import eth from "../asset/eth.png";

export default function MainDisplay() {

  return (
      <SimpleGrid
        columns={4}
        spacing={4}
        justify={"center"}
        align={"center"}
        my={"60px"}
      >
        {displayItems.map((games) => (
          <GameCard games={games} />
        ))}
</SimpleGrid>
  );
}
