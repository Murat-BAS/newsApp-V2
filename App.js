import { Text, View, FlatList, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import news_data from "./src/news_data.json";
import news_banner from "./src/news_banner_data.json"
import News from "./src/NewsCard/app";
import Style from "./src/NewsCard/style";

export default function App() {

  const newsCard = ({ item }) => <News newsCont={item}></News>
  // const newsKey = item => { item.u_id.toString() }

  return (
    <View style={mainStyle.mainContainer}>
      <Text style={mainStyle.main_title}>News</Text>
      
      <FlatList
        ListHeaderComponent={
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner.map(bannerData => (
              <Image source={{ uri: bannerData.imageUrl }} style = {mainStyle.banner_container}></Image>
            ))}
          </ScrollView>
        }
        data={news_data}
        renderItem={newsCard}
        keyExtractor={item => item.u_id.toString()}
      ></FlatList>
    </View>
  );
}

const mainStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e3e3e3",
    marginTop: 40,
  },
  main_title: {
    fontSize: 50,
    fontWeight: "300"
  },
  banner_container: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 5,
  }
})
