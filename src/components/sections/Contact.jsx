import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative bg-[#f5f5dc] overflow-hidden"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#8ecae6] to-[#d2b48c] bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form
            className="grid grid-cols-1 gap-6 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="p-6 rounded-xl bg-[#f5f5dc] text-[#1a1a1a] hover:bg-[#d2b48c] hover:text-[#1a1a1a] transition-all duration-200 shadow-md hover:shadow-lg">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-[#ffffff]/20 text-[#1a1a1a] py-3 px-4 rounded-full text-sm focus:outline-none focus:bg-[#ffffff]/40 focus:text-[#1a1a1a] transition"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="p-6 rounded-xl bg-[#f5f5dc] text-[#1a1a1a] hover:bg-[#d2b48c] hover:text-[#1a1a1a] transition-all duration-200 shadow-md hover:shadow-lg">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-[#ffffff]/20 text-[#1a1a1a] py-3 px-4 rounded-full text-sm focus:outline-none focus:bg-[#ffffff]/40 focus:text-[#1a1a1a] transition"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="p-6 rounded-xl bg-[#f5f5dc] text-[#1a1a1a] hover:bg-[#d2b48c] hover:text-[#1a1a1a] transition-all duration-200 shadow-md hover:shadow-lg">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-[#ffffff]/20 text-[#1a1a1a] py-3 px-4 rounded-full text-sm focus:outline-none focus:bg-[#ffffff]/40 focus:text-[#1a1a1a] transition"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="p-6 rounded-xl bg-[#1a1a1a] text-[#f5f5dc] hover:bg-[#4b3f2f] hover:text-[#f5f5dc] transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
