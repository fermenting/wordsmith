import React from 'react';
import { View, Text } from 'react-native';

const GuessFeedback = ({ feedback }) => {
    return (
        <View>
            <Text>{feedback.word} - {feedback.correct ? "Correct" : "Incorrect"}</Text>
        </View>
    );
};

export default GuessFeedback;
