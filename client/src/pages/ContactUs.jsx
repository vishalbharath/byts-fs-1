import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/contact", formData);
      setFormData({ name: "", email: "", message: "" });
      toast.success(response.data.message);
    } catch (error) {
      toast.error("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <br></br>
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-lg overflow-hidden grid md:grid-cols-2">
        {/* Left - Contact Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Right - Contact Information */}
        <div className="bg-blue-700 text-white p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope size={24} />
                <span>vishalbharathonly@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone size={24} />
                <span>+91 8072865461</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt size={24} />
                <span>56, Chinnamuthu 3rd street, Erode</span>
              </motion.div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="text-sm space-y-1">
              <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white">
                <FaFacebookF size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white">
                <FaTwitter size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white">
                <FaInstagram size={24} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white">
                <FaLinkedinIn size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
