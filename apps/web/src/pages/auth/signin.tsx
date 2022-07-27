import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  VStack,
  FormErrorMessage,
  Divider,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { signIn } from "next-auth/react";
import { logger } from "@web/lib/logger";
import { useRouter } from "next/router";

import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";
import FormPasswordlessEmail from "@web/lib/components/auth/form-passwordless";

export default function SimpleCard() {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen: isOpenCollapse, onToggle: onToggleCollapse } =
    useDisclosure();
  const router = useRouter();
  const [credientialsInvalid, OAuthAccountNotLinked] = useMemo(() => {
    const error = router.query.error;
    return [
      error === "CredientialsInvalid" ? "Invalid email or password" : "",
      error === "OAuthAccountNotLinked"
        ? "You tried to sign in with a provider that is not linked to an existing account.\n\
                Try with an other one or proceed with an email and password."
        : "",
    ];
  }, [router.query.error]);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  let defaultBody = {
    grant_type: "",
    username: "",
    password: "",
    scope: "",
    client_id: "",
    client_secret: "",
  };

  async function onSubmit(values: any) {
    try {
      const body = { ...defaultBody, ...values };
      // console.log(`POSTing ${JSON.stringify(body, null, 2)}`)
      let res = await signIn("credentials", {
        ...body,
        callbackUrl: router.query.callbackUrl,
        redirect: false,
      });
      logger.debug(`signing:onsubmit:res`, res);
      if (res?.ok) router.push(res.url || "/");
      else router.push({ query: { error: "CredientialsInvalid" } });
    } catch (error) {
      logger.error(error);
    }
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <FormControl id="oauth" isInvalid={!!OAuthAccountNotLinked}>
            <VStack>
              {/* <FormPasswordlessEmail /> */}
              <Button
                w="full"
                leftIcon={<AiFillGoogleCircle />}
                onClick={() =>
                  signIn("google", {
                    callbackUrl: router.query.callbackUrl?.toString() || "",
                  })
                }
              >
                Google
              </Button>
              <Button
                w="full"
                leftIcon={<AiFillGithub />}
                onClick={() =>
                  signIn("github", {
                    callbackUrl: router.query.callbackUrl?.toString() || "",
                  })
                }
              >
                Github
              </Button>
              <Button
                w="full"
                leftIcon={<BiLockAlt />}
                onClick={onToggleCollapse}
              >
                User & password
              </Button>
            </VStack>
            <FormErrorMessage>{OAuthAccountNotLinked}</FormErrorMessage>
          </FormControl>
          <Collapse in={isOpenCollapse}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4} pt={10}>
                <FormControl
                  id="email"
                  isInvalid={!!credientialsInvalid}
                  isRequired
                >
                  <FormLabel>Email</FormLabel>
                  <Input type="email" {...register("username")} />
                </FormControl>
                <FormControl
                  id="password"
                  isRequired
                  isInvalid={!!credientialsInvalid}
                >
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        _hover={{ bg: "transparent" }}
                        _active={{ bg: "transparent" }}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{credientialsInvalid}</FormErrorMessage>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{
                      base: "column",
                      sm: "row",
                    }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    isLoading={isSubmitting}
                    loadingText="Signing in..."
                    bg={"blue.400"}
                    color={"white"}
                    type="submit"
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Not a user yet?{" "}
                    <Link
                      color={"blue.400"}
                      href={`signup${
                        router.query.callbackUrl
                          ? `?callbackUrl=${router.query.callbackUrl}`
                          : ""
                      }`}
                    >
                      Register
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Collapse>
        </Box>
      </Stack>
    </Flex>
  );
}
