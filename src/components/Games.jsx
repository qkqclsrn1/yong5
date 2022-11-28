import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import React from "react";

const Games = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr fontSize={15}>
            <Th>Ranking</Th>
            <Th>Game</Th>
            <Th>Title</Th>
            <Th>Blockchain</Th>
            <Th>Genre</Th>
            <Th>NFT total Volume </Th>
          </Tr>
        </Thead>
        <Tbody>
            {/* {GAMES_DETAILS.map((gameDetails) => ( */}
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          {/* ))}; */}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Games;

// const GAMES_DETAILS = [
//     {
//     ranking: "1" ,
//     icon:  ,
//     title: "title",
//     blockchain: ,
//     genre: ,
//     NFT volume:  
//     }
// ]