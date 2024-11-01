import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// Simulate a dice roll between 1 and 6
const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

export default function App() {
  const [diceRolls, setDiceRolls] = useState([]);

  return (
    <View>
      <Button
        title="Roll Dice"
        onPress={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()]);
          console.log()
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  );
}