import { VStack, StackDivider, Box } from "@chakra-ui/react";

function ForumNav() {
  return (
    <Box
      w="30%"
      h="100%"
      ml={100}
      mt={200}
      borderRight={1}
      borderRightWidth={5}
      borderLeftColor="white"
      pos={"sticky"}
      top={100}
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        w={300}
        h={275}
        textAlign="center"
        border="4px"
        borderColor="white"
        bgColor="#F7FF58"
        rounded="md"
      >
        <Box h="40px" textColor="black" fontSize={30}>
          Free Forum
        </Box>
        <Box h="40px" textColor="black" fontSize={30}>
          Tip & Knowhow
        </Box>
        <Box h="40px" textColor="black" fontSize={30}>
          Review
        </Box>
        <Box h="40px" textColor="black" fontSize={30}>
          Searching Party
        </Box>
      </VStack>
    </Box>
  );
}

export default ForumNav;
