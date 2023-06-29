import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/themes/colors";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 14,
    color: COLORS.text,
  },
  address: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: "bold",
  },
});
