import {
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

const CallToAction = () => {
  const theme = useTheme();
  return (
    <Box
      px={{ base: 4, md: 24, lg: 8 }}
      py={{ base: 16, lg: 20 }}
      mx="auto"
      maxW={{ sm: "xl", md: "full", lg: "1024px" }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        maxW="1024px"
        overflow="hidden"
        bg="white"
        border="full"
        mx={{ sm: "auto" }}
        // h="300px"
      >
        <Box pos="relative" w={{ lg: "50%" }}>
          <Flex bg="white" justify="center" w="full">
            <Image
              mt={30}
              src="/focus-mode-on.png"
              alt=""
              objectFit="contain"
              w="cover"
              pos={{ lg: "absolute" }}
              h={{ base: 500 }}
              boxShadow="0 20px 25px -5px rgb(0 0 0 / 10%), 0 -10px 10px -5px rgb(0 0 0 / 4%)"
            />
          </Flex>
          <chakra.svg
            pos="absolute"
            top={0}
            right={0}
            h="full"
            color="white"
            display={{ base: "none", lg: "inline-block" }}
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </chakra.svg>
        </Box>

        <Flex
          direction="column"
          justify="center"
          bg="white"
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
          ></Heading>
          Get Focus Mode
          <Text mb={5} color="gray.800">
            <chakra.span fontWeight="bold">
              Turn your productivity to the next level.
            </chakra.span>
          </Text>
          <Flex placeItems="center">
            <Button
              bg="main.600"
              color="white"
              px={4}
              _hover={{ background: theme.colors.main["accent-600"] }}
              _active={{ background: theme.colors.main["accent-700"] }}
              alignSelf="flex-start"
              mb={2}
            >
              Pre-order now $5
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CallToAction;
