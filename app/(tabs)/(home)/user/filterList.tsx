import { ThemedView } from "@/components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Account() {
    const user = {

        Filters: [
            {
                id: 1,
                title: "Bio",
                iconPath: "bio.png",
            },
            {
                id: 2,
                title: "sans-gluten",
                iconPath: "sans-gluten.png",
            },
            {
                id: 3,
                title: "végétalien",
                iconPath: "vegetalien.png",
            },
            {
                id: 4,
                title: "végétarien",
                iconPath: "vegetarien.png",
            },
            {
                id: 5,
                title: "sans-lactose",
                iconPath: "sans-lactose.png",
            },
            {
                id: 6,
                title: "sans-œufs",
                iconPath: "sans-oeufs.png",
            },
        ]
    };

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

            <View style={styles.filtersContainer}>
                {user.Filters.map((filter) => (
                    <View key={filter.id} style={{ marginBottom: 10 }}>
                        {/* <Image
                            source={require(`@/assets/images/filters/${filter.iconPath}`)}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 5,
                            }}
                        /> */}
                        <Text>{filter.title}</Text>
                        <Ionicons
                            name="close-circle-outline"
                            size={24}
                            color="#f94444"
                            style={{ marginLeft: 10 }}
                            onPress={() => {
                                alert(
                                    `Supprimer le filtre "${filter.title}"`
                                );
                            }}
                        />
                    </View>
                ))}
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
        backgroundColor: "transparent",
    },

    buttonHomeContainer: {
        position: "absolute",
        top: 20,
        left: 15,
        backgroundColor: "transparent",
    },
    buttonLogOutContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        backgroundColor: "transparent",
        borderWidth: 0,
    },
    profilContainer: {
        flex: 1,
        alignItems: "center",
        marginVertical: 30,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#bfdcc1",
    },
    filtersContainer: {
        backgroundColor: "rgba(255,255,255,0.13)",
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.1)",
        marginTop: 20,
    },
    recipesContainer: {
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "rgba(255,255,255,0.13)",
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,0.1)",
    },
    logOutButton: {
        backgroundColor: "#efd2c0",
        borderWidth: 2,
        borderColor: "#f94444",
        borderRadius: 100,
        padding: 10,
    },

    link: {
        color: "#6a8d5d",
        textDecorationLine: "underline",
    },
});
