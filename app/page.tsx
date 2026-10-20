"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 border-b border-gray-800 gap-4">
        <h1 className="text-xl md:text-3xl font-bold text-blue-400">
          📸 Our Memories Together
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
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 px-4">
        <h1 className="text-4xl md:text-7xl font-bold text-white">
          Our Memories Together ❤️
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mt-6">
          Ty Ratter & Chem Soklang
        </p>

        <p className="text-sm md:text-lg text-gray-400 mt-4">
          Capturing every special moment of our journey together.
        </p>
      </section>

      {/* Relationship Counter */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            ❤️ Together Since
          </h2>

          <p className="text-center text-gray-300 mb-8">
            Ty Ratter & Chem Soklang
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-4xl font-bold text-pink-400">
                {timeTogether.years}
              </p>
              <p className="text-gray-300">Years</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-4xl font-bold text-purple-400">
                {timeTogether.months}
              </p>
              <p className="text-gray-300">Months</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-4xl font-bold text-blue-400">
                {timeTogether.days}
              </p>
              <p className="text-gray-300">Days</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-4xl font-bold text-green-400">
                {timeTogether.hours}
              </p>
              <p className="text-gray-300">Hours</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-4xl font-bold text-yellow-400">
                {timeTogether.minutes}
              </p>
              <p className="text-gray-300">Minutes</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-4xl font-bold text-red-400">
                {timeTogether.seconds}
              </p>
              <p className="text-gray-300">Seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Memories */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Memories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trip */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300">
            <img
              src="/images/trip.jpg"
              alt="Trip"
              className="w-full h-72 md:h-[500px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                🌴 Trip
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                Educational trips and outdoor adventures.
              </p>

              <Link
                href="/gallery/trip"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Graduation */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300">
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
                Graduation day memories and achievements.
              </p>

              <Link
                href="/gallery/graduation"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Future Together */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300">
            <img
              src="/images2/future.jpg"
              alt="Future Together"
              className="w-full h-72 md:h-[500px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                🌟 Future Together
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                Building dreams, achieving goals, and creating memories.
              </p>

              <Link
                href="/gallery/future"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-gray-800">
        <p className="text-gray-400">
          ❤️ Our Memories Together • Ty Ratter & Chem Soklang
        </p>
      </footer>
    </main>
  );
}