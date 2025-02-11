import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";

const CityScreen = ({ city, link }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city}</Text>
      <Image
        source={{
          uri: city === "Calgary"
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Downtown_Calgary_Skyline.jpg/800px-Downtown_Calgary_Skyline.jpg"
            : "https://upload.wikimedia.org/wikipedia/commons/3/3b/Edmonton_downtown.jpg",
        }}
        style={styles.image}
      />
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={styles.link}>Go to {city} Page</Text>
      </TouchableOpacity>
      <Text style={styles.info}>
        {city === "Calgary"
          ? "Calgary is known for the Stampede and its stunning mountain views!"
          : "Edmonton has the largest mall in North America, West Edmonton Mall!"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  image: { width: 300, height: 200, marginBottom: 10 },
  link: { color: "blue", textDecorationLine: "underline", marginBottom: 10 },
  info: { fontSize: 16, textAlign: "center" },
});

export default CityScreen;
