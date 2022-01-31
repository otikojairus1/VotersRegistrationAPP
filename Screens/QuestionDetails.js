import React from 'react'
import { View } from 'react-native'
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input, Alert,
    Link,
    Button, Spinner,
    HStack, TextArea,
    Center,
    NativeBaseProvider,
} from "native-base"
import { MaterialIcons } from '@expo/vector-icons';
export default function QuestionDetails({ route }) {
    const { id, question, A,B, created_at } = route.params;
    return (
        <Center flex={1} mx={4}>
            <Alert w="100%" status="success">
                <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                <MaterialIcons name="hotel" size={75} color="green" />
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                        Question Details!
                    </Text>

                    <Box
                        _text={{
                            textAlign: "center",
                        }}
                        _dark={{
                            _text: {
                                color: "coolGray.600",
                            },
                        }}
                    >
                          <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                        Question Reference Number:
                    </Text>
                        {id}

                        <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                        Question:
                    </Text>
                        {question}

                        <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                       First Answer
                    </Text>
                        {A}

                        <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                        Second answer:
                    </Text>
                        {B}
                        <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                        Question created at:
                    </Text>
                    {created_at}

                        

                    </Box>
                </VStack>
            </Alert></Center>
    )
}