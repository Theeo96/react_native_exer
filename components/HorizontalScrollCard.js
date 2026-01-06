import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HorizontalScrollCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>가로 스크롤 갤러리</Text>

      {/* 가로 스크롤 할 부분 */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, { backgroundColor: "#FF6B6B" }]}>
          <Text style={styles.cardText}>1</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#4ECDC4" }]}>
          <Text style={styles.cardText}>2</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#45B7D1" }]}>
          <Text style={styles.cardText}>3</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#96CEB4" }]}>
          <Text style={styles.cardText}>4</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#FFEAA7" }]}>
          <Text style={styles.cardText}>5</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#e6d6e1ff" }]}>
          <Text style={styles.cardText}>6</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 15,
  },
  card: {
    width: 120,
    height: 160,
    marginHorizontal: 8,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});
