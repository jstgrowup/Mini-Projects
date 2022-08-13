import { Box, Heading } from "@chakra-ui/react";

export default function Head({ heading }) {
  return (
    <>
      <Box>
        <Heading fontSize={"16px"} fontWeight="800">{heading}</Heading>
        
      </Box>
    </>
  );
}