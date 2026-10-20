import Link from "next/link";

export default function FutureGallery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-10">
      <Link
        href="/"
        className="inline-block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        ← Back Home
      </Link>

      <h1 className="text-5xl font-bold mt-8 mb-8">
        🌟 Future Together Gallery
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/future/future1.jpg"
          alt="Future 1"
          className="w-full rounded-xl"
        />

        <img
          src="/future/future2.jpg"
          alt="Future 2"
          className="w-full rounded-xl"
        />

        <img
          src="/future/future3.jpg"
          alt="Future 3"
          className="w-full rounded-xl"
        />

        <img
          src="/future/future4.jpg"
          alt="Future 4"
          className="w-full rounded-xl"
        />
      </div>
    </main>
  );
}
