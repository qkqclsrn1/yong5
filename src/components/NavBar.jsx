import {
  Box,
  Flex,
  Text,

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
        bg={"rgba(#272944,0.7)"}
        backdropFilter={"blur(7px)"}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        align={"center"}
      >
        {/* <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        /> */}

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            pl={"20px"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontWeight={600}
            fontSize={"28px"}
            // textShadow={"0 0 0.30em #1da9cc"}
            // color={"#320D6D"}
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
          <Box
            as="button"
            height="32px"
            width={"180px"}
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            px="8px"
            borderRadius="20px"
            fontSize="18px"
            fontWeight="semibold"
            bg="gray.700"
            // color="black"
            _hover={{ bg: "black" }}
            _active={{
              bg: "#0A090C",
              transform: "scale(0.98)",
            }}
          >
            List Your Game
          </Box>

          <Box
            as="button"
            borderRadius="50%"
            bg="gray.700"
            px={2}
            h={"36px"}
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

/* XXX DesktopItems*/

const NAV_ITEMS = [
  {
    // label: "About Us",
    // href: "#",
  },
];
