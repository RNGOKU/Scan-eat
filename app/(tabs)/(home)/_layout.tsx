import { Stack } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function HomeLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="camera" options={{ headerShown: false }} />
            <Stack.Screen
                name="tutorial"
                options={{
                    headerShown: false,
                    presentation: "modal",
                    animation: "slide_from_bottom", // Explicitly set animation
                }}
            />
            <Stack.Screen
                name="history"
                options={{
                    headerShown: false,
                    presentation: "modal",
                    animation: "slide_from_left", // Explicitly set animation
                }}
            />
            <Stack.Screen name="user/logIn" options={{ headerShown: false }} />
            <Stack.Screen name="user/signIn" options={{ headerShown: false }} />
            <Stack.Screen
                name="user/account"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="user/filterList"
                options={{
                    headerShown: false,
                    presentation: "modal",
                    animation: "slide_from_bottom", // Explicitly set animation
                }}
            />
            <Stack.Screen
                name="recipe/viewRecipe"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="recipe/recipeList"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
