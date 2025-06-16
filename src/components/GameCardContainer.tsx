import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
// is like define a template that can be use to style different objects
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
