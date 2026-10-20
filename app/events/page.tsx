export default function EventsPage() {
  const events = [
    "Sports Day",
    "Graduation Ceremony",
    "Water Festival",
    "Science Fair",
    "Teacher Activities",
    "Student Activities",
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        School Events
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event}
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800"
          >
            <h2 className="text-2xl font-bold">{event}</h2>
            <p className="text-gray-400 mt-2">
              View photos from this event.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}