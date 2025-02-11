import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";

const CityScreen = ({ city, link }) => {
  // Select image and description based on the city
  const cityDetails = {
    Calgary: {
      image: require("../assets/calgary.jpg"),
      description:
        "Calgary is a vibrant city in Alberta, known for its world-famous Calgary Stampede, stunning Rocky Mountain views, and strong economy driven by oil and gas. The city boasts a mix of modern skyscrapers and historic buildings, with plenty of parks, rivers, and outdoor activities. It's a major hub for winter sports and outdoor adventures, making it a fantastic place for both work and play.",
    },
    Edmonton: {
      image: require("../assets/edmonton.jpg"),
      description:
        "Edmonton, the capital of Alberta, is famous for its extensive river valley park system, lively arts and culture scene, and as home to the largest shopping mall in North America, West Edmonton Mall. The city experiences long summer days and cold winters, making it a great place for year-round activities. It's also a center for research, education, and festivals, earning the nickname 'Festival City.'",
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
    backgroundColor: "#f0f8ff", // Light blue background for a clean look
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1e3a8a", // Dark blue for better readability
  },
  image: {
    width: 320,
    height: 200,
    marginBottom: 15,
    borderWidth: 5, // Blue border
    borderColor: "#1e90ff",
    borderRadius: 10, // Rounded edges
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 15,
    color: "#333",
    lineHeight: 22, // Spacing for better readability
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
