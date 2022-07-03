import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 20,
        height: 180,
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.white,
    },
    name: {
        fontSize: 14,
        fontFamily: 'SourceSansPro-Bold',
    },
    details: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 12,
    },
});