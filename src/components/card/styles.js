import { COLORS } from "../../constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blanchedalmond,
    shadowColor: COLORS.yellow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    paddingVertical: 20,
    borderRadius: 5,
  },
});
