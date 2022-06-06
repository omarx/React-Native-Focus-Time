import React, { useState } from 'react';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import RoundedButton from '../components/RoundedButton/RoundedButton';

import { spacing } from '../utils/sizes';
import { fontSizes } from '../utils/sizes';



const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View>
          <RoundedButton
            style={styles.button}
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});

export default Focus;
