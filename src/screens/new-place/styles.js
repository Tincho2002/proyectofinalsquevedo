import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/themes/colors";

/*import colors from "../../utils/colors";*/

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 16,
    paddingBottom: 15,
  },
  input: {
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
  },
});
