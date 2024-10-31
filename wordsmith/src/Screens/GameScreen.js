import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import GuessInput from '../components/GuessInput';
import GuessFeedback from '../components/GuessFeedback';
import Board from '../components/Board';
import { words, anchorWord } from '../data/words';

const GameScreen = () => {
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [feedback, setFeedback] = useState([]);
    const [guessCount, setGuessCount] = useState(0);

    const checkGuess = () => {
        // Check if guess is a valid word and provides feedback on it
        const isCorrect = words.includes(currentGuess);
        setGuessCount(prev => prev + 1);
        setFeedback([...feedback, { word: currentGuess, correct: isCorrect }]);
        setCurrentGuess('');
    };

    return (
        <View>
            <Board anchorWord={anchorWord} />
            <GuessInput 
                currentGuess={currentGuess} 
                setCurrentGuess={setCurrentGuess} 
                checkGuess={checkGuess} 
            />
            <FlatList
                data={feedback}
                renderItem={({ item }) => (
                    <GuessFeedback feedback={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <Text>Guess Count: {guessCount}</Text>
        </View>
    );
};

export default GameScreen;
