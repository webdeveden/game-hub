import { HStack, Skeleton, SkeletonText, Box } from "@chakra-ui/react";

function HorizontalCardSkeleton() {
  return (
    <HStack spacing="4" align="start" padding={2}>
      {/* Simulated small image (like avatar or thumbnail) */}
      <Skeleton boxSize="50px" borderRadius="md" />

      {/* Simulated text */}
      <Box flex="1">
        <SkeletonText noOfLines={2} spacing="2" />
      </Box>
    </HStack>
  );
}

export default HorizontalCardSkeleton;
