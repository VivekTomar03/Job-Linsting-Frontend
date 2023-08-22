
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const store = useSelector((state) => state.userAuthReducer);
  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <Box position={"fixed"} w={"full"} zIndex={99} top={0}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontWeight={"bold"}
            color={useColorModeValue("#00A5EC", "white")}
            _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
          >
            <Link to={"/"}> {"<Match Your Role>"}</Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
      {store.typeofuser === "user" ? (
  <Link to={store.name ? "/userdashboard" : "/login"}>
    <Button
      // isDisabled={store.name}
      textColor={"#00A5EC"}
      fontSize={"sm"}
      fontWeight={"bold"}
      colorScheme="#00A5EC"
      variant="outline"
    >
      {store.name ? store.name : "Sign In"}
    </Button>
  </Link>
) : (
  <Link to={store.name ? "#" : "/login"}>
    <Button
      // isDisabled={store.name}
      textColor={"#00A5EC"}
      fontSize={"sm"}
      fontWeight={"bold"}
      colorScheme="#00A5EC"
      variant="outline"
    >
      {store.name ? store.name : "Sign In"}
    </Button>
  </Link>
)}
          {store.name ? (
            <Button
              leftIcon={<CheckCircleIcon color="green.400" />}
              colorScheme="teal"
              variant="outline"
              size="md"
              onClick={handleLogout}
            >
              <Flex alignItems="center">
                <Text mr={1}>Logout</Text>
                <Box w="4px" h="4px" bg="green.400" borderRadius="full" />
              </Flex>
            </Button>
          ) : (
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#00A5EC"}
              _hover={{
                bg: "#00A5EC",
              }}
            >
              <Link to={"/signup"}>Sign Up</Link>
            </Button>
          )}
          <Tooltip
            label={
              store.name
                ? "Post Job Now"
                : "Register Your ORG. For Hire Candidate"
            }
            aria-label="A tooltip"
          >
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#00A5EC"}
              href={"#"}
              _hover={{
                bg: "#00A5EC",
              }}
              isDisabled={store.typeofuser == "user"}
            >
              <Link to={store.typeofuser == "user" ? "#" : "/postjob"}>
                Hire Talent
              </Link>
            </Button>
          </Tooltip>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as="a"
                p={2}
                to={navItem.label=="Jobs"?"/job":navItem.label=="Chat 🤖"?"/chatbot":"#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
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
  // console.log(label, href, subLabel)
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#EAFCFF", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#00A5EC" }}
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
          <Icon color={"#00A5EC"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const store = useSelector((state) => state.userAuthReducer);
  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      {store.name ? (
        <Button
          leftIcon={<CheckCircleIcon color="green.400" />}
          colorScheme="teal"
          variant="outline"
          size="md"
          onClick={handleLogout}
        >
          <Flex alignItems="center">
            <Text mr={1}>Logout</Text>
            <Box w="4px" h="4px" bg="green.400" borderRadius="full" />
          </Flex>
        </Button>
      ) : (
        <Button
          display={{ base: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#00A5EC"}
          href={"#"}
          _hover={{
            bg: "#00A5EC",
          }}
          m={2}
        >
          <Link to={"/signup"}>Sign Up</Link>
        </Button>
      )}
      <Tooltip
        label={
          store.name ? "Post Job Now" : "Register Your ORG. For Hire Candidate"
        }
        aria-label="A tooltip"
      >
        <Button
          as={"a"}
          display={{ base: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#00A5EC"}
          href={"#"}
          _hover={{
            bg: "#00A5EC",
          }}
          isDisabled={store.typeofuser == "user"}
          m={2}
        >
          <Link to={"/postjob"}>Hire Talent</Link>
        </Button>
      </Tooltip>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link
        py={2}
        
       to={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Link>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link  key={child.label} py={2}to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Internship",
    children: [
      {
        label: "Front End Development",
        subLabel: "Work from home",
        subLabel: "Work from office",
        href: "#",
      },
      {
        label: "Backend Development",
        subLabel: "Work from home",
        subLabel: "Work from office",
        href: "#",
      },
    ],
  },
  {
    label: "Jobs",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "/job",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Courses",
    subLabel: "Full Stack Courses",
    subLabel: "Data Analytics",

    href: "#",
  },
  {
    label: "Chat 🤖",
    subLabel: "Full Stack Courses",

    href: "#",
  },
];
