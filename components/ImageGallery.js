import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useState } from "react";

const ImageGallery = () => {
  
  const photoData = [
    {
      id: 1,
      title: "나무람쥐",
      location: "나무 위",
      date: "2026.01.01",
      // image: "https://picsum.photos/400/300?random=1",
      image : require("../assets/squirrel_1.jpg"),
      liked: false,
    },
    {
      id: 2,
      title: "숲속람쥐",
      location: "숲속 어딘가",
      date: "2026.01.02",
      // image: "https://picsum.photos/400/300?random=2",
      image : require("../assets/squirrel_2.jpg"),
      liked: true,
    },
    {
      id: 3,
      title: "소나무 람쥐",
      location: "소나무 위",
      date: "2026.01.03",
      // image: "https://picsum.photos/400/300?random=3",
      image: require("../assets/squirrel_3.jpg"),
      liked: true,
    },
    {
      id: 4,
      title: "냠냠람쥐",
      location: "아무튼 어딘가",
      date: "2026.01.04",
      // image: "https://picsum.photos/400/300?random=4",
      image: require("../assets/squirrel_4.jpg"),
      liked: false,
    },
    {
      id: 5,
      title: "멀뚱람쥐",
      location: "람쥐가 있는 어딘가",
      date: "2026.01.05",
      // image: "https://picsum.photos/400/300?random=5",
      image: require("../assets/squirrel_5.png"),
      liked: false,
    },
  ];

  const [photos, setPhotos] = useState(photoData);
  const photoCnt = photos.length;
  const likeCnt = photos.filter((photo) => photo.liked).length

  const handleLike = (id) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) => {
        if (photo.id === id) {
          return { ...photo, liked: !photo.liked };
        }
        return photo;
      })
    );
  };

  const handleDelete = (id) => {
    Alert.alert("사진 삭제", "정말 삭제하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => {
          setPhotos((prevPhotos) =>
            prevPhotos.filter((photo) => photo.id !== id)
          );
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>📷 나의 갤러리</Text>
        <Text style={styles.subText}>
          {photoCnt}장의 사진 ♥️{likeCnt}
        </Text>
      </View>
      <ScrollView
        style={styles.gallery}
        contentContainerStyle={styles.galleryContent}
        showsVerticalScrollIndicator={false}
      >
        {photos.map((photo) => (
          <View style={styles.photoCard} key={photo.id}>
            <TouchableOpacity
              onLongPress={() => {
                handleDelete(photo.id);
              }}
            >
              {/* <Image source={{ uri: photo.image }} style={styles.image} /> */}
              <Image source={photo.image} style={styles.image}/>
            </TouchableOpacity>
            <View style={styles.photoInfo}>
              <View>
                <Text style={styles.photoTitle}>{photo.title}</Text>
                <Text style={styles.photoLocation}>📍{photo.location}</Text>
                <Text style={styles.photoDate}>📅{photo.date}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  handleLike(photo.id);
                }}
              >
                <Text style={styles.isLiked}>{photo.liked ? "♥️" : "🩶"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
    paddingTop: 50,
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  subText: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  gallery: {
    // backgroundColor: "#999",
  },
  galleryContent: {
    // backgroundColor: "#999",
    padding: 20,
    gap: 20,
    flex: 1,
  },
  photoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  photoInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  photoTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  photoLocation: {
    fontSize: 14,
    color: "#777",
  },
  photoDate: {
    fontSize: 14,
    color: "#4e7c93ff",
  },
  isLiked: {
    fontSize: 20,
  },
});