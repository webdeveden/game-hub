import { Card, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface GameCardProps {
  game: Game;
}
// Define the props for the GameCard component here
function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Heading fontSize={"2xl"}>{game.name}</Heading>
      <PlatformIconsList
        platforms={game.parent_platforms.map((platfrom) => platfrom.platform)}
      />
    </Card>
  );
}

export default GameCard;
