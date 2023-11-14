import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
import styles from "./welcome.style";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Namaste Atharva!</Text>
        <Text style={styles.welcomeMessage}>Your dream job awaits</Text>
      </View>

      <View style={styl.container}>
        {/* <View style={styles.searchWrapper}> */}
        <TextInput
          style={styles.input}
          placeholder="What you are looking for?"
          placeholderTextColor="#888888"
        />
        {/* </View> */}
      </View>
    </View>
  );
};

const styl = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2', // Light grey background color
    padding: 15,
    borderRadius: 8,
    marginTop: 20
  },
  input: {
    color: '#333333',
    fontSize: 30, // Dark grey text color
  },
});

export default Welcome;
