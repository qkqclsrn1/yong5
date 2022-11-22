//import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";

import Axie from "../asset/Axie-Infinity.jpg";
import decentraland from "../asset/decentraland.jpg";
import sandbox from "../asset/sandbox.jpeg";

export default function MainDisplay() {
  return (
    //가로로 카드를 배치 하기 위햇 Flex를 쓰면 된다.
    <Flex>
      {DISPLAY_ITEMS.map((DisplayItem) => (
        <Stack
          key={DisplayItem.label}
          mt={"100px"}
          direction={"row"}
          mx={"20px"}
        >
          <Center py={6}>
            <Box
              maxW={"460px"}
              w={"full"}
              bg={"gray.900"}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box h={"220px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
                <Image src={DisplayItem.image} objectFit={"cover"} />
              </Box>
              <Stack direction={"column"}>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={300}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  The Latest Updates
                </Text>
                <Heading color={"white"} fontSize={"2xl"} fontFamily={"body"}>
                  {DisplayItem.title}
                </Heading>
                <Text color={"gray.500"}>{DisplayItem.contents}</Text>
              </Stack>
              <Stack mt={4} direction={"row"} spacing={4} justify={"center"}>
                <Button colorScheme="facebook" size="md">
                  Learn More
                </Button>
              </Stack>
            </Box>
          </Center>
        </Stack>
      ))}
    </Flex>
  );
}

const DISPLAY_ITEMS = [
  {
    label: "1",
    title: "Axie Infinity",
    contents:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ma aliquyam erat, sed diam voluptua. At vero eos et accusam justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, conse",
    image:  Axie ,
  },

  {
    label: "2",
    title: "Decentraland",
    contents:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ma aliquyam erat, sed diam voluptua. At vero eos et accusam justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, conse",
    image:  decentraland ,
  },
  {
    label: "3",
    title: "SandBox",
    contents:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ma aliquyam erat, sed diam voluptua. At vero eos et accusam justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, conse",
    image:  sandbox ,
  },
];
