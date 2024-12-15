import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'

const index = () => {
  const [cel, setCel] = useState('')
  const [far, setFar] = useState('')

  const convertCel = () => {
    const celValue = parseInt(cel)
    if (!isNaN(celValue)) {
      const result = celValue * (9 / 5) + 32
      setFar(result.toFixed(2))
    } else {
      setFar('Invalid')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temparature Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Input Celcius"
          value={cel}
          onChangeText={setCel}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text>°C</Text>
      </View>

      <TouchableOpacity onPress={convertCel} style={styles.button}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{far}</Text>
        <Text>°F</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 26,
  },

  button: {
    backgroundColor: '#963852',
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    padding: 20,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 26,
    fontWeight: '500',
  },
})

export default index
