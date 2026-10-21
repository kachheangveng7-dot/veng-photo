"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const startDate = new Date("2025-07-14T00:00:00");

  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const previousMonthDays = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        days += previousMonthDays;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setTimeTogether({
        years,
        months,
        days,
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-[180px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[180px] opacity-20" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 gap-4">
        <h1 className="text-xl md:text-3xl font-bold text-blue-400">
          📸 Our Memories
        </h1>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link href="/gallery" className="hover:text-blue-400">
            Gallery
          </Link>

          <Link href="/events" className="hover:text-blue-400">
            Events
          </Link>

          <Link href="/about" className="hover:text-blue-400">
            About Us
          </Link>

          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center py-16 md:py-24 px-4"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,0,120,0.9)]">
          Our Memories ❤️
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mt-6">
          Ka Chheangveng &amp; Min MengChheng
        </p>

        <p className="text-sm md:text-lg text-gray-400 mt-4">
          Preserving every special moment of our journey together.
        </p>

        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-6xl mt-8"
        >
          ❤️
        </motion.div>
      </motion.section>

      {/* Relationship Counter */}
      <section className="relative z-10 px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            ❤️ Since We First Met
          </h2>

          <p className="text-center text-gray-300 mb-8">
            Ka Chheangveng &amp; Min MengChheng
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            {[
              {
                label: "Years",
                value: timeTogether.years,
                color: "text-pink-400",
              },
              {
                label: "Months",
                value: timeTogether.months,
                color: "text-purple-400",
              },
              {
                label: "Days",
                value: timeTogether.days,
                color: "text-blue-400",
              },
              {
                label: "Hours",
                value: timeTogether.hours,
                color: "text-green-400",
              },
              {
                label: "Minutes",
                value: timeTogether.minutes,
                color: "text-yellow-400",
              },
              {
                label: "Seconds",
                value: timeTogether.seconds,
                color: "text-red-400",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                }}
                className="bg-white/10 rounded-2xl p-5"
              >
                <p className={`text-4xl font-bold ${item.color}`}>
                  {item.value}
                </p>

                <p className="text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Memories */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Special Memories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trip */}
          <motion.div
            whileHover={{ scale: 1.05, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/trip.jpg"
              alt="Trip"
              className="w-full h-72 md:h-[500px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                🌴 Trips & Adventures
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                Fun trips and unforgettable experiences together.
              </p>

              <Link
                href="/gallery/trip"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                View Photos
              </Link>
            </div>
          </motion.div>

          {/* Graduation */}
          <motion.div
            whileHover={{ scale: 1.05, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images1/graduation.jpg"
              alt="Graduation"
              className="w-full h-72 md:h-[500px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                🎓 Graduation
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                Celebrating milestones, achievements, and success.
              </p>

              <Link
                href="/gallery/graduation"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                View Photos
              </Link>
            </div>
          </motion.div>

          {/* Future */}
          <motion.div
            whileHover={{ scale: 1.05, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images2/future.jpg"
              alt="Future Together"
              className="w-full h-72 md:h-[500px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                🌟 Our Future Together
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                Building dreams, achieving goals, and creating beautiful
                memories together.
              </p>

              <Link
                href="/gallery/future"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                View Photos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="relative z-10 text-center py-10 border-t border-gray-800"
      >
        <p className="text-gray-400">
          ❤️ Our Memories • Ka Chheangveng &amp; Min MengChheng
        </p>
      </motion.footer>
    </main>
  );
}