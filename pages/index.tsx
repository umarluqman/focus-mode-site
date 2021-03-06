import {
  Box,
  Button,
  ButtonProps,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  useTheme,
  VStack,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Circle, CheckCircle } from "@emotion-icons/feather";
import { motion, MotionProps, useCycle } from "framer-motion";
import React, { useEffect } from "react";
import ModalVideo from "react-modal-video";
import Faq from "../components/Faq";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";

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

  const onMainClick = () => {};
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
            <Heading as="h1" fontSize="xl">
              Focusmode
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
              mb={{ base: 36, xl: 72 }}
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
              {/* <Text fontSize="lg" mb={8} color="gray.700" lineHeight="tall">
                Instead of forcing you to stay focused, this extension reminds
                you to get back on the flow.{" "}
                <chakra.span color="main.900" fontWeight={"500"}>
                  {" "}
                  Only access distracting websites with an informed decision.{" "}
                </chakra.span>{" "}
              </Text> */}
              <List spacing={4} mb={10}>
                <ListItem>
                  <ListIcon as={CheckCircle} color="main.900" strokeWidth={3} />
                  No more wasting time without you realized while browsing.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircle} color="main.900" strokeWidth={3} />
                  No more forcing yourself to stay focused because an app tell
                  you so.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircle} color="main.900" strokeWidth={3} />
                  No more going deep into the settings just to unblock websites.
                </ListItem>
              </List>{" "}
              <Text
                color="main.900"
                fontWeight={"500"}
                lineHeight="tall"
                alignSelf="flex-start"
              >
                Only access distracting websites with an informed decision.{" "}
              </Text>{" "}
              <Link
                mb={8}
                fontWeight={"500"}
                alignSelf="flex-start"
                isExternal
                color="gray.600"
                href="https://www.notion.so/FocusMode-changelog-62ebecd199d44b9bb29e8c17a87dc393"
              >
                View changelog <ExternalLinkIcon mx="2px" />
              </Link>
              <HStack spacing={[0, 4]} alignSelf="flex-start" flexWrap="wrap">
                <MotionButton
                  w={["full", "auto"]}
                  bg="main.600"
                  color="white"
                  px={4}
                  _hover={{ background: theme.colors.main["accent-600"] }}
                  _active={{ background: theme.colors.main["accent-700"] }}
                  alignSelf="flex-start"
                  mb={2}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={onToggle}
                >
                  See how it works in 42s
                </MotionButton>
                <MotionButton
                  as="a"
                  bg="main.200"
                  color="main.900"
                  target="_blank"
                  href="https://chrome.google.com/webstore/detail/focus-mode/ollmdedpknmlcdmpehclmgbogpifahdc"
                  rel="noopener noreferrer"
                  px={4}
                  _hover={{ background: theme.colors.main[200] }}
                  alignSelf="flex-start"
                  mb={[3, 2]}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  w={["full", "auto"]}
                  fontSize="md"
                >
                  Get it now for free
                </MotionButton>
              </HStack>
              <Text
                fontSize="smaller"
                alignSelf="flex-start"
                color="gray.600"
                mb={8}
              >
                {" "}
                Only available for Google Chrome & Brave browser
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
                top={{ base: -25, md: 0 }}
                right={{ base: 0, lg: -15 }}
                src="/focusmode-break-dark.webp"
                alt=""
                objectFit="contain"
                pos={"absolute"}
                h={{ base: "auto", sm: 500, md: 500 }}
                boxShadow="0 20px 25px -5px rgb(0 0 0 / 10%), 0 -10px 10px -5px rgb(0 0 0 / 4%)"
                animate={animation}
                onClick={onMainClick}
              />
              <MotionImage
                left={{ base: 0, lg: -15 }}
                top={{ base: 32 }}
                src="/focusmode-on-light.webp"
                alt=""
                objectFit="contain"
                pos={"absolute"}
                h={{ base: "auto", sm: 500, md: 500 }}
                boxShadow="0 20px 25px -5px rgb(0 0 0 / 10%), 0 -10px 10px -5px rgb(0 0 0 / 4%)"
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box position="absolute" w="full">
        <Features />
        <CallToAction />
        <Faq />
        <Flex bg="main.accent-900" p={4} color="white" pr={20}>
          Made by {"  "}
          <Link
            isExternal
            color="#C8F2FF"
            href="https://twitter.com/umarlqmn"
            mx={2}
          >
            Umar Luqman
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
