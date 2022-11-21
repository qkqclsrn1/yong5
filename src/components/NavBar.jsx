import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Kaikas from "../asset/kaikas.png";

export default function NavBar() {
  return (
    <Box pos={"fixed"} top={0} width={"100%"} zIndex={999}>
      <Flex
        bg={"rgba(0,0,0,0.7)"}
        backdropFilter={"blur(7px)"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontWeight={800}
            fontSize={"33px"}
            textShadow={"0 0 0.30em #1da9cc"}
            color={"#afe80c"}
          >
            0xchips
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={20} align={"center"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={3}
        >
          <Button
            as={"a"}
            width={"210px"}
            height={"32px"}
            fontSize={"18px"}
            fontWeight={700}
            variant={"link"}
            href={"#"}
            bg={"#C0C0C0"}
            color={"black"}
            justify={"center"}
            align={"center"}
          >
            Submit Your Game
          </Button>

          <Box
            as="button"
            borderRadius="md"
            bg="white"
            px={2}
            h={"32px"}
            justify={"center"}
            align={"center"}
          >
            <Image boxSize="20px" objectFit="cover" src={Kaikas} href={"#"} />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

const DesktopNav = ({ currentVisibleIndex, onClickNavLink }) => {
  const linkColor = "white";
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = "rgba(94, 92, 93, 0.5)";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                onClick={() => onClickNavLink(index)}
                fontSize={"lg"}
                fontWeight={500}
                color={
                  currentVisibleIndex === index ? "#afe80c" : { linkColor }
                }
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "4f4f50" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#FFF01F" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#FFF158"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const NAV_ITEMS = [
  {
    label: "Games",
  },
  {
    label: "NFTs",
    children: [
      {
        label: "What you can do with the service",
        href: "#",
      },
    ],
  },

  {
    label: "About Us",
    href: "#",
  },
];
