import React from 'react'
import {
  View,
  Text,
  Picker,
  StyleSheet,
} from 'react-native'

const WordList = ({onFilterChange, filter}) => {
  return (
    <View>
      <Text style={styles.viewHeader}>
          Filter:
      </Text>
      <Picker
        style={styles.picker}
        selectedValue={filter}
        onValueChange={(filter) => onFilterChange(filter)}>
        <Picker.Item label="Show all" value="SHOW_ALL" />
        <Picker.Item label="Show learned" value="SHOW_LEARNED" />
        <Picker.Item label="Show unlearned" value="SHOW_UNLEARNED" />
      </Picker>
    </View>
  )
}

export default WordList

const styles = StyleSheet.create({
  picker: {
    color: '#000',
    height: 50,
    marginBottom: 10
  },
  viewHeader: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  }
})