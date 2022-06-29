import { StyleSheet } from "react-native";
import {colors} from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.white,
    },
    cartList: {
        flex: 1,
    },
    footer: {
        borderTopColor: colors.gray,
        borderTopWidth: 1,
        paddingVertical: 10,
    },
    buttonConfirm: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'SourceSansPro-Regular',
        color: colors.white,
    },
    totalContainer: {
        flex: 0.40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalTitle: {
        fontSize: 14,
        fontFamily: 'SourceSansPro-Regular',
        color: colors.white,
    },
    total: {
        fontSize: 16,
        fontFamily: 'SourceSansPro-Bold',
        color: colors.white,
    }
});