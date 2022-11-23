import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { database } from "../../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";


const Login = () => {
  const userCollection = collection(database, "User");

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleLogin = async () => {
    if (email && password) {
      await addDoc(userCollection, {
        email: email,
        password: password,
      });
      navigation.navigate("Home");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollection);
      //console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const userData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

      if(userData){
        userData.map((e) => {
          setEmail(e.email);
          setPassword(e.password);
        });
      }
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
 
  

  return (
    <View style={styles.container}>
   
        {/* <ImageComponet source={require("../../assets/logo.png")} /> */}
        <View animation='fadeInLeft' delay={500} style={styles.containerHeader}> 
            <Text style={styles.message}>Bem-vindo, aventureiro(a)!</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#fff"}}>Faça login usando Firestore!</Text>
        </View> 
       

        <View animation='fadeInUp' style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput 
            placeholder='Digite seu Email...'
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
            />
            <Text style={styles.title}>Senha</Text>
            <TextInput 
            placeholder='Digite seu Senha...'
            style={styles.input}
            type="password"
            label="Senha"
            
            onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity style={styles.button} 
            onPress={handleLogin}
            >
                <Text style={styles.buttonText} >Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('Home')}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: "#rgb(32,33,45);"
  },
  containerHeader: {
      marginTop: "40%",
      marginBottom: "8%",
      paddingStart: "5%"
  },
  message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: "#fff"
  },
  containerForm: {
      backgroundColor: "#fff",
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%"
  },
  title: {
      fontSize: 20,
      marginTop: 28,
  },
  input: {
      borderBottomWidth: 1,
      height: 40,
      marginBotton: 12,
      fontSize: 16
  },
  button: {
      backgroundColor: "#rgb(32,33,45);",
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
  },
  buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 'bold',
  },
  buttonRegister: {
      marginTop: 14,
      alignSelf: 'center'
  },
  registerText: {
      color: "#a1a1a1"
  },
  icon:{
      marginTop: 15,
      marginLeft: 10,
  }
})

export default Login;
