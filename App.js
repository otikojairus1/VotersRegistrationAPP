// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  NativeBaseProvider,   Icon, Button, Input, Stack, FormControl } from 'native-base';
import LoginForm from './components/LoginForm';
import SignUpScreen from './Screens/Details';
import TabScreen from './Screens/TabScreen';
import CreateQuestion from './Screens/CreateQuestion'
import Done from './Screens/success'
import QuestionList from './Screens/QuestionList';
import QuestionDetails from './Screens/QuestionDetails';
import VoteList from './Screens/VoteList'
import SubmitVote from './Screens/SubmitVote'
import VoteSuccess from './Screens/voteSuccess';
import VotedQuestions from './Screens/VotedQuestions';
import VoteDetail from './Screens/VoteDetail';

const Stack2 = createNativeStackNavigator();

function App() {
    return (
        <NativeBaseProvider>
        <NavigationContainer>
            <Stack2.Navigator initialRouteName="Login">
                <Stack2.Screen name="Login" component={LoginForm} />
                <Stack2.Screen name="Register" component={SignUpScreen} />
                <Stack2.Screen name="Admins Questions" component={TabScreen} />
                <Stack2.Screen name="Create Question" component={CreateQuestion} />
                <Stack2.Screen name="Done" component={Done} />
                <Stack2.Screen name="Question List" component={QuestionList} />
                <Stack2.Screen name="Question Details" component={QuestionDetails} />
                <Stack2.Screen name="Voting Questions" component={VoteList} />
                <Stack2.Screen name="Voting Screen" component={SubmitVote} />
                <Stack2.Screen name="Vote Submitted" component={VoteSuccess} />
                <Stack2.Screen name="Voted Questions" component={VotedQuestions} />
                <Stack2.Screen name="Vote Detail" component={VoteDetail} />
            </Stack2.Navigator>
        </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default App;