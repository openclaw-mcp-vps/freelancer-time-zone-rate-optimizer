export default function Home() {
  const faqs = [
    {
      q: 'How does time zone pricing work?',
      a: 'We analyze market rates by region and your availability windows to suggest the optimal hourly or project rate for each client location.'
    },
    {
      q: 'What currencies and regions are supported?',
      a: 'We support all major currencies and cover 50+ regions including North America, Europe, Asia-Pacific, and Latin America.'
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked. Your access continues until the end of the billing period.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Time Zone Rate Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Charge What You&apos;re Worth,{' '}
          <span className="text-[#58a6ff]">Everywhere</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Stop leaving money on the table. FreelanceRate analyzes market data across time zones and tells you exactly what to charge each client — by region, availability, and demand.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $10/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🌍', title: 'Regional Benchmarks', desc: 'Live rate data from 50+ markets worldwide.' },
          { icon: '⏰', title: 'Availability Windows', desc: 'Price premium hours when demand is highest.' },
          { icon: '📈', title: 'Revenue Forecasts', desc: 'See projected income before you pitch.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$10</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited rate analyses',
              '50+ regional benchmarks',
              'Availability window pricing',
              'Revenue forecasting',
              'CSV export',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} FreelanceRate. All rights reserved.
      </footer>
    </main>
  )
}
