import { Box, Container, Text, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box pos={"fixed"} bottom={0} width={"100%"} color={"white"}>
      <Flex bg={"rgba(0,0,0,0.7)"} minH={"50px"}>
        <Container py={6} direction={"row"} justify={"center"} align={"center"}>
          <Text fontSize={18}>© 2022 0xchips. All rights reserved</Text>
        </Container>
      </Flex>
    </Box>
  );
}
