import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
  useMediaQuery,
  useTheme,
  VStack,
  ButtonProps,
  Button,
  chakra,
  useDisclosure,
  Image,
  background,
} from "@chakra-ui/react";
import { Circle } from "@emotion-icons/feather";
import {
  animate,
  isValidMotionProp,
  motion,
  MotionProps,
  useCycle,
} from "framer-motion";
import React, { useEffect } from "react";

import Faq from "../components/Faq";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import ModalVideo from "react-modal-video";

export type MotionButtonProps = Omit<ButtonProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

const MotionButton = motion.custom(Button);

const MotionImage = motion.custom(Image);

const Index = () => {
  const theme = useTheme();

  const { onToggle, isOpen } = useDisclosure();

  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  useEffect(() => {
    cycleAnimation();
  }, []);

  return (
    <Box>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="aBBj_c__JSE"
        onClose={onToggle}
      />
      <Flex
        w="full"
        background="transparent linear-gradient(180deg, #FFFFFF 0%, #F4F6F9 100%)"
        justifyContent="center"
        px={8}
      >
        <Box w="full" maxWidth="80rem" pr={undefined}>
          <HStack pt={12} pb={6} align="center" spacing={4}>
            <Flex
              justify="center"
              align="center"
              p={"9px"}
              borderRadius="full"
              bg={"main.200"}
            >
              <Circle
                size={24}
                color={theme.colors.main[700]}
                strokeWidth={2}
              />
            </Flex>
            <Heading as="h1" fontSize="2xl">
              Focus Mode
            </Heading>
          </HStack>
          <Flex
            spacing={20}
            align="flex-start"
            justify="space-between"
            w="full"
            maxW="full"
            mb={12}
            mt={6}
            flexWrap="wrap"
          >
            <VStack
              justify="flex-start"
              w="480px"
              textAlign="left"
              mt={30}
              mb={{ base: 32, md: 72 }}
            >
              <Heading
                as="h2"
                fontSize="4xl"
                mb={6}
                alignSelf="flex-start"
                fontWeight={"800"}
              >
                Stay focused like humans, not robots.
              </Heading>
              <Text fontSize="lg" mb={8} color="gray.700" lineHeight="tall">
                Only access distracting websites with an informed decision,{" "}
                <chakra.span color="main.900" fontWeight={"500"}>
                  no more wasting time without you realised.
                </chakra.span>{" "}
                {/* Instead of forcing you to stay focused, this extension gives you
                options to take a break or turn off focus mode easily. */}
              </Text>
              <HStack spacing={4} alignSelf="flex-start">
                <MotionButton
                  bg="main.600"
                  color="white"
                  px={4}
                  _hover={{ background: theme.colors.main["accent-600"] }}
                  _active={{ background: theme.colors.main["accent-700"] }}
                  alignSelf="flex-start"
                  mb={2}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                >
                  Pre-order now $5
                </MotionButton>
                <MotionButton
                  bg="main.200"
                  color="main.900"
                  px={4}
                  _hover={{ background: theme.colors.main[200] }}
                  alignSelf="flex-start"
                  mb={2}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={onToggle}
                >
                  Watch Demo
                </MotionButton>
              </HStack>
              <Text fontSize="smaller" alignSelf="flex-start" color="gray.600">
                {" "}
                Only available for Google Chrome.
              </Text>
            </VStack>

            <Flex
              bg="transparent"
              justify="center"
              w="full"
              maxW={640}
              h={400}
              pos="relative"
            >
              <MotionImage
                top={{ base: -20 }}
                right={{ base: 0 }}
                // mt={{ base: 0, md: 0 }}
                // mr={{ base: 0, md: 0 }}
                src="/focus-mode-break.png"
                alt=""
                objectFit="contain"
                pos={"absolute"}
                h={{ base: "auto", sm: 450, md: 500 }}
                boxShadow="0 20px 25px -5px rgb(0 0 0 / 10%), 0 -10px 10px -5px rgb(0 0 0 / 4%)"
                // variants={BannerVariants}
                animate={animation}
              />
              <MotionImage
                left={{ base: 0 }}
                top={{ base: 10 }}
                // ml={{ base: 0, md: 0 }}
                src="/focus-mode-on.png"
                alt=""
                objectFit="contain"
                pos={"absolute"}
                h={{ base: "auto", sm: 450, md: 500 }}
                boxShadow="0 20px 25px -5px rgb(0 0 0 / 10%), 0 -10px 10px -5px rgb(0 0 0 / 4%)"
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box position="absolute" w="full">
        <Features />
        {/* <CallToAction /> */}
        <Faq />
      </Box>
    </Box>
  );
};

export default Index;
