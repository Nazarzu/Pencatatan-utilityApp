import "../global.css";
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import Svg, { Path } from "react-native-svg";

const Loglist = () => {
    return (
        <View className='flex-1'>
            <ImageBackground source={require("../assets/images/irna.jpg")} className="absolute w-full h-full" resizeMode="cover">
                <ScrollView>
                    <SafeAreaView className="flex-1 px-6 py-6 ">
                        <View className="flex-row items-center justify-between  w-full">
                            <Text className="font-medium">Pencatatan Utility</Text>
                            <Text className="font-medium">List Lihat Loglist</Text>
                        </View>
                        <View className="flex-row flex-wrap items-center gap-3 mt-10 w-full justify-center">
                            <Link href="/SeeLog/ats" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
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
                            <Link href="/InputLog/InputDeepwell" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">Deepwell</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputFire" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">Fire Pump</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/Genset" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">Genset</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputPLN" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">KWH PLN</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputLiquid" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">Liquid</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputLVMDB" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">LVMDB</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputN2O" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">N2O</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputOksigen" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">Oksigen</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputPDAM" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">PDAM</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputTrafo" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">Ruang Trafo</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputListrik" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">Supply listrik</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/InputLog/InputVacum" className="bg-white rounded-md font-inter-bold text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-inter-medium text-gray-700">Vacum</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                        </View>
                        <Link href="/laporan" className="bg-gray-700 rounded py-2 mt-36 text-white font-inter-bold text-lg text-center w-full">MENU</Link>
                    </SafeAreaView>
                </ScrollView>
            </ImageBackground>
        </View>
    )
};

export default Loglist;