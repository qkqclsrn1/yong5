import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";

export default function InfoTabs() {
  return (
    <Tabs variant="soft-rounded, enclosed" colorScheme="green" isFitted>
      <TabList mb="1em">
        <Tab
          h="50px"
          fontSize="22px"
          _selected={{ color: "black", bg: "#F7FF58" }}
        >
          Introduction
        </Tab>
        <Tab
          h="50px"
          fontSize="22px"
          _selected={{ color: "black", bg: "#F7FF58" }}
        >
          NFT
        </Tab>
        <Tab
          h="50px"
          fontSize="22px"
          _selected={{ color: "black", bg: "#F7FF58" }}
        >
          Forum
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Introduction</p>
        </TabPanel>
        <TabPanel>
          <p>NFT</p>
        </TabPanel>
        <TabPanel>
          <Forum />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

const Forum = () => {
  <Flex w="100%" h="32px" align="center" justify="center">
    <Menu>
      <MenuButton as={"Button"} colorScheme="#F7FF58">
        Forum
      </MenuButton>
      <MenuList>
        <MenuItem>Free Forum</MenuItem>
        <MenuItem>Tip&Knowhow</MenuItem>
        <MenuItem>Review</MenuItem>
        <MenuItem>Searching Party</MenuItem>
      </MenuList>
    </Menu>
  </Flex>;
};
