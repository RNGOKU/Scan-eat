import { ThemedView } from "@/components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Account() {
    const user = {
        firstname: "Lucas",
        lastname: "Tardif",
        email: "lucas.tardif6@gmail.com",
        favoritesFilters: [
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
        ],
        favoritesRecipes: [
            {
                id: 1,
                title: "Pasta Carbonara",
            },
            {
                id: 2,
                title: "Chicken Curry",
            },
        ],
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

            <View style={styles.profilContainer}>
                <Image
                    source={require("@/assets/images/account/avatar.png")}
                    style={styles.avatar}
                />
                <Text style={{ fontSize: 30 }}>
                    {user.firstname} {user.lastname}
                </Text>
                <Text style={{ color: "#bfdcc1", fontSize: 18 }}>
                    {user.email}
                </Text>
                <View style={styles.filtersContainer}>
                    <View style={styles.filtersHeader}>
                        <Text
                            style={{
                                fontSize: 18,
                                marginRight: 20,
                            }}
                        >
                            Filtres favoris :
                        </Text>
                        <Link href="/user/filterList">
                            <Ionicons
                                name="add-circle-outline"
                                size={40}
                                color="#bfdcc1"
                            />
                        </Link>
                    </View>

                    {user.favoritesFilters.length === 0 ? (
                        <Text>aucun filtre enregistré</Text>
                    ) : (
                        user.favoritesFilters.map((filter) => (
                            <View
                                key={filter.id}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 10,
                                }}
                            >
                                {/* <Image
                                    // source={require("@/assets/regime/" + filter.iconPath)}
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
                                        // TODO: Implémenter la suppression du filtre ici
                                        alert(
                                            `Supprimer le filtre "${filter.title}"`
                                        );
                                    }}
                                />
                            </View>
                        ))
                    )}
                </View>
                <View style={styles.recipesContainer}>
                    <Text
                        style={{
                            fontSize: 18,
                            marginTop: 10,
                        }}
                    >
                        Recettes favorites :
                    </Text>
                    {user.favoritesRecipes.length === 0 ? (
                        <Text style={{ color: "#bfdcc1" }}>
                            aucune recette enregistrée
                        </Text>
                    ) : (
                        user.favoritesRecipes.map((recipe) => (
                            <View
                                key={recipe.id}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 10,
                                }}
                            >
                                <Text >
                                    {recipe.title}
                                </Text>
                                <Ionicons
                                    name="close-circle-outline"
                                    size={24}
                                    color="#f94444"
                                    style={{ marginLeft: 10 }}
                                    onPress={() => {
                                        // TODO: Implémenter la suppression du filtre ici
                                        alert(
                                            `Supprimer le filtre "${recipe.title}"`
                                        );
                                    }}
                                />
                            </View>
                        ))
                    )}
                </View>
            </View>
            <View style={styles.buttonLogOutContainer}>
                <Link href="/" style={styles.logOutButton}>
                    <Ionicons
                        name="log-out-outline"
                        size={30}
                        color="#f94444"
                    />
                </Link>
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
    filtersHeader: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
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
