// src/components/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const formData = {
      name,
      email,
      project,
      message,
    };

    try {
      const response = await fetch(
        "https://navneet-portfolio-site.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setAlertMessage(data.message); // Show success message
      // Optionally, reset the form
      setName("");
      setEmail("");
      setProject("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("There was an error sending your message.");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-1000">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Contact Us
        </h2>
        {alertMessage && (
          <div className="text-green-500 text-center mb-4">{alertMessage}</div>
        )}{" "}
        {/* Display alert message */}
        <form
          id="contactForm"
          className="contact__form grid"
          onSubmit={handleSubmit}
        >
          <div className="contact__inputs grid mb-4">
            <div className="contact__content mb-4">
              <label htmlFor="name" className="contact__label text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="contact__input w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact__content mb-4">
              <label htmlFor="email" className="contact__label text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="contact__input w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="contact__content mb-4">
            <label htmlFor="project" className="contact__label text-white">
             Title
            </label>
            <input
              type="text"
              id="project"
              className="contact__input w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>
          <div className="contact__content mb-4">
            <label htmlFor="message" className="contact__label text-white">
              Message
            </label>
            <textarea
              id="message"
              cols="0"
              rows="7"
              className="contact__input w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#2952e3] text-white p-2 rounded hover:bg-[#2546bd] transition duration-200"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : "Send Message"}{" "}
              {/* Show loading text */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
