import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Text,
  useTheme,
  Img,
} from "@chakra-ui/react";

import React from "react";

const CallToAction = () => {
  const theme = useTheme();
  return (
    <Box
      px={{ base: 4, md: 24, lg: 8 }}
      py={{ base: 14 }}
      // mx="auto"
      w="full"
      // maxW={{ sm: "xl", md: "full", lg: "1024px" }}
      bg="dark.900"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        maxW="1024px"
        overflow="hidden"
        bg="inherit"
        border="full"
        mx={{ sm: "auto" }}
        // h="300px"
      >
        <Box pos="relative" w={{ lg: "50%" }}>
          {/* <Flex bg="dark.900" justify="center" w="full" align="center" h="full">
            <Flex
              justify="center"
              align="center"
              p={"44px"}
              borderRadius="full"
              bg={"dark.200"}
              mb={3}
            >
              <Circle
                size={140}
                color={theme.colors.main[200]}
                strokeWidth={2}
              />
            </Flex>
          </Flex>
          <chakra.svg
            pos="absolute"
            top={0}
            right={0}
            h="full"
            color="dark.900"
            display={{ base: "none", lg: "inline-block" }}
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </chakra.svg> */}
          <Img borderRadius={4} src="popup-dark.webp"></Img>
        </Box>

        <Flex
          direction="column"
          justify="center"
          bg="dark.900"
          p={{ base: 8, lg: 16 }}
          pl={{ lg: 10 }}
          w={{ lg: "50%" }}
        >
          <Heading
            as="h5"
            mb={3}
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight={1}
            color="white"
          >
            Get FocusMode
          </Heading>
          <Text mb={5} color="gray.800">
            <chakra.span fontWeight="bold" color="white">
              Turn your productivity to the next level.
            </chakra.span>
          </Text>
          <Flex placeItems="center">
            <Button
              bg="main.600"
              color="white"
              as="a"
              target="_blank"
              href="https://chrome.google.com/webstore/detail/focus-mode/ollmdedpknmlcdmpehclmgbogpifahdc"
              rel="noopener noreferrer"
              px={4}
              _hover={{ background: theme.colors.main["accent-600"] }}
              _active={{ background: theme.colors.main["accent-700"] }}
              alignSelf="flex-start"
              mb={2}
              fontSize="md"
            >
              Get it now for free
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CallToAction;
