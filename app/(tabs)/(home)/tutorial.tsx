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

export default function tutoScreen() {
    const tutorialPages = [
        {
            id: 1,
            content:
                "Prenez en photo vos articles.\n Avoir un bon éclairage et un bon cadrage améliorera vos résultats.",
            image: "camera.gif",
        },
        {
            id: 2,
            content:
                "Vérifier les articles reconnus. \n Ajuster les quantités et les filtres que vous souhaitez.",
            image: "camera.gif",
        },
        {
            id: 3,
            content:
                "Choisissez la recette que vous voulez.\n A vous de jouez !! \n Si une recette vous plait, vous pouvez la mettre en favoris ou l'imprimmer.",
            image: "stats.gif",
        },
        {
            id: 4,
            content:
                "Vous retrouverez vos recettes favorites ainsi que d'autres paramètres sur votre page de profile.",
            image: "stats.gif",
        },
    ];
    const [currentPage, setCurrentPage] = useState(0);

    const resetPage = () => {
        setCurrentPage(0); // Reset to the first page when the component mounts
    };

    const handleNext = () => {
        if (currentPage < tutorialPages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <ThemedView style={styles.container}>
            <View style={styles.buttonHomeContainer}>
                <Link href="/" onPress={resetPage}>
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={50}
                        color="#bfdcc1"
                    />
                </Link>
            </View>
            <Text style={styles.title}>COMMENT ÇA MARCHE ?</Text>
            <View style={styles.tutorialContainer}>
                <Text style={styles.tutorialText}>
                    {tutorialPages[currentPage].content}
                </Text>
                {/* <View style={styles.noticeGif}>
                    <Image source={require(`@/assets/images/tutorial/camera.gif`)} style={styles.imageCenter} />
                </View> */}

                <View style={styles.navigationButtons}>
                    <TouchableOpacity
                        onPress={handlePrevious}
                        style={[
                            styles.navButton,
                            currentPage === 0 && styles.hiddenButton,
                        ]}
                    >
                        <Ionicons
                            name="arrow-back-circle-outline"
                            size={50}
                            color="#bfdcc1"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleNext}
                        style={[
                            styles.navButton,
                            currentPage === tutorialPages.length - 1 &&
                                styles.hiddenButton,
                        ]}
                    >
                        <Ionicons
                            name="arrow-forward-circle-outline"
                            size={50}
                            color="#bfdcc1"
                        />
                    </TouchableOpacity>
                </View>
            </View>
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
        top: 80,
        fontWeight: "bold",
        textAlign: "center",
        fontStyle: "italic",
    },
    tutorialContainer: {
        width: screenWidth * 0.9, // 90% of the screen width
        height: 850, // You can adjust the height as needed
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        },

    tutorialText: {
        fontSize: 20,
        textAlign: "center",
    },
    navigationButtons: {
        position: "absolute",
        bottom: 40,
        flexDirection: "row",
    },
    navButton: {
        padding: 5,
        backgroundColor: "#6a8d5d",
        borderRadius: 50,
        marginHorizontal: 10,
        borderColor: "#b1d9a7",
        borderWidth: 2,
    },
   
    hiddenButton: {
        opacity: 0,
    },
});
