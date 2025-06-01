import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <LinearGradient
            colors={["#3d5436", "#b1d9a7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    {/* Bouton en haut à gauche */}
                    <View style={styles.topLeft}>
                        <Link
                            href="/history"
                            style={[styles.Button, { width: 55, height: 55 }]}
                        >
                            <Ionicons
                                name="archive"
                                size={30}
                                color="#b1d9a7"
                            />
                        </Link>
                    </View>

                    {/* Contenu central */}
                    <View style={styles.content}>
                        <Image
                            source={require("@/assets/images/logo.png")}
                            style={styles.logo}
                        />
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
                                style={styles.Button}
                            >
                                <Ionicons
                                    name="camera"
                                    size={80}
                                    color="#b1d9a7"
                                />
                            </Link>
                        </View>
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Link
                            href="/tutorial"
                            style={[styles.Button, { width: 55, height: 55 }]}
                        >
                            <Ionicons name="book" size={30} color="#b1d9a7" />
                        </Link>
                        <Link
                            href="/user/account"
                            style={[styles.Button, { width: 55, height: 55 }]}
                        >
                            <Ionicons name="person" size={30} color="#b1d9a7" />
                        </Link>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    topLeft: {
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 10,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    centerContainer: {
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 40, // Add horizontal spacing
        backdropFilter: "blur(10px)",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.1)",
    },
    sloganContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    cameraContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    logo: {
        height: 150,
        width: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    slogan: {
        fontSize: 16,
        fontStyle: "italic",
        color: "#333",
    },
    

    Button: {
        backgroundColor: "#6a8d5d",
        padding: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#b1d9a7",
        borderWidth: 2,
    },
});
