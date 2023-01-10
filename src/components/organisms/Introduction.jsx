import {
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

import gameDetails from "../../mock/gamedata";

function Introduction({ label }) {
  const gameDetail = gameDetails.filter((lab) => lab.id === label)[0];
  console.log(gameDetail);

  return (
    <Flex h={"100vh"} mx={300} mt={30} justify={"center"}>
      <SimpleGrid columns={2} spacing={10}>
        <Stack spacing={4}>
          <Heading fontSize={50}> {gameDetail.head1} </Heading>
          <Text fontSize={20}>{gameDetail.content1}</Text>
        </Stack>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={gameDetail.img1}
          objectFit={"cover"}
        />
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={gameDetail.img2}
          objectFit={"cover"}
        />
        <Stack spacing={4}>
          <Heading fontSize={50}> {gameDetail.head2} </Heading>
          <Text fontSize={20}>{gameDetail.content2}</Text>
        </Stack>
        <Stack spacing={4}>
          <Heading fontSize={50}> {gameDetail.head3} </Heading>
          <Text fontSize={20}>{gameDetail.content3}</Text>
        </Stack>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={gameDetail.img3}
          objectFit={"cover"}
        />
        <div className="header"></div>
      </SimpleGrid>
    </Flex>
  );
}

export default Introduction;
