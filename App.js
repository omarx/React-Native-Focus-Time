import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Timer from './src/features/Timer'
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
// You can import from local files
import Focus from './src/features/Focus';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {FocusHistory} from './src/features/FocusHistory'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history,setHistory]=useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
       <FocusHistory history={history} />
       </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject)=>{setHistory([...history,subject])}}
          clearSubject={()=>setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  });
