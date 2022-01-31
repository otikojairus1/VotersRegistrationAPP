import React from 'react'
import { View } from 'react-native'
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input, Alert,
    Link,Select,CheckIcon,
    Button, Spinner,
    HStack, TextArea,
    Center,
    NativeBaseProvider,
} from "native-base"
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';

export default function SubmitVote({ navigation, route }) {
    const { email, id, question, A,B, created_at } = route.params;
    const [service, setService] = React.useState('');
    const [isLoading, setIsLoading]= React.useState(false);

    const onSubmitHandler = (e)=>{
        e.preventDefault();
     //  console.log(email, service, question);
     setIsLoading(true);

        axios.post('https://voterappapi.herokuapp.com/api/voting',{
            voter:email,
            answer:service,
            question:question
        })
        .then((response)=>{
            setIsLoading(false);
            console.log(response.data);
            navigation.navigate('Vote Submitted');
        })
        .catch((err)=>console.log(err))


    }

   if(isLoading){return (<Center flex={1} mx={4}><VStack space={2} alignItems="center">
    <Spinner size="lg" accessibilityLabel="Trying to sign you in!" />
    <Heading color="primary.500" fontSize="2xl">
      We are submitting your vote, kindly wait..
    </Heading>
  </VStack></Center>)}
  else{
      return(
    
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
                        Submit your Answer here!
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




                      
                <VStack space={3} mt="5">

                <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                        Question Reference Number: {id}
                    </Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                        Question Detail: {question}
                    </Text>

                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        _dark={{
                            color: "coolGray.800",
                        }}
                    >
                        Question Created by Admin at: {created_at}
                    </Text>
                          


                <FormControl>
          <FormControl.Label>Answer Voted</FormControl.Label>

        <VStack alignItems="center" space={4}>
          
      <Select
        selectedValue={service}
        minWidth="270"
        accessibilityLabel="Choose an Answer"
        placeholder="Choose an Answer"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label={A} value={A} />
        <Select.Item label={B} value={B} />
       
      </Select>
    </VStack>



    </FormControl>
                 
                  <Button type="submit"mt="2" colorScheme="indigo"
                          onPress={onSubmitHandler}>
                    Submit Vote
                  </Button>
                 
                </VStack>
                      
                    </Box>
                </VStack>
            </Alert></Center>);
    }
}