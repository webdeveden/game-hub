import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    // <HStack> is a horizontal stack component from Chakra UI
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Nav bar</Text>
    </HStack>
  );
}

export default NavBar;
