import React, { useState } from "react";
import { View, TextInput, Button, Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwbyOCL-IVVtprlEm2Yb9jNs4XRHErwtCqff4a2RoKQRiPc-nZnWLfbyLVfhsjl8KuQfQ/exec";

const Genset = () => {
    const [nama, setNama] = useState("");
    const [shift, setShift] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [tambahan, setTambahan] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!nama) return Alert.alert("Isi nama teknisi dulu");
        setLoading(true);

        try {
            const payload = { nama, shift, keterangan, tambahan, api_key: "RAFID_890?"};

            const res = await fetch(SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json = await res.json();
            if (json.status === "success") {
                Alert.alert("Sukses", "Data tersimpan di Google Sheet");
                setNama(""); setShift(""); setKeterangan(""); setTambahan("");
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

    const shifts = ["Pagi", "Siang", "Malam"];
    
    return(
        <SafeAreaView className="flex-1 bg-white px-6">
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                <Text className="text-xl font-bold mb-4">Form Pencatatan Utility</Text>

                <Text className="mb-1">Nama Teknisi</Text>
                <TextInput value={nama} onChangeText={setNama} placeholder="Nama" className="border p-3 mb-3 rounded focus:border-blue-400"/>

                <Text className="mb-1">Shift</Text>
                <View className="flex-row justify-between mb-4">
                    {shifts.map((item) => (
                        <TouchableOpacity key={item} onPress={() => setShift(item)}  className={`flex-row items-center px-3 py-2 border rounded ${shift === item ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                            <View className={`w-4 h-4 mr-2 rounded-full border ${shift === item ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}/>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text className="mb-1">Keterangan</Text>
                <TextInput value={keterangan} onChangeText={setKeterangan} placeholder="Keterangan" multiline className="border p-3 mb-4 rounded h-28 text-start" />

                <Text className="mb-1">Catatan tambahan</Text>
                <TextInput value={tambahan} onChangeText={setTambahan} placeholder="Catatan tambahan" multiline className="border p-3 mb-4 rounded h-28 text-start" />

                <Button title={loading ? "Mengirim..." : "Kirim"} onPress={handleSubmit} disabled={loading} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Genset;