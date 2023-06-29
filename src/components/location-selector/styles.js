import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/themes/colors";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.black,
    borderWidth: 1,
    marginBottom: 20,
  },
  actions: {
    paddingVertical: 5,
  },
});
