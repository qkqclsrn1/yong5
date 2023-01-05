import { Text, Flex, Box, VStack, Tabs, TabList, Tab, Image, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { HiOutlineStar } from "react-icons/hi";



export default function GameTabs({imgsrc, name}) {
  return (
    <>
      <Flex mx={300}>
        <Box border="4px" borderColor="white" w="180px" h="180px" mr={20}>
          <Image src={imgsrc} w="100%" h="100%"></Image>
        </Box>
        <Text as="b" fontSize="5xl">
          {name}
        </Text>
        <Icon
          as={HiOutlineStar}
          boxSize="45px"
          justifyContent="center"
          alignItems="center"
          ml="20px"
          mt="17px"
        />
      </Flex>
      <Flex mx={300} mt={40}>
        <Tabs h={100} variant="soft-rounded" colorScheme="green">
          <TabList mb="3em">
            <Link to-="/">
              <Tab
                h="60px"
                fontSize="30px"
                _selected={{ color: "black", bg: "#F7FF58" }}
              >
                ABOUT THIS GAME
              </Tab>
            </Link>
            <Tab
              h="60px"
              fontSize="30px"
              _selected={{ color: "black", bg: "#F7FF58" }}
            >
              NFT
            </Tab>
            <Link to-="/forum">
              <Tab
                h="60px"
                fontSize="30px"
                _selected={{ color: "black", bg: "#F7FF58" }}
              >
                FORUM
              </Tab>
            </Link>
          </TabList>
        </Tabs>
      </Flex>
    </>
  );
}
