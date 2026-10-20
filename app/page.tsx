import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-gray-800">
        <h1 className="text-xl md:text-3xl font-bold text-blue-400">
          📸 អនុស្សាវរីយ៍របស់យើង
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
          <Link href="/" className="hover:text-blue-400">
            ទំព័រដើម
          </Link>

          <Link href="/gallery" className="hover:text-blue-400">
            វិចិត្រសាល
          </Link>

          <Link href="/events" className="hover:text-blue-400">
            ព្រឹត្តិការណ៍
          </Link>

          <Link href="/about" className="hover:text-blue-400">
            អំពីយើង
          </Link>

          <Link href="/contact" className="hover:text-blue-400">
            ទំនាក់ទំនង
          </Link>

          <Link href="/" className="hover:text-blue-400">
            🇰🇭 ខ្មែរ
          </Link>

          <Link href="/en" className="hover:text-blue-400">
            🇺🇸 English
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 px-4">
        <h1 className="text-4xl md:text-7xl font-bold text-white">
          អនុស្សាវរីយ៍របស់យើង ❤️
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mt-6">
          ទី រ៉ាត់ទ័រ ❤️ ជីម សុខឡាង
        </p>

        <p className="text-sm md:text-lg text-gray-400 mt-4">
          រក្សាទុកគ្រប់អនុស្សាវរីយ៍ដ៏មានតម្លៃក្នុងដំណើរជីវិតរបស់យើង។
        </p>
      </section>

      {/* Featured Memories */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          អនុស្សាវរីយ៍សំខាន់ៗ
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
                🌴 ដំណើរកម្សាន្ត
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                អនុស្សាវរីយ៍ និងបទពិសោធន៍ដ៏រីករាយក្នុងដំណើរកម្សាន្តរបស់យើង។
              </p>

              <Link
                href="/gallery/trip"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                មើលរូបភាព
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
                🎓 ពិធីបញ្ចប់ការសិក្សា
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                អនុស្សាវរីយ៍ និងភាពជោគជ័យក្នុងថ្ងៃបញ្ចប់ការសិក្សា។
              </p>

              <Link
                href="/gallery/graduation"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                មើលរូបភាព
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
                🌟 អនាគតរួមគ្នា
              </h3>

              <p className="text-gray-300 mt-2 mb-4">
                កសាងក្តីស្រមៃ សម្រេចគោលដៅ និងបង្កើតអនុស្សាវរីយ៍ដ៏ស្រស់ស្អាត។
              </p>

              <Link
                href="/gallery/future"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                មើលរូបភាព
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-gray-800">
        <p className="text-gray-400">
          ❤️ អនុស្សាវរីយ៍របស់យើង • ទី រ៉ាត់ទ័រ ❤️ ជីម សុខឡាង
        </p>
      </footer>
    </main>
  );
}