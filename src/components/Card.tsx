import { View, Text, Image, Button } from "react-native";

const Card = () => {
  return (
    <View>
      <Image
        source={require("../assets/image-1.jpeg")}
        style={{ width: 200, height: 200 }}
      />
      <Text>Samuel Williams</Text>
      <Button title="Press Me" />
    </View>
  );
};

export default Card;
