import "../global.css";
import Jam from "../assets/waktu";
import Tanggal from "../assets/Tanggal";
import { View, Text, ImageBackground, Image, StatusBar} from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Inter_700Bold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';

export default function Home() {
   useEffect(() => {
    (async () => {
        await NavigationBar.setVisibilityAsync("visible");
        await NavigationBar.setBackgroundColorAsync('#0A2647');
        await NavigationBar.setButtonStyleAsync('light');
    })();
    }, []);

    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular,
        Inter_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View className="flex-1">
            <StatusBar backgroundColor="#32a852" barStyle="light-content" />
            <ImageBackground source={require("../assets/images/Background.jpg")} className="absolute w-full h-full" resizeMode="cover">
                <SafeAreaView className="flex-1 px-6 py-6">
                    <View className="flex-row items-center justify-between">
                        <Text className="font-medium">Pencatatan Utility</Text>
                        <Text className="font-medium">Halaman Utama</Text>
                    </View>
                    <Text className="mt-8 font-bold text-2xl">Welcome👋</Text>
                    <View className="w-full py-4 mt-4 bg-gray-700 rounded-md px-4 flex-row justify-between items-center">
                        <View>
                            <Jam classname="text-white text-2xl font-bold"/>
                            <Tanggal classname="text-white text-sm"/>
                        </View>
                        <Image source={require("../assets/images/Profile.png")} className="bg-black w-12 h-12 rounded-md object-cover"></Image>
                    </View>
                    <View className="flex-1" />
                    <Link href="/laporan" className="bg-gray-700 rounded py-2 mt-20 text-white font-inter-bold text-lg text-center w-full">MENU</Link>
                </SafeAreaView>
            </ImageBackground>            
        </View>
    );
}