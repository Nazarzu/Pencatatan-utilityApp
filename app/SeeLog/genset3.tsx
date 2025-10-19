import "../../global.css";
import Loading from "../../assets/check";
import Error from "@/assets/error";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, Image} from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

interface AtsData {
    Status: string;
    Accu: string;
    Air: string;
    Oil: string;
    Radiator: string;
    Solar: string;
    Keterangan: string;
    Petugas: string;
    Timestamp: string;
}

const Genset3 = () => {
    const [data, setData] = useState<AtsData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const formatTimestamp = (timestamp: string) => {
        if (!timestamp || typeof timestamp !== "string") {
            return ""; // kembalikan string kosong jika tidak ada timestamp
        }

        const match = timestamp.match(/Date\((\d+),(\d+),(\d+),(\d+),(\d+),(\d+)\)/);
        if (match) {
            const [_, year, month, day, hour, minute, second] = match.map(Number);
            const d = new Date(year, month, day, hour, minute, second);

            const pad = (num: number) => num.toString().padStart(2, "0");

            return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(
            d.getHours()
            )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
        }

        return timestamp;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 🔹 Ganti sheetId & sheetName sesuai milik kamu
                const sheetId = "1FbWLx49-EOSRvrSJLRRsXIjynNKAMjiwqAytcQpzifw";
                const sheetName = "genset_1390Kva";
                const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

                const res = await fetch(url);
                const text = await res.text();
                // Parsing format JSON Google Sheet
                const json = JSON.parse(text.substr(47).slice(0, -2));
                if (!json.table || !json.table.cols) {
                    setData([]);
                    setLoading(false);
                    return;
                }
                    const defaultHeaders = ["Status Genset 1390 Kva", "Accu Voltage", "Level Air Accu Genset", "Level Oil Genset", 
                                            "Level air Radiator Genset", "Stok solar / max 1200L", "Keterangan", "Petugas", "Timestamp"];
                        const headers = (json.table.cols || []).map((col: any, i: number) => {
                        const label = col && col.label ? String(col.label).trim() : "";
                        return label !== "" ? label : (defaultHeaders[i] ?? `col_${i}`);
                    });

                    const rowsRaw = (json.table.rows || []).map((row: any) => {
                    const obj: any = {};
                    for (let i = 0; i < headers.length; i++) {
                        const cell = (row && row.c && row.c[i]) ? row.c[i] : null;
                        obj[headers[i]] = (cell && cell.v !== null && cell.v !== undefined) ? cell.v : "";
                    }
                    return obj;
                });

                const rows = rowsRaw.filter((r: any) => {
                    const isEmpty = Object.values(r).every(
                        (v: any) => v === "" || v === null || v === undefined
                    );

                    // Baris dianggap header jika sebagian besar kolom mirip header (misalnya 2 dari 3 cocok)
                    const matchCount = Object.keys(r).reduce((count, key, i) => {
                        const val = String(r[key]).trim().toLowerCase();
                        const head = String(headers[i]).trim().toLowerCase();
                        return count + (val === head ? 1 : 0);
                    }, 0);
                    const isHeaderRow = matchCount >= Math.floor(headers.length * 0.6);

                    return !isEmpty && !isHeaderRow;
                });

                if (rows.length === 0) {
                    setData([]);
                    setLoading(false);
                    return;
                }

                const formattedData = rows.map((item: any) => ({
                    Status: item["Status Genset 1390 Kva"] ?? "",
                    Accu: item["Accu Voltage"] ?? "",
                    Air: item["Level Air Accu Genset"] ?? "",
                    Oil: item["Level Oil Genset"] ?? "",
                    Radiator: item["Level air Radiator Genset"] ?? "",
                    Solar: item["Stok solar / max 1200L"] ?? "",
                    Keterangan: item.Keterangan ?? "",
                    Petugas: item.Petugas || "",
                    Timestamp: formatTimestamp(item.Timestamp),
                }));

                setData(formattedData);
            } catch (err: any) {
                if (err.name === "TypeError") {
                    setError("Tidak dapat terhubung ke internet. Periksa koneksi Anda.");
                } else {
                    setError("Terjadi kesalahan saat memuat data.");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return (
            <Loading />
        );
    };
    if (error) {
        return (
            <Error error={error} />
        );
    };

    return(
        <View className="flex-1">
            <SafeAreaView className="flex-1 p-4 bg-gray-100">
                <ScrollView className="mb-4">
                    <Image source={require("../../assets/images/logoas.png")} className="w-80 mx-auto h-24 rounded-md object-cover mb-8"></Image>
                    <View className="px-6 py-8 bg-white  shadow-md rounded-md">
                        <Text className="text-lg font-bold">Data Genset 1390 Kva</Text>
                        <ScrollView horizontal className="mt-4">
                            <View className="">
                                <View className="flex-row bg-gray-200 rounded-t-md">
                                    <Text className="px-5 py-4 font-medium w-32 text-left">Status</Text>
                                    <Text className="px-5 py-4 font-medium w-44 text-left">Accu Voltage</Text>
                                    <Text className="px-5 py-4 font-medium w-52 text-left">Level Air Accu Genset</Text>
                                    <Text className="px-5 py-4 font-medium w-52 text-left">Level Oil Genset</Text>
                                    <Text className="px-5 py-4 font-medium w-60 text-left">Level air Radiator Genset</Text>
                                    <Text className="px-5 py-4 font-medium w-60 text-left">Stok solar / max 1200L</Text>
                                    <Text className="px-5 py-4 font-medium w-52 text-left">Keterangan</Text>
                                    <Text className="px-5 py-4 font-medium w-52 text-left">Petugas</Text>
                                    <Text className="px-5 py-4 font-medium w-48 text-left">Timestamp</Text>
                                </View>
                                <ScrollView>
                                    {data.length === 0 ? (
                                        <Text className="text-center border border-t-0 border-gray-100 py-4 text-gray-500">Tidak ada data untuk ditampilkan</Text>
                                    ) : (
                                        data.map((item, index) => (
                                        <View key={index} className="flex-row border border-t-0 border-gray-100">
                                            <Text className="px-5 py-4 w-32 text-left">{item.Status}</Text>
                                            <Text className="px-5 py-4 w-44 text-justify">{item.Accu}</Text>
                                            <Text className="px-5 py-4 w-52 text-left">{item.Air}</Text>
                                            <Text className="px-5 py-4 w-52 text-left">{item.Oil}</Text>
                                            <Text className="px-5 py-4 w-60 text-left">{item.Radiator}</Text>
                                            <Text className="px-5 py-4 w-60 text-left">{item.Solar}</Text>
                                            <Text className="px-5 py-4 w-52 text-left">{item.Keterangan}</Text>
                                            <Text className="px-5 py-4 w-52 text-left">{item.Petugas}</Text>
                                            <Text className="px-5 py-4 w-48 text-left">{item.Timestamp}</Text>
                                        </View>
                                        ))
                                    )}
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
                <Link href="/loglist" className="bg-gray-700 rounded py-2 text-white font-bold text-lg text-center w-full">BACK</Link>
            </SafeAreaView>
        </View>
    );
};

export default Genset3;