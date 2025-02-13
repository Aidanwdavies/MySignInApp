import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";

const CityScreen = ({ city, link }) => {
  // Select image and description based on the city
  const cityDetails = {
    Calgary: {
      image: require("../assets/calgary.jpg"),
      description:
        "Calgary, the heart of Alberta, blends urban energy with outdoor adventure, set against the stunning Canadian Rockies. Known for the Calgary Stampede, modern landmarks, and a thriving arts and sports scene, it offers a vibrant lifestyle. The Bow River, scenic pathways, and proximity to Banff National Park make it a haven for nature lovers. With career opportunities, cultural diversity, and a welcoming community, Calgary is the perfect mix of city excitement and small-town charm. ",
    },
    Edmonton: {
      image: require("../assets/edmonton.jpg"),
      description:
        "Edmonton, Alberta’s vibrant capital, is a city of festivals, culture, and endless adventure. Home to West Edmonton Mall, the largest in North America, and the stunning River Valley, the city offers a unique blend of urban excitement and natural beauty. Known as Canada’s Festival City, Edmonton hosts year-round events, including the Fringe Festival and K-Days, celebrating arts, music, and heritage. With a booming economy, diverse communities, and a passion for sports—cheering on the Edmonton Oilers—Edmonton is a dynamic, welcoming city that thrives on creativity, innovation, and northern charm.",
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city}</Text>
      
      <Image source={cityDetails[city].image} style={styles.image} />

      <Text style={styles.description}>{cityDetails[city].description}</Text>

      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={styles.link}>Go to {city} Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f8ff", 
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1e3a8a", 
  },
  image: {
    width: 320,
    height: 200,
    marginBottom: 15,
    borderWidth: 5,
    borderColor: "#1e90ff",
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 15,
    color: "#333",
    lineHeight: 22, 
    marginBottom: 20,
  },
  link: {
    color: "#1e90ff",
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default CityScreen;
