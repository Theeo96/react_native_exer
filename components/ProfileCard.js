import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/59535989?v=4", width: 100, height: 100 }}
          style={styles.avatar}
          />

        <Text style={styles.name}>엄태홍</Text>
        <Text style={styles.role}>AI Engineer</Text>

        <View style={styles.bioContainer}>
          <Text style={styles.bio}>
            여러가지 AI를 다루는 AI Engineer 입니다. {"\n"}
            뭐든 금방 배울 수 있습니다.
          </Text>
        </View>

        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>AI</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>등등</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: "100%",
    maxWidth: 320,
    // 그림자 효과 (Android)
    elevation: 4,
    // 그림자 효과 (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: "#667",
    marginBottom: 16,
  },
  bioContainer: {
    backgroundColor: "#f8f9fa",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    width: "100%",
  },
  bio: {
    fontSize: 14,
    color: "#495057",
    lineHeight: 20,
    textAlign: "center",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  tag: {
    backgroundColor: "#e7f5ff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  tagText: {
    color: "#1971c2",
    fontSize: 12,
    fontWeight: "600",
  },
});