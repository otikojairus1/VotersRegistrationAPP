import * as React from "react"
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input, IconButton,
  Link,  Spinner,
  Button,  Alert,CheckIcon,
  HStack, useToast, AlertDialog,
  Center,  CloseIcon,
  NativeBaseProvider,
} from "native-base"
import axios from 'axios'
export default function SignInScreen ({ navigation }){


  const [question, setQuestion] = React.useState('');

  const [answera, setAnswera] = React.useState('');
  const [answerb, setAnswerb] = React.useState('');
  let [alert, setAlert] = React.useState(false);
  let [AlertMessage, setAlertMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  // useEffect(() => {
  //   //using a fake rest api, will replace with the voters api when done
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(setIsLoading(false))
  // });

  const toast = useToast()

  const onChangeQuestion = (event) => {
    setQuestion(event)
    //console.log(email);
  }

  const onChangeAnswerA = (event) => {
    setAnswera(event)
    //console.log(password);
  }

  const onChangeAnswerB = (event) => {
    setAnswerb(event)
    //console.log(password);
  }

  const onListClicked = (event) => {
   // setAnswerb(event)
    //console.log("password");
    navigation.navigate('Question List');
  }
  
  const onVoteClicked = (event) => {
    // setAnswerb(event)
     //console.log("password");
     navigation.navigate('Voted Questions');
   }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios({
      method: 'post',
      url: 'https://voterappapi.herokuapp.com/api/add/question',
      data: {
        "question":question,
        "A":answera,
        "B":answerb
      },
      config: { headers: {'Content-Type': 'application/json' }}
    })
        .then(function (response){
          //console.log(response.data);
          if(typeof response.data.error !== "undefined"){
            setIsLoading(false);
            setAlert(true);
            setAlertMessage("We encountered an error while adding the question. Please try again later");
          }else{
            setIsLoading(false);
            
            navigation.navigate('Done');


          }

        }).catch((err)=>console.log(err));

  }


  let AlertRender;
  if (alert){
    AlertRender = <Alert w="100%" status="info" colorScheme="info">
      <VStack space={2} flexShrink={1} w="100%">
        <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
        >
          <HStack flexShrink={1} space={2} alignItems="center">
            <Alert.Icon />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              Kindly double check your entries!
            </Text>
          </HStack>
          <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" color="coolGray.600" />}
          />
        </HStack>
        <Box
            pl="6"
            _text={{
              color: "coolGray.600",
            }}
        >
          {AlertMessage}
        </Box>
      </VStack>
    </Alert>
  }else{
    AlertRender = "";
  }


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
              Add a new Question
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
              This question will be seen by all users upon submission
            </Heading>

            {AlertRender}

            {isLoading ? <HStack space={2} alignItems="center">
                  <Spinner size="lg" accessibilityLabel="Trying to sign you in!" />
                  <Heading color="primary.500" fontSize="2xl">
                    Creating Question..
                  </Heading>
                </HStack> :

                <VStack space={3} mt="5">
                  <FormControl>
                    <FormControl.Label>Question</FormControl.Label>
                    <Input name="question" value={question} onChangeText={onChangeQuestion} />
                  </FormControl>

                  <FormControl>
                    <FormControl.Label>First Answer</FormControl.Label>
                    <Input name="answer1" value={answera} onChangeText={onChangeAnswerA} />
                  </FormControl>

                  <FormControl>
                    <FormControl.Label>Second Answer</FormControl.Label>
                    <Input name="answer2" value={answerb} onChangeText={onChangeAnswerB} />
                  </FormControl>
           
                  <Button type="submit"mt="2" colorScheme="indigo"
                          onPress={onSubmitHandler}>
                    Add Question
                  </Button>

                  <Button mt="2" colorScheme="green"
                          onPress={onListClicked}>
                    View all questions
                  </Button>
                  <Button mt="2" colorScheme="warning"
                          onPress={onVoteClicked}>
                    View Voted questions
                  </Button>
                </VStack>}
          </Box>
        </Center>
      </NativeBaseProvider>
  )
}