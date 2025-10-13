import "../../global.css";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface AtsData {
    Status: string;
    Keterangan: string;
    Petugas: string;
    Timestamp: string;
}

const Ats = () => {
    const [data, setData] = useState<AtsData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 🔹 Ganti sheetId & sheetName sesuai milik kamu
                const sheetId = "1HKX9EkWdYufhYuB53bnh_Jlc2Wguq6uiSHgOm37X_oQ";
                const sheetName = "ATS";
                const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

                const res = await fetch(url);
                const text = await res.text();

                // 🔹 Parsing format JSON Google Sheet
                const json = JSON.parse(text.substr(47).slice(0, -2));

                // 🔹 Ambil kolom berdasarkan header di baris pertama
                const headers = json.table.cols.map((col: any) => col.label);
                const rows = json.table.rows.map((row: any) => {
                    const obj: any = {};
                    row.c.forEach((cell: any, i: number) => {
                        obj[headers[i]] = cell ? cell.v : "";
                    });
                    return obj;
                });

                setData(rows);
            } catch (err) {
                console.error("Fetch Error:", err);
                setError("Gagal memuat data dari Google Sheet (periksa akses publik).");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#007AFF" />
                <Text className="mt-2 text-gray-500">Memuat data...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center">
                <Text className="text-red-500">{error}</Text>
            </SafeAreaView>
        );
    }

    return (
        <ScrollView horizontal>
            <SafeAreaView className="p-4">
                {/* Header */}
                <View className="flex-row bg-yellow-300">
                    <Text className="border px-5 py-2 font-inter-bold w-28 text-center">Status</Text>
                    <Text className="border px-5 py-2 font-inter-bold w-40 text-center">Keterangan</Text>
                    <Text className="border px-5 py-2 font-inter-bold w-40 text-center">Petugas</Text>
                    <Text className="border px-5 py-2 font-inter-bold w-48 text-center">Timestamp</Text>
                </View>

                {/* Isi tabel */}
                <ScrollView style={{ maxHeight: 500 }}>
                    {data.length === 0 ? (
                        <Text className="text-center mt-4 text-gray-500">Tidak ada data untuk ditampilkan</Text>
                    ) : (
                        data.map((item, index) => (
                        <View key={index} className="flex-row border-b border-gray-300">
                            <Text className="border px-5 py-2 w-28 text-center">{item.Status}</Text>
                            <Text className="border px-5 py-2 w-40 text-center">{item.Keterangan}</Text>
                            <Text className="border px-5 py-2 w-40 text-center">{item.Petugas}</Text>
                            <Text className="border px-5 py-2 w-48 text-center">{item.Timestamp}</Text>
                        </View>
                        ))
                    )}
                </ScrollView>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Ats;
