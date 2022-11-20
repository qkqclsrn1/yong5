import React from 'react'
import {Container, Box} from "@chakra-ui/react"


const Footer = () => {
  return(
    <Container as="footer" role="contentinfo" display="flex" flexDir="column"}>
      <Box bg="tomato" w="100%" p={4} color="white" fontSize={30}>
     This is Footer
      </Box>
    </Container>
  );
}

export default Footer