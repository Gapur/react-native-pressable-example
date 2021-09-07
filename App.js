import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

function App() {
  const [withoutFeedbackPressed, setWithoutFeedbackPressed] = useState(0);
  const [opacityPressed, setOpacityPressed] = useState(0);
  const [highlightPressed, setHighlightPressed] = useState(0);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native Pressable</Text>
        </View>
      </SafeAreaView>

      <View style={styles.content}>
        <View style={styles.buttonRow}>
          <Text style={styles.label}>
            Pressable as a TouchableWithoutFeedback
          </Text>
          <Pressable
            onPress={() =>
              setWithoutFeedbackPressed(withoutFeedbackPressed + 1)
            }
            style={() => [styles.button]}>
            <Text style={styles.buttonText}>
              {`${withoutFeedbackPressed} pressed`}
            </Text>
          </Pressable>
        </View>

        <View style={styles.buttonRow}>
          <Text style={styles.label}>Pressable as a TouchableOpacity</Text>
          <Pressable
            onPress={() => setOpacityPressed(opacityPressed + 1)}
            style={({ pressed }) => [
              styles.button,
              { opacity: pressed ? 0.5 : 1 },
            ]}>
            <Text style={styles.buttonText}>{`${opacityPressed} pressed`}</Text>
          </Pressable>
        </View>

        <View style={styles.buttonRow}>
          <Text style={styles.label}>Pressable as a TouchableHighlight</Text>
          <Pressable
            onPress={() => setHighlightPressed(highlightPressed + 1)}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? '#008080' : '#a4c936',
                opacity: pressed ? 0.5 : 1,
              },
            ]}>
            <Text style={styles.buttonText}>
              {`${highlightPressed} pressed`}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
  },
  safeArea: {
    backgroundColor: '#62d1bc',
  },
  header: {
    height: 50,
    backgroundColor: '#62d1bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  buttonRow: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 28,
  },
  button: {
    paddingVertical: 12,
    backgroundColor: '#a4c936',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2C2C2C',
    paddingVertical: 12,
  },
});

export default App;
