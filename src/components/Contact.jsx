import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="w-full py-10 px-4 bg-white">
            <h2 className="text-[50px] font-bold text-center text-yellow-800 mb-4">Contact Us</h2>
            <div className="max-w-sm mx-auto bg-yellow-50 border border-yellow-200 rounded-2xl shadow-md p-6">


                {submitted ? (
                    <p className="text-center text-green-600 font-medium">Message sent. Thank you! 🎉</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="you@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-yellow-400 focus:border-yellow-400"
                        />

                        <textarea
                            name="message"
                            placeholder="Type your message..."
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md resize-none focus:ring-yellow-400 focus:border-yellow-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 py-2 rounded-md transition duration-200"
                        >
                            ✉️ Send
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
