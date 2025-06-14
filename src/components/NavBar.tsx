import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    // <HStack> is a horizontal stack component from Chakra UI
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      {/* <Text>Nav bar</Text> */}
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
