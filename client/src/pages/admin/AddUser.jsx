import { useState } from "react";
import {
  FiUploadCloud,
  FiFileText,
  FiImage,
  FiUser,
  FiShield,
  FiDollarSign,
  FiCalendar,
  FiCreditCard,
} from "react-icons/fi";

import { addUser } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    refId: "",
    passportNumber: "",
    dob: "",
    salary: "",
    status: "Pending",
    document: null,
    offerLetter: null,
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.passportNumber) {
      toast.error("Full Name and Passport Number are required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        if (form[key] !== null && form[key] !== undefined && form[key] !== "") {
          formData.append(key, form[key]);
        }
      });

      await addUser(formData);

      toast.success("User added successfully");
      navigate("/admin/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-[#172554] text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20 mb-5">
          <FiShield />
          Visa & Offer Letter Management
        </div>

        <h1 className="text-4xl font-bold text-white">Add Visa User</h1>

        <p className="text-gray-400 mt-3 text-lg">
          Create and manage applicant visa & offer letter records securely.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-8 md:p-10 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-7">
            {/* NAME */}
            <div>
              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiUser />
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter applicant's full name"
                required
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              />
            </div>

            {/* PASSPORT NUMBER */}
            <div>
              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiCreditCard />
                Passport Number *
              </label>

              <input
                type="text"
                name="passportNumber"
                value={form.passportNumber}
                onChange={handleChange}
                placeholder="Enter passport number (e.g. A1234567)"
                required
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition uppercase"
              />
            </div>

            {/* REFERENCE ID */}
            <div>
              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiShield />
                Reference ID (Optional - auto-generated if blank)
              </label>

              <input
                type="text"
                name="refId"
                value={form.refId}
                onChange={handleChange}
                placeholder="Leave blank for auto or enter custom ID"
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition uppercase"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiCalendar />
                Date Of Birth
              </label>

              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              />
            </div>

            {/* SALARY */}
            <div>
              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiDollarSign />
                Salary (if applicable)
              </label>

              <input
                type="text"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                placeholder="e.g. $85,000 / year or AED 12,000"
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              />
            </div>

            {/* STATUS */}
            <div>
              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiShield />
                Application / Visa Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* FILE UPLOADS */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* OFFER LETTER PDF (OPTIONAL) */}
            <div className="bg-[#0f172a] border border-dashed border-[#374151] rounded-3xl p-6 hover:border-[#2563eb] transition">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#172554] flex items-center justify-center shrink-0">
                  <FiFileText className="text-blue-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold">
                    Offer Letter
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5">
                    (Optional) Upload Offer Letter PDF
                  </p>
                </div>
              </div>

              <label className="flex flex-col items-center justify-center border border-[#1f2937] rounded-2xl p-6 cursor-pointer hover:bg-[#111827] transition">
                <FiUploadCloud className="text-4xl text-blue-400 mb-3" />
                <span className="text-white text-sm font-medium">Upload Offer Letter</span>
                <span className="text-gray-500 text-xs mt-1">
                  Optional PDF file
                </span>

                <input
                  type="file"
                  name="offerLetter"
                  accept="application/pdf"
                  onChange={handleFile}
                  className="hidden"
                />
              </label>

              {form.offerLetter && (
                <p className="text-green-400 text-xs mt-3 truncate">
                  ✓ {form.offerLetter.name}
                </p>
              )}
            </div>

            {/* ADDITIONAL DOCUMENT (OPTIONAL) */}
            <div className="bg-[#0f172a] border border-dashed border-[#374151] rounded-3xl p-6 hover:border-[#2563eb] transition">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#172554] flex items-center justify-center shrink-0">
                  <FiFileText className="text-blue-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold">
                    Official Document
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5">
                    (Optional) Supporting PDF
                  </p>
                </div>
              </div>

              <label className="flex flex-col items-center justify-center border border-[#1f2937] rounded-2xl p-6 cursor-pointer hover:bg-[#111827] transition">
                <FiUploadCloud className="text-4xl text-blue-400 mb-3" />
                <span className="text-white text-sm font-medium">Upload Document</span>
                <span className="text-gray-500 text-xs mt-1">
                  Optional PDF file
                </span>

                <input
                  type="file"
                  name="document"
                  accept="application/pdf"
                  onChange={handleFile}
                  className="hidden"
                />
              </label>

              {form.document && (
                <p className="text-green-400 text-xs mt-3 truncate">
                  ✓ {form.document.name}
                </p>
              )}
            </div>

            {/* USER PHOTO (OPTIONAL) */}
            <div className="bg-[#0f172a] border border-dashed border-[#374151] rounded-3xl p-6 hover:border-[#2563eb] transition">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#172554] flex items-center justify-center shrink-0">
                  <FiImage className="text-blue-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold">
                    Profile Picture
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5">
                    (Optional) Default used if blank
                  </p>
                </div>
              </div>

              <label className="flex flex-col items-center justify-center border border-[#1f2937] rounded-2xl p-6 cursor-pointer hover:bg-[#111827] transition">
                <FiUploadCloud className="text-4xl text-blue-400 mb-3" />
                <span className="text-white text-sm font-medium">Upload Photo</span>
                <span className="text-gray-500 text-xs mt-1">
                  PNG, JPG supported
                </span>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFile}
                  className="hidden"
                />
              </label>

              {form.image && (
                <p className="text-green-400 text-xs mt-3 truncate">
                  ✓ {form.image.name}
                </p>
              )}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-between items-center pt-6 border-t border-[#1f2937]">
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="w-full sm:w-auto px-8 h-14 rounded-2xl border border-[#374151] text-gray-300 hover:bg-[#1f2937] transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 px-10 h-14 rounded-2xl text-white font-semibold shadow-lg transition"
            >
              {loading ? "Saving..." : "Save User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
