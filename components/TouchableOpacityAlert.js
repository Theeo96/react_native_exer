import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

export default function TouchableOpacityAlert() {
  const showAlert = () => {
    console.log("기본알림!");
    Alert.alert("안녕하세요", "버튼을 눌렀습니다!");
  }

  const showConfirm = () => {
    console.log("확인알림!");
    Alert.alert("--확인 알림--", "정말 실행하시겠습니까?",
      [
        {text:"네", onPress: () => Alert.alert("실행 완료!")},
        {text:"아니오", onPress: () => Alert.alert("네넵 실행 안하겠습니다!")},
        {text:"글쎄요?", onPress: () => Alert.alert("흠....")}
      ]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>기본 알림</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#4ECDC4" }]} onPress={showConfirm}>
        <Text style={styles.buttonText}>확인 알림</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#4A90D9",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
