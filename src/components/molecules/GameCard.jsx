import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";

//TODO 1: card rearrangement
//TODO 2: add star-rating system?

//games를 prop으로 내려주고, 카드 형태를 생성. 이 카드를 Game-Search에서 씁니다.
const GameCard = ({ games }) => {
  return (
    <Stack
      key={games.label}
      mt={"40px"}
      direction={"row"}
      //px={"40px"}
    >
      <Box
        as={"button"}
        w={"460px"}
        bg={"black"}
        boxShadow={"3xl"}
        rounded={"lg"}
        p={3}
        overflow={"hidden"}>
        <Link href={"/OdForOs"}>
          <Image src={games.image} objectFit={"fill"} h={"240px"} w={"460px"} />

          <Stack direction={"column"} mt={5}>
            <Text
              color={"#E9AFA3"}
              textTransform={"uppercase"}
              fontWeight={300}
              fontSize={"sm"}
              letterSpacing={1.1}>
              {games.tagline}
            </Text>
            <Heading color={"white"} fontSize={"3xl"}>
              {games.title}
            </Heading>

            <Box py={3} textAlign={"left"} px={4}>
              <Text color={"#C7E8F3"}>{games.contents}</Text>
            </Box>
          </Stack>
        </Link>
      </Box>
    </Stack>
  );
};

export default GameCard;
