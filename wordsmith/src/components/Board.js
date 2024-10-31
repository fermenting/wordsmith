import React from 'react';
import { View, Text } from 'react-native';

const Board = ({ anchorWord }) => (
    <View>
        <Text>Anchor Word: {anchorWord}</Text>
    </View>
);

export default Board;
