import "../global.css";
import { View, Text, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import Svg, { Path } from "react-native-svg";

const SeeLoglist = () => {
    return (
        <View className='flex-1'>
            <ImageBackground source={require("../assets/images/rscepoko.png")} className="absolute w-full h-full" resizeMode="cover">
                <SafeAreaView className="flex-1 px-6 py-6 ">
                    <View className="flex-row items-center justify-between  w-full">
                        <Text className="font-medium">Pencatatan Utility</Text>
                        <Text className="font-medium">List Input Loglist</Text>
                    </View>
                    <View className="flex-row flex-wrap items-center gap-3 mt-10 w-full justify-center">
                        <Link href="/InputLog/InputAts" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                            <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                <Text className="text-base font-inter-medium text-gray-700">ATS</Text>
                                <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                            </View>
                        </Link>
                        <Link href="/InputLog/InputCapasitor" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                            <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                <Text className="text-base font-inter-medium text-gray-700">Capasitor Bank</Text>
                                <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                            </View>
                        </Link>
                        <Link href="/InputLog/InputCO2" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                            <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                <Text className="text-base font-inter-medium text-gray-700">CO2</Text>
                                <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                            </View>
                        </Link>
                        <Link href="/InputLog/InputCompressed" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                            <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                <Text className="text-base font-inter-medium text-gray-700">Compressed air</Text>
                                <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                            </View>
                        </Link>
                        <Link href="/InputLog/Genset" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                            <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                <Text className="text-base font-inter-medium text-gray-700">GENSET</Text>
                                <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                            </View>
                        </Link>
                    </View>
                    <View className="flex-1" />
                    <Link href="/laporan" className="bg-gray-700 rounded py-2 mt-20 text-white font-inter-bold text-lg text-center w-full">MENU</Link>
                </SafeAreaView>
            </ImageBackground>
            <View className="w-full h-10 backdrop-blur-sm bg-gray-600" />
            <View className="w-full h-14 bottom-0 absolute bg-gray-800 backdrop-blur-2xl"/>
        </View>
    );
};

export default SeeLoglist;