import React from "react";
import {
  Box,
  Skeleton,
} from "@chakra-ui/react";

const SkeletonJobPage = () => {
  return (
    <Box mt={20} p={5}>
      <Box
        className="banner"
        bgColor={"#0073CC"}
        p={5}
        borderRadius="lg"
        boxShadow="md"
        color="white"
      >
        <Skeleton height="24px" width="60%" mb={2} />
        <Skeleton height="16px" width="40%" />
      </Box>

      <Box mt={10} display="flex" justifyContent="space-between">
        <Box w="20%">
          <Skeleton height="300px" />
        </Box>
        <Box overflowX="auto" overflowY="hidden" w="78%">
          {[1, 2, 3].map((_, index) => (
            <Box
              key={index}
              borderRadius="lg"
              boxShadow="md"
              p={5}
              mb={6}
              bg="white"
            >
              <Skeleton height="24px" width="80%" mb={2} />
              <Skeleton height="16px" width="60%" mb={2} />
              <Skeleton height="16px" width="40%" mb={2} />
              <Skeleton height="16px" width="20%" mb={2} />
              <Skeleton height="16px" width="40%" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SkeletonJobPage;
