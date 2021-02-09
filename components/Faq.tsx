import { Box, Grid, Flex, Text, chakra } from "@chakra-ui/react";
import React from "react";

const Faq = () => {
  return (
    <>
      <Flex
        backgroundColor="main.accent-900"
        py={16}
        w="full"
        justify="center"
        px={8}
      >
        <Box maxWidth={950}>
          <Text fontSize="2xl" color="white" mb={6}>
            Frequently asked questions
          </Text>
          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns={{ base: "1fr", md: "20rem 1fr" }} gap={8}>
              <Text fontSize="lg" color="white" pb={3}>
                I have seen quite a few extensions that help people to focus,
                what sets this one apart?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                <chakra.span fontWeight={"600"} color="white">
                  FocusMode
                </chakra.span>{" "}
                provides a simple solution for a seemingly complicated problem
                compare to its alternatives. It reminds people from mindlessly
                browsing with a simple toggle button.
              </Text>
            </Grid>
          </Box>

          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns={{ base: "1fr", md: "20rem 1fr" }} gap={8}>
              <Text fontSize="lg" color="white" pb={3}>
                What browser support does this extension support?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                Only Google Chrome for now, Firefox support is high up on our
                to-do list.
              </Text>
            </Grid>
          </Box>
          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns={{ base: "1fr", md: "20rem 1fr" }} gap={8}>
              <Text fontSize="lg" color="white" pb={3}>
                Is there any website that Focus Mode does not block?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                Nope, change the website list you want to block easily however
                you like.
              </Text>
            </Grid>
          </Box>
          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns={{ base: "1fr", md: "20rem 1fr" }} gap={8}>
              <Text fontSize="lg" color="white" pb={3}>
                What if I want to take a break?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                You can just take a 5 minutes break whenver you want or turn off
                the focus mode for good.
              </Text>
            </Grid>
          </Box>
          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns={{ base: "1fr", md: "20rem 1fr" }} gap={8}>
              <Text fontSize="lg" color="white" pb={3}>
                How is this going to be distributed after I purchased?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                After purchased, you will get an email with a link, just
                download and open it. It will be installed automatically.
              </Text>
            </Grid>
          </Box>
          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns={{ base: "1fr", md: "20rem 1fr" }} gap={8}>
              <Text fontSize="lg" color="white" pb={3}>
                If I buy now, do I get updates?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                It's a lifetime deal, purchase once and upgrade forever.
              </Text>
            </Grid>
          </Box>
        </Box>
      </Flex>
      ;
    </>
  );
};

export default Faq;
