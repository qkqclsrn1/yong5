import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

import AxieInfinityImage from "../../asset/Axie-Infinity.jpg";

export default function GameDetails() {
  return (

    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "500px" }}
        src={AxieInfinityImage}
        alt="Axie Infinity"
      />
      <Stack>
        <CardBody>
          <Heading size="lg" color="yellow">
            Axie Infinity Universe
          </Heading>

          <Text py="3" fontSize="25px" color="white">
            Axie Infinity is a universe filled with fierce, collectible
            creatures called Axies. Axie features a player-owned economy where
            players have complete ownership of their digital assets and can buy,
            sell, and trade them just like physical trading cards and
            collectibles.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue" sm="100px">
            Axie Infinity
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
