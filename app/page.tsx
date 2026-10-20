import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-blue-500">
          📸 Photo Trip Graduation Future Together
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
        <h1 className="text-7xl font-bold">
          Our Memeries Ter with Lang
        </h1>

        <p className="text-xl text-gray-400 mt-6">
          Browse school memories and event photos.
        </p>
      </section>

      {/* Featured Memories */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Featured Memories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Trip */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="/images/trip.jpg"
              alt="Trip"
              className="w-full h-[500px] object-contain bg-white"
            />

            <div className="p-4">
              <h3 className="text-2xl font-bold">🌴 Trip</h3>

              <p className="text-gray-400 mb-4">
                Educational trips and outdoor adventures.
              </p>

              <Link
                href="/gallery"
                className="inline-block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Graduation */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="/images1/graduation.jpg"
              alt="Graduation"
              className="w-full h-[500px] object-contain bg-white"
            />

            <div className="p-4">
              <h3 className="text-2xl font-bold">
                🎓 Graduation
              </h3>

              <p className="text-gray-400 mb-4">
                Graduation day memories and achievements.
              </p>

              <Link
                href="/gallery"
                className="inline-block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Future Together */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="/images2/future.jpg"
              alt="Future Together"
              className="w-full h-[500px] object-contain bg-white"
            />

            <div className="p-4">
              <h3 className="text-2xl font-bold">
                🌟 Future Together
              </h3>

              <p className="text-gray-400 mb-4">
                Building dreams, achieving goals, and creating memories for tomorrow.
              </p>

              <Link
                href="/gallery"
                className="inline-block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Gallery
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}