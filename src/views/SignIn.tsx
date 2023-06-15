import { useState } from "react";
import { VStack, Heading, Icon, useTheme, Pressable } from "native-base";
import { Envelope, Key, Eye, EyeSlash } from "phosphor-react-native";

import Logo from "../assets/logo_primary.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import React from "react";

export function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);

  // Para usar as cores determinadas no theme
  const { colors } = useTheme();

  function handleSignIn() {
    console.log(name, password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setName}
      />

      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        // Implementação do controle de visibilidade da senha a partir dos icone "Eye" e "EyeSlash"
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                show ? (
                  <Eye color={colors.gray[300]} />
                ) : (
                  <EyeSlash color={colors.gray[300]} />
                )
              }
              mr={4}
            />
          </Pressable>
        }
        onChangeText={setPassword}
      />

      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
}
