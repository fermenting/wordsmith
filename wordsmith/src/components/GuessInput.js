import React from 'react';
import { View, TextInput, Button } from 'react-native';

const GuessInput = ({ currentGuess, setCurrentGuess, checkGuess }) => (
    <View>
        <TextInput
            placeholder="Enter your guess"
            value={currentGuess}
            onChangeText={setCurrentGuess}
        />
        <Button title="Check Guess" onPress={checkGuess} />
    </View>
);

export default GuessInput;
