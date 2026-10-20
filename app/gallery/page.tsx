export default function GalleryPage() {
  const albums = [
    "Sports Day",
    "Graduation",
    "Water Festival",
    "Student Activities",
    "Teacher Activities",
    "Science Fair",
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album}
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800"
          >
            <h2 className="text-2xl font-bold">{album}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
