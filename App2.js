import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: "red"}]}>
        <Text style={styles.textStyle}>박스 1</Text>
      </View>
      <View style={[styles.box, {backgroundColor: "green"}]}>
        <Text style={styles.textStyle}>박스 2</Text>
      </View>
      <View style={[styles.box, {backgroundColor: "blue"}]}>
        <Text style={styles.textStyle}>박스 3</Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    paddingTop: 50,
    alignItems: "center"
  },
  box: {
    backgroundColor: "gold",
    width: "80%",
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: "#fff",
    fontSize: 24
  }
})