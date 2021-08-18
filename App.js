import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    data: [
      { image: require("./assets/pic-1.jpg"), id: 1, liked: false },
      { image: require("./assets/pic-2.jpg"), id: 2, liked: false },
      { image: require("./assets/pic-3.jpg"), id: 3, liked: false },
    ],
  };

  onPicLike = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((el) => {
        if (el.id === id) {
          el.liked = !el.liked;
        }
        return el;
      }),
    }));
  };

  render() {
    const liked_only = this.state.data.filter((el) => el.liked);
    return (
      <SafeAreaView style={styles.container}>
        <Header counter={liked_only.length} />
        <ScrollView style={styles.body}>
          {this.state.data.map((item) => (
            <Card
              image={item.image}
              id={item.id}
              liked={item.liked}
              onLike={this.onPicLike}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0CEE2",
  },
  body: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
});

export default App;
