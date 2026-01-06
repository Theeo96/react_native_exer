import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>안녕하세요!</Text>
      <Text style={styles.text2}>리액트 네이티브의 세계에 오신 것을 환영합니다!</Text>
      <Image source={require('./assets/favicon.png')}/>
      <Image
        style={styles.img}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        {/* https://picsum.photos/400/300?random=1 */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text1: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10
  },
  text2: {
    fontSize: 16
  },
  img: {
    width: 200,
    height: 200
  }
})