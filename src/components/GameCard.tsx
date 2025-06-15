import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
}
// Define the props for the GameCard component here
function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map(
              (platfrom) => platfrom.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
