import "../../global.css";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Loading = () => {
    return(
        <View className="flex-1">
            <SafeAreaView className="flex-1 p-4 bg-gray-100">
                <ScrollView className="mb-4">
                    <View className="animate-pulse">
                        <View className="w-80 mx-auto h-24 rounded-md object-cover mb-8 bg-gray-200"></View>
                    </View>
                    <View className="px-6 py-8 bg-white shadow-md rounded-md">
                        <View className="animate-pulse">
                            <View className="p-2 w-28 bg-gray-300 rounded-md"></View>
                            <View className="mt-4 animate-pulse">
                                <View className="flex-row bg-gray-200 rounded-t-md">
                                    <Text className="px-5 py-4 font-medium w-36 text-left"></Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row border border-t-0 border-gray-200 animate-pulse">
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-14 bg-gray-200 rounded-md"></View>
                            </View>
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-28 px-2 bg-gray-200 rounded-md"></View>
                            </View>
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-8 px-2 bg-gray-200 rounded-md"></View>
                            </View>
                        </View>
                        <View className="flex-row border border-t-0 border-gray-200 animate-pulse">
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-14 bg-gray-200 rounded-md"></View>
                            </View>
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-28 px-2 bg-gray-200 rounded-md"></View>
                            </View>
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-8 px-2 bg-gray-200 rounded-md"></View>
                            </View>
                        </View>
                        <View className="flex-row border border-t-0 border-gray-200 animate-pulse">
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-14 bg-gray-200 rounded-md"></View>
                            </View>
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-28 px-2 bg-gray-200 rounded-md"></View>
                            </View>
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-8 px-2 bg-gray-200 rounded-md"></View>
                            </View>
                        </View>
                        <View className="flex-row border border-t-0 border-gray-200 animate-pulse">
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-14 bg-gray-200 rounded-md"></View>
                            </View>
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-28 px-2 bg-gray-200 rounded-md"></View>
                            </View>
                            <View className="px-5 py-6 text-left">
                                <View className="py-2 w-8 px-2 bg-gray-200 rounded-md"></View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View className="animate-pulse">
                    <View className="bg-gray-400 rounded py-6 text-white font-bold text-lg text-center w-full" />
                </View>
            </SafeAreaView>
        </View>
    )
};

export default Loading;