import { useState } from 'react'
import './App.css'

export default function ZHCreativeWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Logo',
    budget: '$250 - $500',
    vision: ''
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://formspree.io/f/maqkklzw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', service: 'Logo', budget: '$250 - $500', vision: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Hero + Design Brief */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-neutral-400 mb-4">
              ZH Creative LLC
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight mb-6">
              Elevate your brand with a professional touch.
            </h1>

            <p className="text-lg text-neutral-300 max-w-xl leading-relaxed mb-8">
              Branding, illustration and design direction with a clean modern aesthetic.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-neutral-300">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Brand Identity
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Illustration
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Product Design
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                Creative Direction
              </span>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl shadow-black/40">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-2">
                Start a Project
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Design Brief
              </h2>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option>Logo</option>
                  <option>Illustration</option>
                  <option>Product Mock-up</option>
                  <option>Creative Direction</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option>$250 - $500</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000+</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Project Vision
                </label>
                <textarea
                  name="vision"
                  rows={5}
                  value={formData.vision}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Describe the look, feel, goals, or inspiration for your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black text-white rounded-2xl py-4 text-sm uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Design Brief'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center mt-2">✓ Brief received! We'll be in touch shortly.</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Clean visuals with strong identity.
            </h2>
          </div>

          <p className="text-neutral-400 max-w-md leading-relaxed">
            A minimalist portfolio section focused on strong imagery, premium presentation, and simple navigation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Luxury Automotive Campaign",
            "Streetwear Brand Launch",
            "Editorial Lifestyle Shoot",
          ].map((project) => (
            <div
              key={project}
              className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">
                    Case Study
                  </p>
                  <h3 className="text-2xl font-medium">{project}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 bg-neutral-900/40">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-3">
              Process
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              Design solutions that make your projects shine.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Submit Brief',
                text: 'Clients fill out the project form directly from the homepage.'
              },
              {
                step: '02',
                title: 'Creative Planning',
                text: 'ZH Creative builds the mood, direction, and production outline.'
              },
              {
                step: '03',
                title: 'Launch & Delivery',
                text: 'Final assets are delivered cleanly with fast communication.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-sm text-neutral-500 mb-6">{item.step}</p>
                <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium">ZH Creative LLC</h3>
            <p className="text-neutral-500 text-sm mt-1">
              Seattle-based creative studio.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="https://www.instagram.com/zhcreative/">Instagram</a>
            <a href="https://zhoffner.com">Portfolio</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
