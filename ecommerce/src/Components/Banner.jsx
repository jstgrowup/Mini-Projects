import { Box, Image } from "@chakra-ui/react";

export default function Banner() {
  return (
    <>
      <Box  >
        <Image
          width={"100%"}
          h={"600px"}
          src="https://listingthemes.com/wp-content/uploads/2018/03/offer-banner.png"
          alt="amazon1"
        />
      </Box>
      {/* <Box width={"100%"}>
        <Image  width={"100%"} src="https://i.ibb.co/SwgsMp7/amazon2.jpg" alt="amazon2" />
      </Box> */}
    </>
  );
}
