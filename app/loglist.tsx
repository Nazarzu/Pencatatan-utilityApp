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
                            <Link href="/SeeLog/ats" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">ATS</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/capasitor" className="bg-white ro text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Capasitor Bank</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/co2" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">CO2</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/compressed" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Compressed air</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/deepwell" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Deepwell 1</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/deepwell2" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Deepwell 2</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/deepwell3" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Deepwell 3</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/fire" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Fire Pump</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/genset" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Genset 1</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/genset2" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Genset 2</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/genset3" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Genset 3</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/pln" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">KWH PLN</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/liquid" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Liquid</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/lvmdb" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">LVMDB 1</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/lvmdb2" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">LVMDB 2</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/n2o" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">N2O</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/oksigen" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Oksigen</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/pdam" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">PDAM</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/trafo" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Ruang Trafo</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/suply" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="font-medium text-gray-700">Supply listrik</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                            <Link href="/SeeLog/vacum" className="bg-white rounded-md text-lg w-full basis-[48%] shadow-md">
                                <View className="flex-row items-center justify-between w-full py-4 pl-4 pr-1">
                                    <Text className="text-base font-medium text-gray-700">Vacum</Text>
                                    <Svg width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><Path stroke="none" d="M0 0h24v24H0z" fill="none"/><Path d="M9 6l6 6l-6 6" /></Svg>
                                </View>
                            </Link>
                        </View>
                        <Link href="/laporan" className="bg-gray-700 rounded py-2 mt-36 text-white font-bold text-lg text-center w-full">MENU</Link>
                    </SafeAreaView>
                </ScrollView>
            </ImageBackground>
        </View>
    )
};

export default Loglist;