import { View, Text, Image, Button } from "react-native";
import React from "react";

const LamboPage = () => {
  const price: number = 200000;
  const carName: String = "Lamborgini Urus";
  const rating: number = 3.5;
  const description: String = "Fast Sport Car";
  const imageWidth: number = 300;
  const imageHeight: number = 300;
  return (
    <View>
      <Text>${price}</Text>
      <Image
        source={require("../assets/lambo.jpg")}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Text>{carName}</Text>
      <Text>{rating}</Text>
      <Text>{description}</Text>
      <Button title="Add to cart" />
    </View>
  );
};

export default LamboPage;
