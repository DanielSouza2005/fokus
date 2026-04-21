import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ active, onPress, displayText }) => {
    return (
        <Pressable
            style={active ? styles.actionButtonTextActive : null}
            onPress={onPress}
        >
            <Text style={styles.actionButtonText}>
                {displayText}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    actionButtonTextActive: {
        backgroundColor: "#144480",
        borderRadius: 8,
    },
    actionButtonText: {
        color: "#FFF",
        fontSize: 12.5,
        padding: 8,
    },
});