import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons"; // Import camera icon
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.topLeftContainer}>
                <Link
                    href="/history"
                    style={[styles.Button]}
                >
                    <Ionicons name="archive" size={30} color="#b1d9a7" />
                </Link>
            </View>

            <View style={styles.logoContainer}>
                <Image
                    source={require("@/assets/images/logo.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.centerContainer}>
                <Text style={styles.title}>Scan'Eat</Text>

                <View style={styles.sloganContainer}>
                    <Text style={styles.slogan}>
                        Scannez, découvrez, dégustez !
                    </Text>
                </View>
            </View>

            <View style={styles.cameraContainer}>
                <Link
                    href="/camera"
                    style={[styles.Button, styles.cameraButton]}
                >
                    <Ionicons name="camera" size={80} color="#b1d9a7" />
                </Link>
            </View>

            <View style={styles.bottomContainer}>
                <Link
                    href="/tutorial"
                    style={[styles.Button ]}
                >
                    <Ionicons name="book" size={30} color="#b1d9a7" />
                </Link>

                <TouchableOpacity style={[styles.Button]}>
                    <Ionicons name="person" size={30} color="#b1d9a7" />
                </TouchableOpacity>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", // Center content vertically
        zIndex: 1, // Ensure the container is above the wallpaper
    },

    topLeftContainer: {
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 2, // Ensure it is above other elements
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    centerContainer: {
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        padding: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 100, // Add spacing below the center container
        marginHorizontal: 20, // Add horizontal spacing
    },
    sloganContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    cameraContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    bottomContainer: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    logo: {
        height: 200,
        width: 200,
    },
    slogan: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        fontStyle: "italic",
        textAlign: "center", // Center the text
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        paddingBottom: 15,
        color: "#333",
        textAlign: "center", // Center the text
    },
    cameraButton: {
        bottom: 32,
    },

    Button: {
        backgroundColor: "#6a8d5d",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        padding: 10,
        shadowOpacity: 0.55,
        shadowRadius: 3.04,
        elevation: 5,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#b1d9a7",
        borderWidth: 2,
    },
});
