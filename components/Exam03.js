import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Exam03 = () => {

  const allMemos = [
    { id: '1', title: '회의 메모A', content: '월요일 10시 팀 미팅', date: '2024-01-15' },
    { id: '2', title: '쇼핑 목록AB', content: '우유, 계란, 빵', date: '2024-01-14' },
    { id: '3', title: 'React Native', content: 'FlatList 공부하기', date: '2024-01-13' },
    { id: '4', title: '생일 파티ABC', content: '케이크 주문, 선물 준비', date: '2024-01-12' },
    { id: '5', title: '운동 계획ABCD', content: '월수금 헬스장', date: '2024-01-11' },
  ];

  const [memos, setMemos] = useState(allMemos);
  const [searchText, setSearchText] = useState("");
  const selectedMemos = memos.filter(
    (memo)=> 
      memo.title.toLowerCase().includes(searchText.toLowerCase()) ||
      memo.content.toLowerCase().includes(searchText.toLowerCase())
    )
  console.log(selectedMemos)

  const renderMemos = ({item}) => {
    return (
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <View>
          <Text style={{fontSize: 20}}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
        <Text>{item.date}</Text>
      </View>
    );
  };

  const listHeader = () => {
    return (
      <Text style={{backgroundColor: "#f3f3f3"}}>
        총 {memos.length}개의 할 일이 있습니다.
      </Text>
    );
  };

  const listFooter = () => {
    return (
      <Text style={{backgroundColor: "#f3f3f3"}}>
        모든 할 일을 불러왔습니다.
      </Text>
    );
  };

  const listSeparator = () => {
    return (
      <View style={{backgroundColor: "#eee", height: 3}}>

      </View>
    );
  };

  const listEmpty = () => {
    return (
      <Text style={{backgroundColor: "#f3f3f3"}}>할 일이 없습니다.</Text>
    );
  };

  return (
    <View style={{paddingTop: 50}}>
      <TextInput
        style={{borderWidth:1 ,borderColor: "#eee", width: 200}}
        placeholder="🔎메모 검색"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data = {memos}
        renderItem={renderMemos}
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={memos.length && listHeader}
        ListFooterComponent={memos.length && listFooter}
        ItemSeparatorComponent={listSeparator}
        ListEmptyComponent={listEmpty}
      />
    </View>
  );
};

export default Exam03;

const styles = StyleSheet.create({});