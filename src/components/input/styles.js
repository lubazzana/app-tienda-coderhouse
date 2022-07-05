import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: "SourceSansPro-Regular",
    },
    message: {},
    helperText: {},
});