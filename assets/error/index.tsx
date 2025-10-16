import "../../global.css";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, Image} from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

interface Props {
    error : string;
}

const Error = ({error}: Props) => {
    return (
        <SafeAreaView className="flex-1 px-6 justify-center items-center bg-gray-100">
            <View className="bg-white rounded-md shadow-md py-10 px-6 w-full">
                <View className="mx-auto">
                    <Svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 icon icon-tabler icons-tabler-outline icon-tabler-world-question">
                        <Path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <Path d="M20.975 11.33a9 9 0 1 0 -5.673 9.043" />
                        <Path d="M3.6 9h16.8" />
                        <Path d="M3.6 15h9.9" />
                        <Path d="M11.5 3a17 17 0 0 0 0 18" />
                        <Path d="M12.5 3a16.988 16.988 0 0 1 2.57 9.518m-1.056 5.403a17 17 0 0 1 -1.514 3.079" />
                        <Path d="M19 22v.01" />
                        <Path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                    </Svg>
                </View>
                <Text className="text-red-400 text-center mt-4 font-medium">{error}</Text>
                <View>
                    <Link href="/loglist" className="mt-8 py-2 bg-red-500 font-bold px-8 text-white w-full text-center rounded-md">BACK</Link>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Error;