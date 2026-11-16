import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  getUserById,
  updateUser,
} from "../../services/api";

import toast from "react-hot-toast";

import {
  FiEdit2,
  FiX,
  FiSave,
  FiFileText,
  FiShield,
  FiUser,
  FiCalendar,
  FiDollarSign,
  FiCheckCircle,
  FiClock,
  FiXCircle,
  FiExternalLink,
  FiActivity,
  FiCreditCard,
} from "react-icons/fi";

import Skeleton from "../../components/common/Skeleton";
import NoData from "../../components/common/NoData";

const UserDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await getUserById(id);

        if (isMounted) {
          setData(res.data);
        }
      } catch {
        toast.error("Applicant record not found");
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleSave = async () => {
    try {
      await updateUser(id, data);

      toast.success("Updated successfully");
      setEditMode(false);
    } catch {
      toast.error("Update failed");
    }
  };

  if (!data) {
    return (
      <div className="p-6">
        <Skeleton />
      </div>
    );
  }

  const getMediaUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    const base = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/api\/?$/, "");
    const clean = path.replace(/^\/+/, "");
    return `${base}/${clean}`;
  };

  const imageUrl = data.image
    ? getMediaUrl(data.image)
    : "/default-avatar.png";

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#172554] border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-4">
            <FiShield />
            Visa Applicant Details
          </div>

          <h1 className="text-4xl font-bold text-white">
            Applicant Information
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            View and manage visa and offer letter records
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-4">
          {/* TRACKING */}
          <button
            onClick={() =>
              navigate(`/admin/user/${id}/tracking`)
            }
            className="h-12 px-6 rounded-2xl bg-gradient-to-r from-[#10b981] to-[#059669] hover:opacity-90 transition text-white font-semibold shadow-lg flex items-center gap-2"
          >
            <FiActivity />
            Manage Tracking
          </button>

          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="h-12 px-6 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold shadow-lg flex items-center gap-2"
            >
              <FiEdit2 />
              Edit Details
            </button>
          ) : (
            <button
              onClick={() => setEditMode(false)}
              className="h-12 px-6 rounded-2xl border border-[#374151] hover:bg-[#1f2937] transition text-gray-300 font-semibold flex items-center gap-2"
            >
              <FiX />
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-6 lg:p-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* IMAGE */}
          <img
            src={imageUrl}
            alt={data.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/default-avatar.png";
            }}
            className="w-28 h-28 rounded-3xl object-cover border-2 border-[#2563eb]/30 shadow-xl"
          />

          {/* INFO */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white">
              {data.name}
            </h2>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="px-4 py-2 rounded-xl bg-[#0f172a] border border-[#1f2937] text-gray-300 text-sm font-mono">
                Passport: {data.passportNumber}
              </div>

              <div className="px-4 py-2 rounded-xl bg-[#0f172a] border border-[#1f2937] text-gray-300 text-sm font-mono">
                Ref ID: {data.refId}
              </div>

              {data.salary && (
                <div className="px-4 py-2 rounded-xl bg-[#0f172a] border border-[#1f2937] text-gray-300 text-sm">
                  Salary: {data.salary}
                </div>
              )}
            </div>
          </div>

          {/* STATUS */}
          <div>
            <span
              className={`px-5 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2
              ${
                data.status === "Approved"
                  ? "bg-green-500/10 text-green-400"
                  : data.status === "Pending"
                  ? "bg-yellow-500/10 text-yellow-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {data.status === "Approved" && <FiCheckCircle />}
              {data.status === "Pending" && <FiClock />}
              {data.status === "Rejected" && <FiXCircle />}
              {data.status}
            </span>
          </div>
        </div>
      </div>

      {/* DETAILS FORM */}
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-6 lg:p-8 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-7">
          {/* NAME */}
          <div>
            <label className="text-sm text-gray-400 flex items-center gap-2">
              <FiUser />
              Full Name
            </label>

            <input
              value={data.name || ""}
              disabled={!editMode}
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
              className="mt-3 w-full h-14 bg-[#0f172a] border border-[#1f2937] text-white px-5 rounded-2xl focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition disabled:opacity-75"
            />
          </div>

          {/* PASSPORT */}
          <div>
            <label className="text-sm text-gray-400 flex items-center gap-2">
              <FiCreditCard />
              Passport Number
            </label>

            <input
              value={data.passportNumber || ""}
              disabled={!editMode}
              onChange={(e) =>
                setData({
                  ...data,
                  passportNumber: e.target.value,
                })
              }
              className="mt-3 w-full h-14 bg-[#0f172a] border border-[#1f2937] text-white px-5 rounded-2xl focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition uppercase font-mono disabled:opacity-75"
            />
          </div>

          {/* SALARY */}
          <div>
            <label className="text-sm text-gray-400 flex items-center gap-2">
              <FiDollarSign />
              Salary
            </label>

            <input
              value={data.salary || ""}
              disabled={!editMode}
              onChange={(e) =>
                setData({
                  ...data,
                  salary: e.target.value,
                })
              }
              placeholder="e.g. $85,000"
              className="mt-3 w-full h-14 bg-[#0f172a] border border-[#1f2937] text-white px-5 rounded-2xl focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition disabled:opacity-75"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm text-gray-400 flex items-center gap-2">
              <FiCalendar />
              Date Of Birth
            </label>

            <input
              type={editMode ? "date" : "text"}
              value={data.dob ? data.dob.slice(0, 10) : ""}
              disabled={!editMode}
              onChange={(e) =>
                setData({
                  ...data,
                  dob: e.target.value,
                })
              }
              className="mt-3 w-full h-14 bg-[#0f172a] border border-[#1f2937] text-white px-5 rounded-2xl focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition disabled:opacity-75"
            />
          </div>

          {/* REFERENCE ID (READ-ONLY) */}
          <div>
            <label className="text-sm text-gray-400 flex items-center gap-2">
              <FiShield />
              Reference ID (Permanent)
            </label>

            <input
              value={data.refId || ""}
              disabled
              className="mt-3 w-full h-14 bg-[#0b0f19] border border-[#1f2937] text-gray-400 font-mono px-5 rounded-2xl outline-none opacity-80 cursor-not-allowed"
            />
          </div>

          {/* STATUS */}
          <div>
            <label className="text-sm text-gray-400 flex items-center gap-2">
              <FiShield />
              Application / Visa Status
            </label>

            <select
              value={data.status || "Pending"}
              disabled={!editMode}
              onChange={(e) =>
                setData({
                  ...data,
                  status: e.target.value,
                })
              }
              className="mt-3 w-full h-14 bg-[#0f172a] border border-[#1f2937] text-white px-5 rounded-2xl focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition disabled:opacity-75"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* PDF DOCUMENT */}
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-6 lg:p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
            <FiFileText className="text-blue-400 text-2xl" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Offer Letter / Visa Document
            </h3>
            <p className="text-gray-400 mt-1">
              Official PDF verification document
            </p>
          </div>
        </div>

        {data.offerLetter || data.document ? (
          <div className="space-y-4">
            {data.offerLetter && (
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-[#0f172a] border border-[#1f2937] rounded-2xl p-6">
                <div>
                  <p className="text-white font-semibold">
                    Offer Letter PDF Uploaded
                  </p>
                  <p className="text-gray-500 mt-2">
                    Verified applicant offer letter document
                  </p>
                </div>

                <a
                  href={getMediaUrl(data.offerLetter)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-6 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <FiExternalLink />
                  View Offer Letter
                </a>
              </div>
            )}

            {data.document && (
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-[#0f172a] border border-[#1f2937] rounded-2xl p-6">
                <div>
                  <p className="text-white font-semibold">
                    Official Document Uploaded
                  </p>
                  <p className="text-gray-500 mt-2">
                    Supporting visa or applicant document
                  </p>
                </div>

                <a
                  href={getMediaUrl(data.document)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-6 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <FiExternalLink />
                  View Document
                </a>
              </div>
            )}
          </div>
        ) : (
          <NoData
            title="No Document Uploaded"
            description="This applicant record does not contain any uploaded PDF document."
          />
        )}
      </div>

      {/* SAVE BUTTON */}
      {editMode && (
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#10b981] to-[#059669] hover:opacity-90 transition text-white font-semibold shadow-xl flex items-center gap-2"
          >
            <FiSave />
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
