import Link from "next/link";

export default function GraduationGallery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-10">
      <Link
        href="/"
        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        ← Back Home
      </Link>

      <h1 className="text-5xl font-bold mt-8 mb-8">
        🎓 Graduation Gallery
      </h1>

      <img
        src="/images1/graduation.jpg"
        alt="Graduation"
        className="w-full rounded-xl"
      />
    </main>
  );
}