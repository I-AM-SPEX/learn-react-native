import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../utils/style";

const CarCard = () => {
  return (
    <View style={styles.carCard}>
      <Image style={styles.carImage} source={require("../assets/car-1.jpg")} />
      <Text>Sports Car</Text>
      <Text>Rating:3.5</Text>
      <Text>Price:$30</Text>
    </View>
  );
};

export default CarCard;
