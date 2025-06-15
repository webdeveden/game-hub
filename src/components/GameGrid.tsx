import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();
  //   if (error) return <Text>{error}</Text>;
  //   if (games.length === 0) return <Text>Loading...</Text>;
  return (
    <>
      {error && <Text>Error: {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
