import React, { Component } from "react";
import {  View,
StyleSheet,
ImageBackground,
Image,
TextInput,
TouchableOpacity,
Text,
Alert,
KeyboardAvoidingView
} from "react-native";
const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class Login extends React.Component{


    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ImageBackground source={bgImage} style={styles.bgImage}>
              <View style={styles.upperContainer}>
                <Image source={appIcon} style={styles.appIcon} />
                <Image source={appName} style={styles.appName} />
              </View>
              <View style={styles.lowerContainer}>
                
                  <TextInput
                    style={styles.textinput}
                    placeholder={"Enter Email"}
                    placeholderTextColor={"#FFFFFF"}
                    onChangeText={text => this.setState({ email: text })}
                    autoFocus
                  />
                  
                  <TextInput
                    style={[styles.textinput]}
                    placeholder={"Enter Password"}
                    placeholderTextColor={"#FFFFFF"}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                  />
                  <TouchableOpacity>         
                  <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        );
      }
    

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    bgImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    upperContainer: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },
    appIcon: {
      width: 200,
      height: 200,
      resizeMode: "contain",
      marginTop: 80
    },
    appName: {
      width: 80,
      height: 80,
      resizeMode: "contain"
    },
    lowerContainer: {
      flex: 0.5,
      alignItems: "center"
    },
   
    textinput: {
      width: "57%",
      height: 50,
      padding: 10,
      borderColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth: 3,
      fontSize: 18,
      backgroundColor: "#5653D4",
      fontFamily: "Rajdhani_600SemiBold",
      color: "#FFFFFF"
    },
   
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15
    },
    buttonText: {
      fontSize: 24,
      color: "#FFFFFF",
      fontFamily: "Rajdhani_600SemiBold"
    }
  });
  
