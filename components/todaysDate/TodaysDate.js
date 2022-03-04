import { StyleSheet, Text, View } from "react-native";

const TodaysDate = (props) => {
  const date = new Date();

  let today = date.toDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.textDate}>{today}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textDate: {
    fontSize: 24,
    color: "#f8f4f9",
    fontWeight: "bold",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    textShadowColor: "#000",
  },
});

export default TodaysDate;
