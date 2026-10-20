export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] px-5 py-16 text-white sm:px-10">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-rose-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* Header */}
        <header className="mb-14 text-center">
          <div className="mb-6 text-4xl">♡</div>

          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-rose-300">
            OUR STORY • OUR MEMORIES
          </p>

          <h1 className="mb-5 text-4xl font-bold tracking-wide sm:text-6xl">
            អំពី{" "}
            <span className="bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 bg-clip-text text-transparent">
              Photo Engage
            </span>
          </h1>

          <p className="text-sm tracking-widest text-gray-400 sm:text-base">
            អនុស្សាវរីយ៍របស់យើង ដែលនឹងនៅក្នុងបេះដូងជានិច្ច
          </p>

          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
        </header>

        {/* Memory card */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-rose-950/20 backdrop-blur-xl sm:p-12">

          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-rose-300/40" />
            <span className="text-rose-300">♡</span>
            <span className="h-px w-10 bg-rose-300/40" />
          </div>

          <div className="space-y-8 text-base leading-9 text-gray-300 sm:text-lg sm:leading-10">

            <p>
              រូបថតនីមួយៗ មានរឿងរ៉ាវ និងអនុស្សាវរីយ៍
              ដែលមិនអាចបំភ្លេចបាន។ រាល់ស្នាមញញឹម
              រាល់ពេលវេលាដែលយើងបាននៅក្បែរគ្នា
              និងរាល់ថ្ងៃដែលយើងធ្លាប់មានគ្នា
              សុទ្ធតែជាផ្នែកមួយនៃរឿងរ៉ាវដ៏ស្រស់ស្អាត
              ដែលខ្ញុំនឹងរក្សាទុកក្នុងបេះដូងជានិច្ច។
            </p>

            <p>
              ទោះបីពេលវេលាបានកន្លងផុតទៅក៏ដោយ
              អនុស្សាវរីយ៍ទាំងនោះនៅតែមានន័យសម្រាប់ខ្ញុំ។
              ពេលខ្លះ រូបថតមួយសន្លឹកអាចនាំឱ្យខ្ញុំ
              នឹកឃើញដល់មនុស្សដែលខ្ញុំស្រឡាញ់
              ស្នាមញញឹមរបស់អូន និងពេលវេលា
              ដែលខ្ញុំប្រាថ្នាថាអាចត្រឡប់ទៅវិញបាន។
            </p>

            <p>
              កម្មវិធីនេះមិនមែនគ្រាន់តែជាកន្លែង
              សម្រាប់រក្សាទុករូបថតនោះទេ។
              វាជាកន្លែងសម្រាប់រក្សាទុកអនុស្សាវរីយ៍
              រក្សាទុកអារម្មណ៍ និងរំលឹកពីមនុស្សដែលខ្ញុំស្រឡាញ់
              មនុស្សម្នាក់ដែលមានអត្ថន័យយ៉ាងពិសេស
              ក្នុងជីវិតរបស់ខ្ញុំ។
            </p>

          </div>

          {/* Final love message */}
          <div className="mt-12 rounded-2xl border border-rose-300/15 bg-gradient-to-br from-rose-400/[0.08] to-transparent px-5 py-9 text-center sm:px-8">

            <div className="mb-5 text-3xl text-rose-300">
              ♥
            </div>

            <p className="text-xl font-semibold leading-10 text-rose-100 sm:text-2xl sm:leading-[3rem]">
              យើងនឹងនៅក្បែរគ្នាជានិច្ច
              <br />
              មិនថាយើងទៅដល់ទីណាក៏ដោយ
              <br />
              បេះដូងខ្ញុំនៅតែនឹករលឹកអូន
              <br />
              ហើយខ្ញុំនឹងចងចាំអូនតែម្នាក់គត់។
            </p>

            <p className="mt-6 text-sm italic tracking-wider text-gray-400">
              Forever in my heart, my love.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs tracking-[0.35em] text-gray-500">
              MADE WITH LOVE
            </p>
            <p className="mt-3 text-2xl text-rose-300/80">∞ ♡</p>
          </div>

        </section>

        {/* Footer */}
        <footer className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            រូបថតអាចរសាត់តាមពេលវេលា តែអនុស្សាវរីយ៍នៅតែមានន័យ។
          </p>
          <p className="mt-3 text-xs text-gray-600">
            © · Our memories, forever
          </p>
        </footer>

      </div>
    </main>
  );
}