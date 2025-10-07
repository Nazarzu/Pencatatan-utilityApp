import { Text } from "react-native";
import { useState, useEffect, use } from "react";

interface props {
    classname ?: string;
};

const Tanggal = ({classname}:props) => {
    const [date, setDate] = useState("");
    useEffect(() => {
        const UdpdateDate = () => {
            const now = new Date();
            const hari = ["Min","Sen","Sel","Rab","Kam","Jum","Sab",]
            const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember",];
            const day = hari[now.getDay()];
            const dateNum = now.getDate().toString().padStart(2, "0");
            const month = bulan[now.getMonth()];
            setDate(`${day}, ${dateNum} ${month}`);
        };
        UdpdateDate();
        const interval = setInterval(UdpdateDate, 1000 * 30);
        return () => clearInterval(interval);
    }, []);
    return (
        <Text className={`${classname}`}>{date}</Text>
    );
};

export default Tanggal;