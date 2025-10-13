import "../../global.css";
import React, { useState } from "react";
import { View, TextInput, Alert, Platform, ScrollView, Text, TouchableOpacity, Image} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from "react-native-safe-area-context";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwP7XDg5fX3yyH8y6ybEOtSX0DZF1JQKCN1W0KlUYajITARxt5DJWOpuw8o8-M8H6a0gw/exec";

const InputListrik = () => {

    const [status, setStatus] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [petugas, setPetugas] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [lainnya, setLainnya] = useState("");
    const [showLainnyaInput, setShowLainnyaInput] = useState(false);

    const opsi = ["PLN", "GENSET"]
    const nama = ["EDI MURWANTO", "SUTORO", "ALIP A. RIYANTO", "MULYADI"];

    const handleSubmit = async () => {
        const petugasFinal = petugas === "Lainnya" ? lainnya.trim() : petugas
        if( !status || !petugasFinal) {
            return Alert.alert("Harap isi semua kolom yang wajib (*).");
        }
        setLoading(true);
        try {
            const payload = { status, keterangan, petugas: petugasFinal, api_key: "api_key_20251010_4f8c2e9b7a1d4c6e8f3a0b2d9e7c5a1f6b3d8c2e9f0a4b6d7c1e3f9a0b2d4c6"};

            const res = await fetch(SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json = await res.json();
            if (json.status === "success") {
                Alert.alert("Sukses", "Data tersimpan di Google Sheet");
                setStatus(""); setKeterangan(""); setPetugas(""); setLainnya(""); setShowLainnyaInput(false);
            } else {
                Alert.alert("Gagal", json.message || "Terjadi kesalahan");
            }
        } catch (err) {
            if (err instanceof Error) {
                Alert.alert("Error", err.message);
            } else {
                Alert.alert("Error", "Terjadi kesalahan tak dikenal");
            }
        } finally {
            setLoading(false);
        }
    };

    return(
        <View className="flex-1">
            <SafeAreaView className="flex-1 bg-gray-100">
                <KeyboardAwareScrollView extraScrollHeight={80} enableOnAndroid={true} keyboardOpeningTime={0} scrollEnabled={true} className="flex-1">
                    <ScrollView contentContainerStyle={{ padding: 14 }}>
                        <Image source={require("../../assets/images/logoas.png")} className="w-80 mx-auto h-24 rounded-md object-cover mb-8"></Image>
                        <View className="px-6 py-8 bg-white rounded-md shadow-md">
                            <Text className="text-xl font-bold mb-4">Form Pencatatan Supply listrik</Text>
                            
                            <Text className="mb-3">Status {!status && <Text className="text-red-500">*</Text>}</Text>
                            <View className="flex-col gap-4 justify-between mb-4">
                                {opsi.map((item) => (
                                    <TouchableOpacity key={item} onPress={() => setStatus(item)}  className={`flex-row items-center px-3 py-2 border rounded ${status === item ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                                        <View className={`w-4 h-4 mr-2 rounded-full border ${status === item ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}/>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <Text className="mb-3">Keterangan</Text>
                            <TextInput value={keterangan} onChangeText={setKeterangan} placeholder="Masukan keterangan..." multiline className={`border ${keterangan ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-transparent"} focus:border-blue-500 placeholder:text-gray-400 p-3 mb-4 rounded h-28 items-start text-justify`} numberOfLines={5} textAlignVertical="top"/>

                            <Text>Petugas {!petugas && <Text className="text-red-500">*</Text>}</Text>
                            <Text className="text-gray-600 mb-3 text-sm mt-1">
                                Petugas dipilih:{" "}
                                {petugas === "Lainnya" ? lainnya || "(belum diisi) *" : petugas || "-"}
                            </Text>
                            <View className="flex-col gap-4 justify-between mb-4">
                                {nama.map((item2) => (
                                    <TouchableOpacity key={item2} onPress={() => {setPetugas(item2); setShowLainnyaInput(false); setLainnya("");}}  className={`flex-row items-center px-3 py-2 border rounded ${petugas === item2 ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                                        <View className={`w-4 h-4 mr-2 rounded-full border ${petugas === item2 ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}/>
                                        <Text>{item2}</Text>
                                    </TouchableOpacity>
                                ))}
                                <TouchableOpacity onPress={() => {setPetugas("Lainnya"); setShowLainnyaInput(true);}} className={`flex-row items-center px-3 py-2 border rounded ${petugas === "Lainnya" ? "border-blue-500 bg-blue-100" : "border-gray-300"} `}>
                                    <View className={`w-4 h-4 mr-2 rounded-full border ${petugas === "Lainnya" ? "bg-blue-500 border-blue-500" : "border-gray-400"}`} />
                                    <Text>Lainnya</Text>
                                </TouchableOpacity>
                                {showLainnyaInput && (
                                    <TextInput value={lainnya} onChangeText={(text) => setLainnya(text)} placeholder="Masukkan nama petugas lain..." className="border border-gray-300 rounded px-3 py-2 placeholder:text-gray-400" />
                                )}
                            </View>

                            <TouchableOpacity onPress={handleSubmit} disabled={loading} className="bg-gray-700 rounded py-2 mt-10 text-white font-inter-bold text-lg text-center w-full">
                                <Text className="text-white text-center font-inter-bold">{loading ? "Mengirim..." : "KIRIM"}</Text>
                            </TouchableOpacity> 
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </View>
    )
};

export default InputListrik;