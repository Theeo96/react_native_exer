import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

const Exam02 = () => {

  const [todos, setTodos] = useState([
    { id: '1', text: 'React Native 공부하기', done: false },
    { id: '2', text: 'FlatList 마스터하기', done: false },
    { id: '3', text: '연락처 앱 만들기', done: false },
    { id: '4', text: '점심 먹기', done: true },
    { id: '5', text: '커피 마시기', done: true },
  ]);

  const handleToggle = (id) => {
    console.log(id);
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? {...todo, done: !todo.done } : todo
      )
    );
  };

  const renderTodos = ({item}) => {
    return (
      <View style={styles.todo}>
        <TouchableOpacity onPress={()=> {handleToggle(item.id)}}>
          <Text style={styles.todoDone}> {item.done?"✔️":"⬜"} </Text>
        </TouchableOpacity>
        <Text> {item.text} </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderTodos}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default Exam02

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row"
  },
  todoDone: {
    borderColor: "black",
    borderWidth: 1,
    minWidth: 27,
    minHeight: 27
  }
})