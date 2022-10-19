import {
  View,
  Text,
  Pressable,
  StyleSheet,
  GestureResponderEvent
} from "react-native";

interface PrimaryButtonProp {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProp> = ({ children }) => {
  const pressHandler = (event: GestureResponderEvent) => {
    console.log("pressing button", { event });
  };
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed
            ? [style.pressed, style.buttonInnerContainer]
            : style.buttonInnerContainer
        }
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const style = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden"
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.75
  }
});
