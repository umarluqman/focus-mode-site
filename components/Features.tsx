import { Box, Grid, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  Coffee,
  Globe,
  Zap,
  ToggleRight,
  Shield,
  Moon,
} from "@emotion-icons/feather";

const Features = () => {
  return (
    <>
      <Flex backgroundColor="main.600" py={16} w="full" justify="center" px={8}>
        <Box maxWidth="72rem">
          {/* <Text fontSize="2xl" color="white" mb={6}>
            Details we're sweating
          </Text> */}
          <SimpleGrid columns={[1, 1, 2]} spacing={12}>
            <Grid
              alignItems="center"
              gridTemplateColumns={{ base: "2.5rem 1fr", md: "3.5rem 1fr" }}
              gap={8}
            >
              <Zap size={48} color="white" strokeWidth={1.6} />
              <Box>
                <Text fontSize="lg" color="white" mb={4}>
                  Stay focused for hours longer
                </Text>
                <Text color="#C8F2FF">
                  Whether you're trying to focus on work, school, reading, or
                  studying - get more things done in a shorter time.
                </Text>
              </Box>
            </Grid>
            <Grid
              alignItems="center"
              gridTemplateColumns={{ base: "2.5rem 1fr", md: "3.5rem 1fr" }}
              gap={8}
            >
              <Coffee size={48} color="white" strokeWidth={1.6} />

              <Box>
                <Text fontSize="lg" color="white" mb={4}>
                  Take a break when you need it
                </Text>
                <Text color="#C8F2FF">
                  Our extension let you take a break and resume whenever you
                  want without forcing you to be focused.
                </Text>
              </Box>
            </Grid>
            <Grid
              alignItems="center"
              gridTemplateColumns={{ base: "2.5rem 1fr", md: "3.5rem 1fr" }}
              gap={8}
            >
              <Globe size={48} color="white" strokeWidth={1.4} />

              <Box>
                <Text fontSize="lg" color="white" mb={4}>
                  Works on any websites
                </Text>
                <Text color="#C8F2FF">
                  Use our predefined distracting website links or make your own
                  list of any websites you want to block.
                </Text>
              </Box>
            </Grid>
            <Grid
              alignItems="center"
              gridTemplateColumns={{ base: "2.5rem 1fr", md: "3.5rem 1fr" }}
              gap={8}
            >
              <ToggleRight size={48} color="white" strokeWidth={1.4} />

              <Box>
                <Text fontSize="lg" color="white" mb={4}>
                  Toggle on and off easily
                </Text>
                <Text color="#C8F2FF">
                  Turn on and off focus mode by simply toggling the switch
                  without going deep into the settings.
                </Text>
              </Box>
            </Grid>
            <Grid
              alignItems="center"
              gridTemplateColumns={{ base: "2.5rem 1fr", md: "3.5rem 1fr" }}
              gap={8}
            >
              <Shield size={48} color="white" strokeWidth={1.4} />

              <Box>
                <Text fontSize="lg" color="white" mb={4}>
                  Privacy-first
                </Text>
                <Text color="#C8F2FF">
                  Your history and browser data is stored in your own local
                  computer. In other words, your data is safe.
                </Text>
              </Box>
            </Grid>
            <Grid
              alignItems="center"
              gridTemplateColumns={{ base: "2.5rem 1fr", md: "3.5rem 1fr" }}
              gap={8}
            >
              <Moon size={48} color="white" strokeWidth={1.4} />

              <Box>
                <Text fontSize="lg" color="white" mb={4}>
                  Dark mode
                </Text>
                <Text color="#C8F2FF">
                  {`It's ${new Date().getFullYear()} and we are still on the dark mode hype train. At least for us 😉 `}
                </Text>
              </Box>
            </Grid>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default Features;
