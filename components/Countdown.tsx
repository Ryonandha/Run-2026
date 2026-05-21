'use client'; // Wajib ditulis karena komponen ini menggunakan interaksi browser (state & timer)

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string; // Format yang diterima: "YYYY-MM-DDTHH:mm:ss"
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeftHolder = { hari: 0, jam: 0, menit: 0, detik: 0 };

      if (difference > 0) {
        timeLeftHolder = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeftHolder;
    };

    // Jalankan pertama kali saat halaman dibuka
    setTimeLeft(calculateTimeLeft());

    // Update detiknya setiap 1 detik sekali
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-6 justify-center my-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center bg-white shadow-md border border-gray-100 rounded-2xl p-4 min-w-[70px] md:min-w-[90px]">
          <span className="text-2xl md:text-4xl font-bold text-[#004F6E]">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}