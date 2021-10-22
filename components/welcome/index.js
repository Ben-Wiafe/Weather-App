import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1b0d63" }}>
      <Image
        source={require("../../assets/weather-icon-png-11081.png")}
        style={{ width: 300, height: 270, marginHorizontal: 30, marginTop: 65 }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 34,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        {" "}
        Weather <Text style={{ color: "#FFE45E" }}> News </Text>
      </Text>
      <Text
        style={{
          color: "#FFE45E",
          fontSize: 34,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 0,
        }}
      >
        {" "}
        & Feed{" "}
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 14,
          textAlign: "center",
          marginTop: 15,
        }}
      >
        {" "}
        Want to know the weather before going out?
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {" "}
        going out? Need a weather forecast before{" "}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {" "}
        starting the project?{" "}
      </Text>

      <TouchableOpacity style={{backgroundColor:'#FFE45E', padding:20, marginTop:20, marginHorizontal:35,borderRadius:15}} 
      onPress= {()=> {}}>
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:18}}> Get Started </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
