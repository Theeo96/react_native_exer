import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function VerticalScrollCard() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.box}>
        <Text>박스 1</Text>
      </View>
      <View style={styles.box}>
        <Text>박스 2</Text>
      </View>
      <View style={styles.box}>
        <Text>박스 3</Text>
      </View>
      <View style={styles.box}>
        <Text>박스 4</Text>
      </View>
      <View style={styles.box}>
        <Text>박스 5</Text>
      </View>
      <View style={styles.box}>
        <Text>박스 6</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    marginTop: 50,
    marginBottom: 50
  },
  box: {
    height: 150,
    margin: 10,
    backgroundColor: "#4A90D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
