import { View, Text } from "react-native";

interface PrimaryButtonProp {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProp> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
