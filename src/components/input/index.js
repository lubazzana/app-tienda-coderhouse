import { Text, TextInput, View } from "react-native";

import Label from "../label";
import React from "react";
import { styles } from "./styles";

const Input = ({
    editable,
    children,
    value,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    ...props
}) => {
    return(
        <View style={styles.container}>
            <Label { ...props }>
                <TextInput
                    {...props}
                    style={styles.input}
                    editable={editable}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                />
            </Label>
            <View style={styles.message}>
                <Text style={styles.helperText}>{}</Text>
            </View>
        </View>
    )
};

export default Input;
