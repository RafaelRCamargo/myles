<<<<<<< HEAD
import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../../styles/styles";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Sign home!</Text>
      <Button title="aaa" onPress={() => navigation.navigate("Login")} />
      <Button title="bbb" onPress={() => navigation.navigate("Sign Up")} />
      

    </View>
  );
=======
import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../../styles/styles";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Sign home!</Text>
      <Button title="aaa" onPress={() => navigation.navigate("Login")} />
      <Button title="bbb" onPress={() => navigation.navigate("Sign Up")} />
    </View>
  );
>>>>>>> 22255ea62e5c4f513bee7a987abec4bdcdfdfdb9
}