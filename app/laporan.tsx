import "../global.css";
import { View, Text, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import Svg, { Path } from "react-native-svg";

const  laporan = () => {
    return (
        <View className='flex-1'>
            <ImageBackground source={require("../assets/images/RS.jpg")} className="absolute w-full h-full" resizeMode="cover">
                <SafeAreaView className="flex-1 px-6 py-6">
                    <View className="flex-row items-center justify-between  w-full">
                        <Text className="font-medium">Pencatatan Utility</Text>
                        <Text className="font-medium">Halaman Menu</Text>
                    </View>
                    <View className="bg-gray-600 px-6 py-6 rounded-md mt-48">
                        <Text className="text-white text-xl font-bold">List menu laporan 📒</Text>
                        <View className="mt-8">
                            <Link href="/SeeLoglist" className="bg-white rounded-md font-inter-bold text-lg">
                                <View className="flex-row items-center justify-between w-full pr-2">
                                <View className="flex-row items-center">
                                    <View className="w-3 h-16 bg-green-500 rounded-l-md"></View>
                                    <Text className="text-lg font-inter-medium text-gray-700 ml-4 mr-2">Input Loglist</Text>
                                    <Svg  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.7"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text">
                                        <Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><Path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><Path d="M9 12h6" /><Path d="M9 16h6" />
                                    </Svg>
                                </View>
                                <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/laporan" className="bg-white mt-5 rounded-md font-inter-bold text-lg">
                                <View className="flex-row items-center justify-between w-full pr-2">
                                    <View className="flex-row items-center">
                                        <View className="w-3 h-16 bg-blue-500 rounded-l-md"></View>
                                        <Text className="text-lg font-inter-medium text-gray-700 ml-4 mr-2">Lihat Loglist</Text>
                                        <Svg   width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.7"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-search"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h4.5m7.5 -10v-4a2 2 0 0 0 -2 -2h-2" /><Path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M20.2 20.2l1.8 1.8" /></Svg>
                                    </View>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                        </View>
                    </View>
                    <View className="flex-1" />
                    <Link href="/" className="bg-gray-700 rounded py-2 mt-20 text-white font-inter-bold text-lg text-center w-full">HOME</Link>
                </SafeAreaView>
            </ImageBackground>
            <View className="w-full h-10 backdrop-blur-sm bg-gray-600" />
            <View className="w-full h-14 bottom-0 absolute bg-gray-800 backdrop-blur-2xl"/>
        </View>
    );
}

export default laporan;