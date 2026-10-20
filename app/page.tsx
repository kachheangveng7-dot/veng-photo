import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-blue-400">
          📸 Our Memories Together
        </h1>

        <div className="space-x-6">
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
      <section className="text-center py-24">
        <h1 className="text-7xl font-bold text-white">
          Our Memories Together ❤️
        </h1>

        <p className="text-2xl text-gray-300 mt-6">
          Ty Ratter & Chem Soklang
        </p>

        <p className="text-lg text-gray-400 mt-4">
          Capturing every special moment of our journey together.
        </p>
      </section>

      {/* Featured Memories */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Featured Memories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Trip */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300">
            <img
              src="/images/trip.jpg"
              alt="Trip"
              className="w-full h-[500px] object-cover"
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
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
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
              className="w-full h-[500px] object-cover"
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
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
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
              className="w-full h-[500px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                🌟 Future Together
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                Building dreams, achieving goals, and creating memories for tomorrow.
              </p>

              <Link
                href="/gallery/future"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
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
          ❤️ Created by Ty Ratter & Chem Soklang
        </p>
      </footer>
    </main>
  );
}