import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Icon name="doubleleft" size={30} color="white" style={styles.icon} onPress={ ()=> navigation.navigate('Welcome')}/> */}
      <View style={styles.containerStart}>
        <Text style={styles.textStart}>Bem vindo a Valinor!</Text>
      </View>

      <View style={styles.containerLogo}>
        <Image
          animation="flipInY"
          source={require("../../assets/valinor.png")}
          style={{ width: "100%", height: "70%" }}
          risizeMode="contain"
        />
      </View>
      <View delay={600} animation="fadeInUp" style={styles.containerChange}>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={ () => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Voltar para o login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#rgb(32,33,45);",
  },
  containerLogo: {
    flex: 1,
    backgroundColor: "#rgb(32,33,45);",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "30%",
    marginTop: "8%",
  },
  containerStart: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
  },
  textStart: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  textName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
  containerName: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  containerChange: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#rgb(32,33,45);",
    width: "60%",
    borderRadius: 0,
    paddingVertical: 0,
    marginBottom: "2%",
    alignItems: "center",
    justifyContent: "center",
    height: "40%"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  containerButtons: {
    marginTop: "30%",
    width: "100%",

    alignItems: "center",
  },
});

export default Home;
