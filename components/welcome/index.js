import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import WeatherPage from "../weatherpage";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 2, backgroundColor:'#1b0d63' }}>
      <View style={{ backgroundColor: "#1b0d63", borderRadius:15 }}>
        <Image
          source={require("../../assets/weather-icon-png-11081.png")}
          style={{
            width: 300,
            height: 270,
            marginHorizontal: 30,
            marginTop: 30,
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 34,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
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

        <TouchableOpacity
          style={{
            backgroundColor: "#FFE45E",
            padding: 20,
            marginTop: 20,
            marginHorizontal: 35,
            borderRadius: 15,
          }}
          onPress={() => navigation.replace('WeatherPage')}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "700", fontSize: 18 }}
          >
            {" "}
            Get Started{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
