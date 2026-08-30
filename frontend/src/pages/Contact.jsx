import { useState } from "react";
import { Mail, MessageCircle, Send, User } from "lucide-react";
import toast from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Message submitted successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="eyebrow">
          <Mail size={15} />
          Get In Touch
        </div>

        <h1>
          Let's start a<span> conversation</span>
        </h1>

        <p>
          Have a question about the project, machine learning model or frontend?
          Send us a message.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <MessageCircle />
            </div>

            <h3>Project Questions</h3>

            <p>
              Ask about the architecture, API integration or machine learning
              workflow.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <BrainIcon />
            </div>

            <h3>Student Wellness</h3>

            <p>
              This project is designed as an educational machine learning
              application.
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a message</h2>

          <div className="input-group">
            <label>Name</label>

            <div className="input-wrapper">
              <User size={18} />

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>

            <div className="input-wrapper">
              <Mail size={18} />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Message</label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="primary-btn contact-submit">
            Send Message
            <Send size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}

function BrainIcon() {
  return <MessageCircle />;
}

export default Contact;
