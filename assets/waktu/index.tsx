import { View, Text, ImageBackground } from "react-native";
import { useState, useEffect } from "react";

interface props {
    classname ?: string;
}

const Jam = ({classname}: props) => {
    const [time, setTime] = useState("");
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setTime(`${hours}:${minutes}`);
        };
        
        updateDateTime(); // Jalankan pertama kali
        const interval = setInterval(updateDateTime, 1000 * 30); // update setiap 30 detik
        return () => clearInterval(interval);
    }, []);

    return (
        <Text className={`${classname}`}>{time}</Text>
    );
};

export default Jam;