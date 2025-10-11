import "../global.css";
import Jam from "../assets/waktu";
import Tanggal from "../assets/Tanggal";
import { View, Text, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Inter_700Bold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function Home() {
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
            <View className="w-full h-10 backdrop-blur-sm bg-gray-600" />
            <View className="w-full h-14 bottom-0 absolute bg-gray-800 backdrop-blur-2xl hover:bg-gray-600 active:bg-gray-600"/>
        </View>
    );
}