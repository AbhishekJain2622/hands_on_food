import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'hello@handsonfood.com', // Replace with your email
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('SMTP Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Toaster position="top-right" />
      
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
        required
      />

      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
        required
      />

      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows={4}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400 resize-none"
        required
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send size={20} />
      </button>
    </form>
  );
};

export default ContactForm;