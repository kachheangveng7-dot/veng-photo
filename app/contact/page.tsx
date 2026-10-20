export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          📞 ទំនាក់ទំនង
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <div className="space-y-6 text-lg">

            <div>
              <h2 className="font-bold text-blue-400">📧 អ៊ីមែល</h2>
              <p>tyratter0@gmail.com</p>
            </div>

            <div>
              <h2 className="font-bold text-blue-400">📱 លេខទូរស័ព្ទ</h2>
              <p>+855 93 725 577</p>
            </div>

            <div>
              <h2 className="font-bold text-blue-400">📍 អាសយដ្ឋាន</h2>
              <p>
                ភូមិផ្អាវ ឃុំផ្អាវ<br />
                ស្រុកបាធាយ ខេត្តកំពង់ចាម
              </p>
            </div>

          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400">
            ❤️ សូមអរគុណដែលបានចូលទស្សនា អនុស្សាវរីយ៍របស់យើង
          </p>
        </div>
      </div>
    </main>
  );
}