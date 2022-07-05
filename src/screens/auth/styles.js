import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 350,
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 18,
        fontFamily: 'SourceSansPro-Bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    prompt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    promptMessage: {
        fontSize: 14,
        fontFamily: 'SourceSansPro-Regular',
        color: colors.text,
        marginRight: 15
    },
    promptButton: {
        fontSize: 14,
        fontFamily: 'SourceSansPro-Bold',
        color: colors.primary,
        textAlign: 'center',
    }
});