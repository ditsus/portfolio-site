export default function Contact() {
    return (
      <section id="contact" className="text-center py-20">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          Have a question or want to work together?
        </p>
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 text-lg hover:underline"
        >
          your-email@example.com
        </a>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/yourusername" target="_blank" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </section>
    );
  }
  