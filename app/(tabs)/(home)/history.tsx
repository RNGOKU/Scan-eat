import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons"; // Import camera icon
import { Link } from "expo-router";
import { useState } from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function historicScreen() {
   
    return (
        <ThemedView style={styles.container}>
            <View style={styles.buttonHomeContainer}>
                <Link href="/" >
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={50}
                        color="#bfdcc1"
                    />
                </Link>
            </View>
            <Text style={styles.title}>Historique de recette</Text>
            
        </ThemedView>
    );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonHomeContainer: {
        position: "absolute",
        top: 30,
        left: 0,
        backgroundColor: "transparent",
        zIndex: 3,
    },
    title: {
        fontSize: 24,
        top: 40,
        fontWeight: "bold",
        textAlign: "center",
        fontStyle: "italic",
    },
    tutorialContainer: {
        width: screenWidth * 0.9, // 90% of the screen width
        height: 850, // You can adjust the height as needed
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },

    tutorialText: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
    },
   
    navButton: {
        padding: 10,
        backgroundColor: "#6a8d5d",
        borderRadius: 15,
        marginHorizontal: 10,
        borderColor: "#b1d9a7",
        borderWidth: 2,
    },
    navButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    hiddenButton: {
        opacity: 0,
    },
});
