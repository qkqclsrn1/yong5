import {
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import OtherdeedForOthersideAbout1 from "../../asset/Otherdeed_for_Otherside_about_1.png";
import OtherdeedForOthersideAbout2 from "../../asset/Otherdeed_for_Otherside_about_2.png";
import OtherdeedForOthersideAbout3 from "../../asset/Otherdeed_for_Otherside_about_3.png";

function Introduction() {
  return (
    <Flex h={"100vh"} mx={300} mt={30} justify={"center"}>
      <SimpleGrid columns={2} spacing={10}>
        <Stack spacing={4}>
          <Heading fontSize={50}> A STRANGE NEW WORLD </Heading>
          <Text fontSize={20}>
            We set out to build the Otherside with one thing in mind: the
            metaverse should be anything but boring. The world should be
            dynamic, steeped in narrative, and your actions should hold
            consequence. Step into the Otherside, where the normal rules do not
            apply. Where you end up is up to chance. Where you go is up to you.
            \n The Otherside is part galaxy and part archipelago, with islands
            extending from the Biogenic Swamp at the center and roiling outwards
            to the Infinite Expanse. There are five sediments that lands are
            built upon: Biogenic Swamp, Chemical Goo, Rainbow Atmos, Cosmic
            Dream, and Infinite Expanse. Your Otherdeed is the key to a unique
            blend of environment, sediment, and treasures — some with resources,
            some home to powerful artifacts. And on a very few, a Koda roams.
          </Text>
        </Stack>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={OtherdeedForOthersideAbout1}
          objectFit={"cover"}
        />
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={OtherdeedForOthersideAbout2}
          objectFit={"cover"}
        />
        <Stack spacing={4}>
          <Heading fontSize={50}> VISITORS FROM AFAR </Heading>
          <Text fontSize={20}>
            Meet the Kodas, the primal beings that have ushered us into the
            Otherside. We don’t know why they’ve brought us here, or what their
            affinity to this land is. If you are lucky enough to meet a Koda,
            tread cautiously. Koda 1 Koda 2 Every piece of land in the Otherside
            nurtures up to four replenishing resources that you will be able to
            harvest and utilize. Anima, Ore, Shard, and Root. Some are rare,
            some less so. These are the raw materials you will use to shape this
            world.
          </Text>
        </Stack>
        <Stack spacing={4}>
          <Heading fontSize={50}> TREASURES AND TOOLS </Heading>
          <Text fontSize={20}>
            Scattered throughout the lands of Otherside are rare objects, some
            of which cannot be crafted by any other means. If you find an
            artifact, know that it may hold secrets to this world as it expands.
            Every Otherdeed is a dynamic NFT, built as a collection of all of
            its elements, from resources to Kodas. Rather than a static
            representation of a piece of land, your Otherdeed is designed to
            evolve along with what you choose to do in the game.
          </Text>
        </Stack>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={OtherdeedForOthersideAbout3}
          objectFit={"cover"}
        />
      </SimpleGrid>
    </Flex>
  );
}

export default Introduction;
