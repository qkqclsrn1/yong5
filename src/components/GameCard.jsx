import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";


const GameCard = ({games}) => {
  return (
    <Stack
      key={games.label}
      mt={"40px"}
      direction={"row"}
      //px={"40px"}
    >
      <Box
        w={"460px"}
        bg={"black"}
        boxShadow={"3xl"}
        rounded={"lg"}
        p={3}
        overflow={"hidden"}
      >
        {/* <Box h={"240px"} mb={5} pos={"relative"}> */}
        <Image
          src={games.image}
          objectFit={"fill"}
          h={"240px"}
          w={"460px"}
        />
        {/* </Box> */}

        <Stack direction={"column"} mt={5}>
          <Text
            color={"#E9AFA3"}
            textTransform={"uppercase"}
            fontWeight={300}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {games.tagline}
          </Text>
          <Heading color={"white"} fontSize={"3xl"}>
            {games.title}
          </Heading>
          {/* <Box bg={"rgba(124, 124, 124, 0.5)"} rounded={"xl"}>
                <Image src={eth} h={"30px"} w={"20px"} />
              </Box> */}

          <Box py={3} textAlign={"left"} px={4}>
            <Text color={"#C7E8F3"}>{games.contents}</Text>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default GameCard;
