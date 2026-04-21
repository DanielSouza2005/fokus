import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Footer } from "../components/Footer";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require("../assets/images/pomodoro.png"),
    displayText: "Foco",
  },
  {
    id: 'short',
    initialValue: 5,
    image: require("../assets/images/short.png"),
    displayText: "Pausa Curta",
  },
  {
    id: 'long',
    initialValue: 15,
    image: require("../assets/images/long.png"),
    displayText: "Pausa Longa",
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image source={timerType.image}></Image>

      <View style={styles.actions}>
        <View style={styles.categories}>

          {pomodoro.map((item) => (
            <ActionButton
              key={item.id}
              active={timerType.id === item.id}
              onPress={() => setTimerType(item)}
              displayText={item.displayText}
            />
          ))}

        </View>

        <Timer totalSeconds={timerType.initialValue} />

        <FokusButton />

      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});