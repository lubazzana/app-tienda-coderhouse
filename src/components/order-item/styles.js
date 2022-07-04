import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
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
        padding: 10,
        marginVertical: 10,
    },
    headerContainer: {},
    header: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 14,
    },
    containerDetail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detail: {},
    detailTotal: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 16,
        color: colors.primary,
    },
});