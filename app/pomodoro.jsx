import { useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Footer } from "../components/Footer";
import { Timer } from "../components/Timer";
import { IconPause, IconPlay } from "../components/icons";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require("../assets/images/pomodoro.png"),
    displayText: "Foco",
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require("../assets/images/short.png"),
    displayText: "Pausa Curta",
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require("../assets/images/long.png"),
    displayText: "Pausa Longa",
  },
]

export default function Pomodoro() {

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clearTimer();
  }

  const resetTimer = () => {
    clearTimer();
    setSeconds(timerType.initialValue);
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      clearTimer();
      return;
    }

    setTimerRunning(true);
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clearTimer();
          return timerType.initialValue;
        }
        return oldState - 1;
      })
    }, 1000);

    timerRef.current = id;
  }

  return (
    <View style={styles.container}>
      <Image source={timerType.image}></Image>

      <View style={styles.actions}>
        <View style={styles.categories}>

          {pomodoro.map((item) => (
            <ActionButton
              key={item.id}
              active={timerType.id === item.id}
              onPress={() => toggleTimerType(item)}
              displayText={item.displayText}
            />
          ))}

        </View>

        <Timer totalSeconds={seconds} />

        <View style={styles.buttons}>
          <FokusButton
            onPress={toggleTimer}
            title={timerRunning ? "Pausar" : "Começar"}
            icon={timerRunning ? <IconPause /> : <IconPlay />}
          />

          <FokusButton
            onPress={resetTimer}
            title="Reiniciar"
          />
        </View>

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
  buttons: {
    gap: 16,
  },
});
