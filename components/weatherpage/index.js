import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);

  async function getweather(city="Accra") {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=849659f9bfd1c2ae483fe18ab575ad7c"
    )
      .then((response) => response.json())
      .then((response) => {
        setWeatherData(response);
        console.log(response);
      })

      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getweather();
  }, []);

  function FTC(temp) {
    return temp - 273.15;
  }
  const cities = [
    { name: "Accra", id: "1" },
    //{ name: "Kumasi",  id:'2'},
    { name: "Kwahu", id: "3" },
    { name: "London", id: "4" },
    { name: "New York", id: "5" },
    { name: "Arizona", id: "6" },
    { name: "Wuhan", id: "7" },
    //{name: "Beijing", id:'8'},
    //{name: "Lagos",  id:'9'},
    //{name: "Abuja",  id:'10'},
    { name: "Tema", id: "11" },
    // {name: "Obuasi", id:'12'},
    { name: "Ho", id: "13" },
    { name: "Tamale", id: "14" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#1b0d63" }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => Alert.alert("Filter result")}>
          <Image
            source={require("../../assets/edit.png")}
            style={{
              marginTop: 40,
              marginLeft: -20,
              width: 18,
              height: 18,
              tintColor: "white",
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            paddingTop: 39,
            marginHorizontal: 90,
            fontSize: 15,
            color: "white",
          }}
        >
          {" "}
          Weather Forecast
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#0f148c",
          marginHorizontal: 10,
          marginBottom: 360,
          marginTop: 30,
          borderRadius: 25,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ padding: 10, fontSize: 30, color: "white" }}>
            {" "}
            Today
          </Text>
          <Text style={{ color: "white", padding: 15 }}>
            {" "}
            {new Date().toDateString()}
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 29,
              left: 240,
              color: "gray",
              fontStyle: "italic",
            }}
          >
            {weatherData?.weather[0].description}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ padding: 7, marginTop: -30, fontSize: 75, color: "white" }}
          >
            {FTC(weatherData?.main.temp).toFixed(1)}
            <Text
              style={{
                padding: 7,
                marginTop: -33,
                fontSize: 40,
                color: "orange",
              }}
            >
              C
            </Text>
          </Text>
          <Image
            source={require("../../assets/sun.png")}
            style={{ width: 90, height: 90, marginRight: 29, marginTop: -12 }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Ionicons
            name="location-outline"
            color="white"
            size={23}
            style={{ margin: 30, marginLeft: 21 }}
          ></Ionicons>
          <Text
            style={{
              color: "white",
              marginRight: "76%",
              marginTop: 35,
              marginLeft: -25,
            }}
          >
            {weatherData?.name}{" "}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, position: "absolute", bottom: 0 }}>
        <FlatList
          data={cities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,

                marginBottom: 3,
                marginHorizontal: 10,
                
              }}
            >
              <Text style={{ color: "white" }}> {item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
