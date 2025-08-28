// import React, { useState } from "react";
// import { MdEmail } from "react-icons/md";
// import { FaLinkedinIn } from "react-icons/fa6";

// export default function Contact() {
//   const API_BASE = import.meta.env.VITE_API_URL;
// //   const API_BASE = "https://portfolio-contact-0609.onrender.com";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     file: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState("");

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "file") {
//       setFormData({ ...formData, file: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setResponseMsg("");

//   const data = new FormData();
//   data.append("name", formData.name);
//   data.append("email", formData.email);
//   data.append("subject", formData.subject);
//   data.append("message", formData.message);
//   if (formData.file) {
//     data.append("file", formData.file);
//   }

//   try {
//     const res = await fetch(`${API_BASE}/contact/`, {
//       method: "POST",
//       body: data,
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const result = await res.json();
//     setResponseMsg(result.message || "Something went wrong!");

//     // ✅ Clear form after success
//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//       file: null,
//     });
//   } catch (error) {
//     console.error("❌ Error submitting form:", error);
//     setResponseMsg("❌ Failed to send message. Try again.");
//   } finally {
//     setLoading(false);
//   }
// };



//   return (
//     <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-12">
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
//         {/* Left Section */}
//         <div className="text-white flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-blue-400 mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-gray-400 mb-8">
//             Have a question or want to work together? Drop us a message!
//           </p>

//           <div className="space-y-6">
//             {/* Email */}
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-purple-700/20 rounded-xl">
//                 <MdEmail className="text-purple-400 text-2xl" />
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold">Email</h4>
//                 <p className="text-gray-400">mrinmay.ofc@gmail.com</p>
//               </div>
//             </div>

//             {/* LinkedIn */}
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-purple-700/20 rounded-xl">
//                 <FaLinkedinIn className="text-[#5aa2ea] text-2xl" />
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold">LinkedIn</h4>
//                 <a
//                   href="https://www.linkedin.com/in/mrinmay-das-868793280"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:underline"
//                 >
//                   mrinmay-das
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section (Form) */}
//         <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg">
//           {responseMsg && (
//             <p
//               className={`mb-4 text-center font-medium ${
//                 responseMsg.startsWith("✅") ? "text-green-400" : "text-red-400"
//               }`}
//             >
//               {responseMsg}
//             </p>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full bg-[#0f172a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full bg-[#0f172a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//               className="w-full bg-[#0f172a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows="5"
//               className="w-full bg-[#0f172a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//             ></textarea>

//             {/* File Upload */}
//             <div>
//               <label className="block text-gray-300 font-medium mb-2">
//                 Attachment (optional)
//               </label>
//               <div className="flex items-center">
//                 <label
//                   htmlFor="file"
//                   className="flex items-center justify-center px-3 py-2 bg-[#313745] text-white rounded-lg cursor-pointer hover:bg-[#33405f] transition duration-200"
//                 >
//                   📎 Choose File
//                 </label>
//                 <span className="ml-3 text-sm text-gray-400 truncate max-w-xs">
//                   {formData.file ? formData.file.name : "No file chosen"}
//                 </span>
//               </div>
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 onChange={handleChange}
//                 className="hidden"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
//             >
//               {loading ? "Sending..." : "Send Message 📩"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  const API_BASE = import.meta.env.VITE_API_URL;
  // const API_BASE = "https://portfolio-contact-0609.onrender.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      const res = await fetch(`${API_BASE}/contact/`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setResponseMsg(result.message || "Something went wrong!");

      // ✅ Clear form after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        file: null,
      });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setResponseMsg("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 sm:px-6 py-12 pt-24 md:pt-32">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Section */}
        <div className="text-white flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base">
            Have a question or find any issues ? Drop us a message!
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-700/20 rounded-xl">
                <MdEmail className="text-purple-400 text-xl md:text-2xl" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold">Email</h4>
                <p className="text-gray-400 text-sm md:text-base">
                  mrinmay.ofc@gmail.com
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-700/20 rounded-xl">
                <FaLinkedinIn className="text-[#5aa2ea] text-xl md:text-2xl" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/mrinmay-das-868793280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline text-sm md:text-base"
                >
                  mrinmay-das
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-lg">
          {responseMsg && (
            <p
              className={`mb-4 text-center font-medium ${
                responseMsg.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {responseMsg}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0f172a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#0f172a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-[#0f172a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-[#0f172a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            {/* File Upload */}
            <div>
              <label className="block text-gray-300 font-medium mb-2 text-sm md:text-base">
                Attachment (optional)
              </label>
              <div className="flex items-center">
                <label
                  htmlFor="file"
                  className="flex items-center justify-center px-3 py-2 bg-[#313745] text-white rounded-lg cursor-pointer hover:bg-[#33405f] transition duration-200 text-sm md:text-base"
                >
                  📎 Choose File
                </label>
                <span className="ml-3 text-xs md:text-sm text-gray-400 truncate max-w-[160px] sm:max-w-xs">
                  {formData.file ? formData.file.name : "No file chosen"}
                </span>
              </div>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                className="hidden"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center text-sm md:text-base"
            >
              {loading ? "Sending..." : "Send Message 📩"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

