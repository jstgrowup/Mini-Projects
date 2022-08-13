import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const links = [
  { path: "/", title: "HOME" },
  {
    path: "/products",
    title: "PRODUCTS",
  },
  {
    path: "/products/mens",
    title: "MENS",
  },
  {
    path: "products/womens",
    title: "WOMENS",
  },
  {
    path: "products/unisex",
    title: "UNISEX",
  },
];
export default function Navbar() {
  const activeStyle = {
    color: "red",
    textDecoration: "none",
  };
  const defaultStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
      <Box
        borderRadius={"20px 20px 0px 0px"}
        width={"100%"}
        h="80px"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgColor="#e6e6e6"
        cursor={"pointer"}
      >
        <Box>
          <Flex justify={"space-around"} align={"center"} gap={"60"}>
            {links.map((el) => (
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                key={el.path}
                to={el.path}
              >
                <Heading fontFamily="Roboto,sans-serif" as={"h3"} size={"md"}>{el.title}</Heading>
              </NavLink>
            ))}
          </Flex>
        </Box>
        <Box>
          <Flex
            gap="20"
            align="center"
            fontFamily="Roboto,sans-serif"
            fontWeight="600"
          >
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
              to={"/login"}
            >
              <Heading fontFamily="Roboto,sans-serif" as={"h3"} size={"sm"}>Login</Heading>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
              to={"/cart"}
            >
              <Heading fontFamily="Roboto,sans-serif" as={"h3"} size={"sm"}>Cart</Heading>
            </NavLink>
            <Image
              src="https://www.clipartmax.com/png/middle/118-1185597_free-shopping-cart-icon-png.png"
              alt="Cart"
              boxSize={"50px"}
              borderRadius={"20%"}
            />{" "}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
