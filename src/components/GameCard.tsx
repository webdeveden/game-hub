import { Card, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}
// Define the props for the GameCard component here
function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Heading fontSize={"2xl"}>{game.name}</Heading>
    </Card>
  );
}

export default GameCard;
