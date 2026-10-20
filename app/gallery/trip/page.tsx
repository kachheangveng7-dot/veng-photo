import Link from "next/link";

export default function TripGallery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-6 md:p-10">
      <Link
        href="/"
        className="inline-block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        ← Back Home
      </Link>

      <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-8">
        🌴 Trip Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="/trip/trip1.jpg"
          alt="Trip 1"
          className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg"
        />

        <img
          src="/trip/trip2.jpg"
          alt="Trip 2"
          className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg"
        />

        <img
          src="/trip/trip3.jpg"
          alt="Trip 3"
          className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg"
        />

        <img
          src="/trip/trip4.jpg"
          alt="Trip 4"
          className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg"
        />
      </div>
    </main>
  );
}