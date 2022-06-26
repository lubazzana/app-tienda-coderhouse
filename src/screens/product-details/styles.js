import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    details: {
        height: height / 2,
        justifyContent: "space-around",
        alignItems: "center",
    },
    text: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 20,
    },
});