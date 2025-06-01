import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";
export default function LogIn() {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.buttonHomeContainer}>
                <Link href="/">
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={50}
                        color="#bfdcc1"
                    />
                </Link>
            </View>
            <View style={styles.shapeContainer}>
                <LinearGradient
                    colors={["#3d5436", "#b1d9a7"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.shapeGreen}
                ></LinearGradient>
                <LinearGradient
                    colors={["#efd2c0", "#ecbcaa"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.shapeSalmon}
                ></LinearGradient>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Se connecter</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    secureTextEntry
                />
                <Button
                    title="Se connecter"
                    onPress={() => {
                        /* Handle login */
                    }}
                    color="#6a8d5d"
                />
                <View style={styles.noAccountContainer}>
                    <Text>Vous n'avez pas de compte ?</Text>
                    <Link href="/user/signIn" style={styles.link}>
                        Créer un compte
                    </Link>
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    shapeContainer: {
        position: "absolute",
        width: 430,
        height: 520,
        transform: [{ translateX: -215 }, { translateY: -260 }],
    },

    shapeSalmon: {
        position: "absolute",
        height: 150,
        width: 150,
        borderRadius: 100,
        right: -150,
        bottom: -200,
    },
    shapeGreen: {
        position: "absolute",
        height: 150,
        width: 150,
        borderRadius: 100,
        right: 100,
        bottom: 200,
    },
    buttonHomeContainer: {
        position: "absolute",
        top: 20,
        left: 15,
        backgroundColor: "transparent",
        zIndex: 3, // Ensure buttons are above the camera
    },
    formContainer: {
        backgroundColor: "rgba(255,255,255,0.13)",
        borderRadius: 10,
        padding: 20,
        backdropFilter: "blur(10px)",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.1)",
    },
    title: {
        fontSize: 32,
        fontWeight: "500",
        textAlign: "center",
        marginBottom: 24,
    },
    input: {
        height: 50,
        backgroundColor: "rgba(255,255,255,0.27)",
        borderRadius: 3,
        width: 300,
        paddingHorizontal: 10,
        marginVertical: 16,
        fontSize: 14,
        fontWeight: "300",
    },
    button: {
        backgroundColor: "#6a8d5d",
        borderRadius: 3,
        width: 300,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    noAccountContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    link: {
        color: "#6a8d5d",
        textDecorationLine: "underline",
    },
});
