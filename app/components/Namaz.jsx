
import { useEffect, useState } from "react";
import { NamazData } from "../lip/Namaztime";

export const Namaz = () => {
    const [currentNamaz, setCurrentNamaz] = useState({ name: "", time: "" });
    const [nextNamaz, setNextNamaz] = useState({ name: "", time: "" });

    const calculateNamazTimes = () => {
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes();

        for (let i = 0; i < NamazData.length; i++) {
            const [hours, minutes] = NamazData[i].time
                .split(/[: ]/)
                .map(Number);
            const period = NamazData[i].time.includes("PM") ? 12 : 0;
            const namazTime = hours % 12 + period; // Convert to 24-hour format

            if (
                nowHours < namazTime ||
                (nowHours === namazTime && nowMinutes < minutes)
            ) {
                // Current Namaz
                return {
                    current: NamazData[i - 1] || NamazData[NamazData.length - 1], // Previous namaz or last namaz of the day
                    next: NamazData[i], // Next namaz
                };
            }
        }

        // Default: If no upcoming prayer, set current to "Isha" and next to "Fajar"
        return {
            current: NamazData[NamazData.length - 1],
            next: NamazData[0],
        };
    };

    useEffect(() => {
        const { current, next } = calculateNamazTimes();
        setCurrentNamaz(current);
        setNextNamaz(next);

        const interval = setInterval(() => {
            const { current, next } = calculateNamazTimes();
            setCurrentNamaz(current);
            setNextNamaz(next);
        }, 60000); // Update every minute

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="text-center flex items-center justify-center h-[100vh] m-auto w-full max-[500px]">
            <div>
                <h1>Namaz Timings</h1>
                <p className="text-3xl mb-4">
                    Current Namaz: {currentNamaz.name} - {currentNamaz.time}
                </p>
                <p className="text-2xl">
                    Next Namaz: {nextNamaz.name} - {nextNamaz.time}
                </p>
                
            </div>
        </div>
    );
};
