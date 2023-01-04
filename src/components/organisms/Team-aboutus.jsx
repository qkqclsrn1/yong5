import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import theTeam from "../../asset/theteam.jpg";

export default function TheTeam() {
  return (
    <Flex ml={"400px"}>
      <Box position={"relative"}>
        <Container maxW={"7xl"} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={2}
              color={"gray.400"}
              justify={{ lg: "center" }}
              py={{ base: 60 }}
            >
              <Box mb={{ base: 22 }}>
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                  mb={3}
                  fontSize={"xl"}
                  color={"gray.500"}
                >
                  the Team
                </Text>
                <Heading color={"white"} mb={5} fontSize={{ base: "4xl" }}>
                  Our mission is to provide the reliable information on web3 games
                  and NFTs for the users
                </Heading>
                <Text fontSize={"xl"} color={"gray.400"}>
                  The Oxchips team allows you to find your games and NFTs and
                  get complete insights at real time.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map((stat) => (
                  <Box key={stat.title}>
                    <Text
                      fontFamily={"heading"}
                      fontSize={"3xl"}
                      color={"white"}
                      mb={3}
                    >
                      {stat.title}
                    </Text>
                    <Text fontSize={"xl"} color={"gray.400"}>
                      {stat.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
      <Image src={theTeam} objectFit={"fill"} maxW={"5xl"}/>
      
    </Flex>
  );
}

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "1000+",
    content: (
      <>
        <StatsText>Listed games and NFTs </StatsText> for detailed monitoring
        and real-time analytics
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: "100+",
    content: (
      <>
        <StatsText>Game reviews </StatsText> from the game experts to guide you
        to find most suitable games for you
      </>
    ),
  },
  {
    title: "1M+",
    content: (
      <>
        <StatsText>Users</StatsText> currently connected and are trading NFTs
        with 0xChips service
      </>
    ),
  },
];
