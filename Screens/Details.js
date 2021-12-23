import * as React from "react"
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base"
export default function ({ navigation }){

  return (
    <NativeBaseProvider>
     <Center flex={1} px="3">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
      >
        Good to See you!
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: "warmGray.200",
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Create a Votter's Account to get started!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
       
        </FormControl>

        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Terms and Conditions...
          </Link>
        </FormControl>

        <Button mt="2" colorScheme="indigo">
          Sign up
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            I'm an existing user.{" "}
          </Text>
          <Button variant="ghost" colorScheme="success"
          onPress={() => navigation.navigate('Login')}>
            Login
        </Button>
        </HStack>
      </VStack>
    </Box>
    </Center>
    </NativeBaseProvider>
  )
}



// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <Example />
//       </Center>
//     </NativeBaseProvider>
//   )
// }
