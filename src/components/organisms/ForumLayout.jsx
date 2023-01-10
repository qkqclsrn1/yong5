import React from "react";
import { Flex } from "@chakra-ui/react";

import BulletinBoard from "./BulletinBoard";
import ForumNav from "./ForumNav";
import Tabs from "../templates/Tabs";

function ForumLayout() {
  return (
    
      <Flex mx={300} mt={100}>
        <ForumNav />
        <BulletinBoard />
      </Flex>
    
  );
}

export default ForumLayout;
