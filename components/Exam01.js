import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Exam01 = () => {

  const fruits = [
    { id: '1', name: '사과', emoji: '🍎', color: '#ffebee' },
    { id: '2', name: '바나나', emoji: '🍌', color: '#fffde7' },
    { id: '3', name: '오렌지', emoji: '🍊', color: '#fff3e0' },
    { id: '4', name: '포도', emoji: '🍇', color: '#f3e5f5' },
    { id: '5', name: '수박', emoji: '🍉', color: '#ffebee' },
    { id: '6', name: '딸기', emoji: '🍓', color: '#fce4ec' },
    { id: '7', name: '복숭아', emoji: '🍑', color: '#fff8e1' },
    { id: '8', name: '체리', emoji: '🍒', color: '#ffebee' },
  ];

  const renderFruits = ({item}) => {
    return <View>
      <Text style={{backgroundColor: item.color, paddingTop: 50}}>{item.name} = {item.emoji}</Text>
    </View>
  };

  return (
    <View>
      <FlatList 
        data={fruits}
        renderItem={renderFruits}
        keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default Exam01

const styles = StyleSheet.create({})