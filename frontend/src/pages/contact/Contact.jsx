import { useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const contactInfo = [
  {
    label: "Email Us",
    value: "hello@shotandgo.com",
    sub: "We reply within 24 hours",
    border: "#C44536",
    from: "#C44536",
  },
  {
    label: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Available 9am – 9pm IST",
    border: "#1B4D3E",
    from: "#1B4D3E",
  },
  {
    label: "Our HQ",
    value: "Hyderabad, India",
    sub: "Also in UAE & USA",
    border: "#142E52",
    from: "#142E52",
  },
];

const socials = [
  { icon: <FaInstagram size={20} />, label: "Instagram", handle: "@shotandgo" },
  { icon: <FaYoutube size={20} />, label: "YouTube", handle: "Shot&Go Official" },
  { icon: <FaTwitter size={20} />, label: "Twitter / X", handle: "@shotandgo" },
  { icon: <FaLinkedin size={20} />, label: "LinkedIn", handle: "Shot&Go" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", role: "", message: "" });
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto mt-5 sm:mt-24 md:mt-28 lg:mt-16 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <p className="text-[#868686] text-xl sm:text-2xl md:text-[28px] font-semibold">Get In Touch</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold leading-tight mt-1">
          Let's <span className="text-[#EF4343]">Connect</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-[18px] mt-3 max-w-xl">
          Whether you want to join as a creator, partner with us, or just say hi — we'd love to hear from you.
        </p>
      </div>

      {/* Main grid */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">

        {/* Left — Form */}
        <div className="w-full lg:w-[55%]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name + Email row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-xs sm:text-sm text-gray-400 mb-1.5 block font-medium tracking-wide uppercase">
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-black border border-gray-800 focus:border-[#EF4343]/60 rounded-xl px-4 py-3 text-white text-sm sm:text-base outline-none transition-colors duration-300 placeholder:text-gray-600"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs sm:text-sm text-gray-400 mb-1.5 block font-medium tracking-wide uppercase">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@email.com"
                  required
                  className="w-full bg-black border border-gray-800 focus:border-[#EF4343]/60 rounded-xl px-4 py-3 text-white text-sm sm:text-base outline-none transition-colors duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="text-xs sm:text-sm text-gray-400 mb-1.5 block font-medium tracking-wide uppercase">
                I am a...
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
                className="w-full bg-black border border-gray-800 focus:border-[#EF4343]/60 rounded-xl px-4 py-3 text-white text-sm sm:text-base outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled>Select your role</option>
                <option value="creator">Creator / Reel Maker</option>
                <option value="brand">Brand / Business</option>
                <option value="sponsor">Sponsor / Investor</option>
                <option value="other">Just exploring</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs sm:text-sm text-gray-400 mb-1.5 block font-medium tracking-wide uppercase">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us what's on your mind..."
                required
                className="w-full bg-black border border-gray-800 focus:border-[#EF4343]/60 rounded-xl px-4 py-3 text-white text-sm sm:text-base outline-none transition-colors duration-300 placeholder:text-gray-600 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 w-full sm:w-fit flex items-center justify-center gap-2 bg-[#EF4343] hover:bg-[#d43030] text-white font-semibold text-base sm:text-lg px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/30 active:scale-95"
            >
              {sent ? "Message Sent ✓" : (
                <>Send Message <BsArrowUpRight size={18} /></>
              )}
            </button>
          </form>
        </div>

        {/* Right — Info + Socials */}
        <div className="w-full lg:w-[45%] flex flex-col gap-5">

          {/* Contact info cards */}
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl flex items-center justify-between hover:scale-[1.01] transition-transform duration-300"
              style={{
                border: `1px solid ${item.border}`,
                background: `linear-gradient(to left, ${item.from}33, transparent)`,
              }}
            >
              <div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-white font-semibold text-base sm:text-lg md:text-xl">{item.value}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.sub}</p>
              </div>
              <BsArrowUpRight className="text-gray-500 flex-shrink-0" size={20} />
            </div>
          ))}

          {/* Socials */}
          <div
            className="p-4 sm:p-5 rounded-xl mt-1"
            style={{
              border: "1px solid #4A2C5F",
              background: "linear-gradient(to left, #4A2C5F33, transparent)",
            }}
          >
            <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4">
              Follow Us
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#EF4343]/30 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-gray-400 group-hover:text-[#EF4343] transition-colors duration-300">
                    {s.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-white text-xs sm:text-sm font-semibold truncate">{s.label}</p>
                    <p className="text-gray-500 text-xs truncate">{s.handle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;