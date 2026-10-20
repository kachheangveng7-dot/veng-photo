import Link from "next/link";

export default function FutureGallery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-10">
      <Link
        href="/"
        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        ← Back Home
      </Link>

      <h1 className="text-5xl font-bold mt-8 mb-8">
        🌟 Future Together Gallery
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/images2/future.jpg"
          alt="Future Together"
          className="w-full rounded-xl"
        />

        <img
          src="/images2/future.jpg"
          alt="Future Together"
          className="w-full rounded-xl"
        />
      </div>
    </main>
  );
}