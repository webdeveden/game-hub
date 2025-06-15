import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  // color of the badge depending in the score
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
}

export default CriticScore;
