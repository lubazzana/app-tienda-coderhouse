import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        height: 90,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        elevation: 3,
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detail: {
        flexWrap: 'wrap',
    },
    date: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 14,
    },
    total: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 16,
        color: colors.primary,
    },
});