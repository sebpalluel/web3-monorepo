import { Box } from "@chakra-ui/react";

import CTASection from "@web/lib/components/samples/CTASection";
import SomeImage from "@web/lib/components/samples/SomeImage";
import SomeText from "@web/lib/components/samples/SomeText";

const Home = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <SomeImage />
      <Box>
        <SomeText />
        <CTASection />
      </Box>
    </Box>
  );
};

export default Home;
