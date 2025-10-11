import "../../global.css";
import React, { useState } from "react";
import { View, TextInput, Button, Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwbyOCL-IVVtprlEm2Yb9jNs4XRHErwtCqff4a2RoKQRiPc-nZnWLfbyLVfhsjl8KuQfQ/exec";

const Genset = () => {
    const [status1, setStatus1] = useState("");
    const [accu1, setAccu1] = useState("");
    const [status2, setStatus2] = useState("");
    const [accu2, setAccu2] = useState("");
    const [status3, setStatus3] = useState("");
    const [accu3, setAccu3] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [petugas, setPetugas] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if( !status1 || !accu1 || !status2 || !accu2 || !status3 || !accu3 || !petugas) {
            return Alert.alert("Harap isi semua kolom yang wajib (*).");
        }
        setLoading(true);
        try {
            const payload = { status1, accu1, status2, accu2, status3, accu3, keterangan, petugas, api_key: "api_key_20251010_4f8c2e9b7a1d4c6e8f3a0b2d9e7c5a1f6b3d8c2e9f0a4b6d7c1e3f9a0b2d4c6"};

            const res = await fetch(SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json = await res.json();
            if (json.status === "success") {
                Alert.alert("Sukses", "Data tersimpan di Google Sheet");
                setStatus1(""); setAccu1(""); setStatus2(""); setAccu2(""); setStatus3(""); setAccu3(""); setKeterangan(""); setPetugas(""); setLoading(false);
            } else {
                Alert.alert("Gagal", json.message || "Terjadi kesalahan");
            }
        } catch (err) {
            if (err instanceof Error) {
                Alert.alert("Error", err.message);
            } else {
                Alert.alert("Error", "Terjadi kesalahan tak dikenal");
            }
        }
    };

    const opsi = ["AUTO", "MANUAL", "OFF"];
    const opsi2 = ["AUTO", "MANUAL", "OFF"];
    const nama = ["EDI MURWANTO", "SUTORO", "ALIP A. RIYANTO", "MULYADI"];

    return(
        <View className="flex-1">
            <View className="w-full h-10 backdrop-blur-sm bg-gray-600 absolute z-10" />
            <SafeAreaView className="flex-1 bg-gray-100">
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
                    <ScrollView contentContainerStyle={{ padding: 14 }}>
                        <Image source={require("../../assets/images/logoas.png")} className="w-80 mx-auto h-24 rounded-md object-cover mb-8"></Image>
                        <View className="px-6 py-8 bg-white rounded-md shadow-md">
                            <Text className="text-xl font-bold mb-4">Form Pencatatan Genset</Text>
                            <Text className="mb-3">Status genset 60 Kva {!status1 && <Text className="text-red-500">*</Text>}</Text>
                            <View className="flex-row justify-between mb-4">
                                {opsi.map((item) => (
                                    <TouchableOpacity key={item} onPress={() => setStatus1(item)}  className={`flex-row items-center px-3 py-2 border rounded ${status1 === item ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                                        <View className={`w-4 h-4 mr-2 rounded-full border ${status1 === item ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}/>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View className="flex-row gap-1 items-center mb-3">
                                <Text>Accu voltage {!accu1 && <Text className="text-red-500">*</Text>}</Text>
                                <Text className="text-gray-500 text-xs">(genset 60 Kva)</Text>
                            </View>
                            <TextInput value={accu1} onChangeText={setAccu1} placeholder="Masukan accu voltage..." className="border border-gray-300 placeholder:text-gray-400 p-3 mb-3 rounded focus:border-blue-500" />

                            <Text className="mb-3">Status genset 800 Kva {!status2 && <Text className="text-red-500">*</Text>}</Text>
                            <View className="flex-row justify-between mb-4">
                                {opsi2.map((item2) => (
                                    <TouchableOpacity key={item2} onPress={() => setStatus2(item2)}  className={`flex-row items-center px-3 py-2 border rounded ${status2 === item2 ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                                        <View className={`w-4 h-4 mr-2 rounded-full border ${status2 === item2 ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}/>
                                        <Text>{item2}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View className="flex-row gap-1 items-center mb-3">
                                <Text>Accu voltage {!accu2 && <Text className="text-red-500">*</Text>}</Text>
                                <Text className="text-gray-500 text-xs">(genset 800 Kva)</Text>
                            </View>
                            <TextInput value={accu2} onChangeText={setAccu2} placeholder="Masukan accu voltage..." className="border border-gray-300 placeholder:text-gray-400 p-3 mb-3 rounded focus:border-blue-500"/>

                            <Text className="mb-3">Status genset 1390 Kva {!status3 && <Text className="text-red-500">*</Text>}</Text>
                            <View className="flex-row justify-between mb-4">
                                {opsi2.map((item2) => (
                                    <TouchableOpacity key={item2} onPress={() => setStatus3(item2)}  className={`flex-row items-center px-3 py-2 border rounded ${status3 === item2 ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                                        <View className={`w-4 h-4 mr-2 rounded-full border ${status3 === item2 ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}/>
                                        <Text>{item2}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View className="flex-row gap-1 items-center mb-3">
                                <Text>Accu voltage {!accu3 && <Text className="text-red-500">*</Text>}</Text>
                                <Text className="text-gray-500 text-xs">(genset 1390 Kva)</Text>
                            </View>
                            <TextInput value={accu3} onChangeText={setAccu3} placeholder="Masukan accu voltage..." className="border border-gray-300 placeholder:text-gray-400 p-3 mb-3 rounded focus:border-blue-500"/>

                            <Text className="mb-3">Petugas {!petugas && <Text className="text-red-500">*</Text>}</Text>
                            <View className="flex-col gap-4 justify-between mb-4">
                                {nama.map((item2) => (
                                    <TouchableOpacity key={item2} onPress={() => setPetugas(item2)}  className={`flex-row items-center px-3 py-2 border rounded ${petugas === item2 ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                                        <View className={`w-4 h-4 mr-2 rounded-full border ${petugas === item2 ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}/>
                                        <Text>{item2}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <Text className="mb-3">Keterangan</Text>
                            <TextInput value={keterangan} onChangeText={setKeterangan} placeholder="Keterangan" multiline className="border border-gray-300 focus:border-blue-500 placeholder:text-gray-400 p-3 mb-4 rounded h-28 items-start text-justify" numberOfLines={5} textAlignVertical="top"/>

                            {/* <Button title={loading ? "Mengirim..." : "Kirim"} onPress={handleSubmit} disabled={loading}/> */}
                            <TouchableOpacity onPress={handleSubmit} disabled={loading} className="bg-gray-700 rounded py-2 mt-10 text-white font-inter-bold text-lg text-center w-full">
                                <Text className="text-white text-center font-inter-bold">{loading ? "Mengirim..." : "KIRIM"}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
            <View className="w-full h-14 bottom-0 absolute bg-gray-800 backdrop-blur-2xl"/>
        </View>
    );
};

export default Genset;