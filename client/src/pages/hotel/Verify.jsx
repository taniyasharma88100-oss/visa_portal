import { useState } from "react";

import {
  FiSearch,
  FiX,
  FiShield,
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiDownload,
  FiCreditCard,
  FiUser,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";

import { getUserByRefId } from "../../services/api";

const Verify = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a Reference ID or Passport Number");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setUser(null);

      const res = await getUserByRefId(query.trim());
      setUser(res.data);
    } catch {
      setError("No record found matching the provided Reference ID or Passport Number");
    } finally {
      setLoading(false);
    }
  };

  const getMediaUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    const base = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/api\/?$/, "");
    const clean = path.replace(/^\/+/, "");
    return `${base}/${clean}`;
  };

return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center px-6 py-20 overflow-hidden relative">
      {/* GLOW EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#cc0000]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#cc0000]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-[#cc0000]/10 border border-[#cc0000]/20 text-[#cc0000] px-4 py-2 rounded-full text-sm">
            <FiShield />
            Official Visa & Offer Letter Verification
          </div>

          {/* HEADING */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#222222] leading-tight">
              Verify Your
              <span className="text-[#cc0000]">
                {" "}Visa Application
              </span>
            </h1>

            <p className="text-[#555555] mt-8 text-lg leading-9 max-w-xl">
              Instantly verify your official visa application status, tracking timeline, and approved offer letter documents securely through our automated verification portal.
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="space-y-5">
            <div className="bg-white border border-[#dddddd] rounded-3xl p-6 hover:border-[#cc0000]/40 transition">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#cc0000]/10 flex items-center justify-center shrink-0">
                  <FiCheckCircle className="text-[#cc0000] text-2xl" />
                </div>

                <div>
                  <h3 className="text-[#222222] text-xl font-semibold">
                    Officially Verified Status
                  </h3>
                  <p className="text-[#555555] mt-3 leading-7">
                    Authenticated against embassy and official offer letter records with real-time tracking stage updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#dddddd] rounded-3xl p-6 hover:border-[#cc0000]/40 transition">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#505050]/10 flex items-center justify-center shrink-0">
                  <FiShield className="text-[#505050] text-2xl" />
                </div>

                <div>
                  <h3 className="text-[#222222] text-xl font-semibold">
                    Dual Search Capability
                  </h3>
                  <p className="text-[#555555] mt-3 leading-7">
                    Verify seamlessly using either your assigned Reference ID or your Passport Number.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (SEARCH CARD) */}
        <div className="bg-white border border-[#dddddd] rounded-[32px] p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] relative overflow-hidden">
          {/* TOP GLOW */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#cc0000]/10 blur-3xl rounded-full"></div>

          {/* ICON */}
          <div className="flex justify-center mb-8 relative z-10">
            <div className="w-20 h-20 rounded-3xl bg-[#cc0000] flex items-center justify-center shadow-2xl">
              <FiSearch className="text-white text-3xl" />
            </div>
          </div>

          {/* TITLE */}
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl font-bold text-[#222222]">
              Verify Status
            </h2>
            <p className="text-[#555555] mt-4 text-lg">
              Enter your Reference ID or Passport Number
            </p>
          </div>

          {/* INFO */}
          <div className="bg-[#f2f2f2] border border-[#dddddd] rounded-2xl p-5 text-[#555555] text-sm leading-7 mb-8 relative z-10">
            Search with either your official <strong>Reference ID</strong> (e.g. VISA1745...) or your <strong>Passport Number</strong> to view official progress and documents.
          </div>

          {/* FORM */}
          <form onSubmit={handleSearch} className="relative z-10 space-y-6">
            <div>
              <label className="text-sm text-[#555555] mb-3 block">
                Reference ID or Passport Number
              </label>

              <div className="relative">
                <FiCreditCard className="absolute left-5 top-1/2 -translate-y-1/2 text-[#999999] text-lg" />
                <input
                  type="text"
                  placeholder="Ex: VISA1745... or A1234567"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-16 bg-white border border-[#cccccc] rounded-2xl pl-14 pr-6 text-[#222222] placeholder:text-[#999999] focus:border-[#cc0000] focus:ring-4 focus:ring-[#cc0000]/10 outline-none transition uppercase"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-16 bg-[#cc0000] hover:bg-[#a90000] text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition shadow-2xl"
            >
              <FiSearch size={20} />
              {loading ? "Searching..." : "Verify Record"}
            </button>
          </form>

          {/* ERROR */}
          {error && (
            <div className="mt-6 bg-[#cc0000]/10 border border-[#cc0000]/30 rounded-2xl p-4 text-[#a30000] text-sm flex items-center gap-3">
              <FiAlertCircle className="text-xl shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* LOADING */}
          {loading && (
            <div className="mt-6 bg-[#f2f2f2] border border-[#dddddd] rounded-2xl p-4 text-[#555555] text-sm flex items-center gap-3">
              <FiClock className="animate-spin text-xl shrink-0" />
              <span>Validating verification record...</span>
            </div>
          )}
        </div>
      </div>

      {/* VERIFICATION MODAL / RESULT CARD */}
      {user && (
        <div
          onClick={() => setUser(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center px-4 py-8 z-50 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white border border-[#dddddd] rounded-[32px] shadow-[0_20px_100px_rgba(0,0,0,0.3)] my-auto"
          >
            {/* HEADER */}
            <div className="px-7 py-5 border-b border-[#dddddd] flex justify-between items-center bg-[#f2f2f2]">
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-2xl font-semibold text-[#222222]">
                    Verification Result
                  </h2>
                  <p className="text-[#555555] text-sm mt-0.5">
                    Official visa and application record
                  </p>
                </div>
              </div>

              <button
                onClick={() => setUser(null)}
                className="w-11 h-11 rounded-xl bg-white border border-[#dddddd] hover:bg-[#e5e5e5] text-[#555555] hover:text-[#222222] transition flex items-center justify-center"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* BODY */}
            <div className="p-7 space-y-6">
              {/* BADGES BAR */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
                  <FiCheckCircle className="text-green-700" />
                  Officially Verified
                </div>

                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold
                  ${
                    user.status === "Approved"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : user.status === "Pending"
                      ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                      : "bg-[#cc0000]/10 text-[#cc0000] border border-[#cc0000]/20"
                  }`}
                >
                  Status: {user.status}
                </span>
              </div>

              {/* APPLICANT PROFILE */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 bg-[#f2f2f2] border border-[#dddddd] rounded-2xl p-5">
                <img
                  src={user.image ? getMediaUrl(user.image) : "/default-avatar.png"}
                  alt={user.name || "Applicant"}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/default-avatar.png";
                  }}
                  className="w-20 h-20 rounded-2xl object-cover border border-[#dddddd] shadow-md"
                />

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#222222]">
                    {user.name}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-[#555555] font-mono">
                    <span className="bg-white px-3 py-1 rounded-lg border border-[#dddddd]">
                      Passport: {user.passportNumber}
                    </span>
                    <span className="bg-white px-3 py-1 rounded-lg border border-[#dddddd]">
                      Ref ID: {user.refId}
                    </span>
                  </div>
                </div>
              </div>

              {/* DETAILS GRID */}
              <div className="grid sm:grid-cols-2 gap-4">
                {user.dob && (
                  <div className="bg-[#f2f2f2] border border-[#dddddd] rounded-2xl p-4">
                    <p className="text-[#777777] text-xs flex items-center gap-1.5">
                      <FiCalendar /> Date of Birth
                    </p>
                    <p className="text-[#222222] font-medium text-base mt-2">
                      {new Date(user.dob).toLocaleDateString()}
                    </p>
                  </div>
                )}

                {user.salary && (
                  <div className="bg-[#f2f2f2] border border-[#dddddd] rounded-2xl p-4">
                    <p className="text-[#777777] text-xs flex items-center gap-1.5">
                      <FiDollarSign /> Salary / Remuneration
                    </p>
                    <p className="text-[#222222] font-medium text-base mt-2">
                      {user.salary}
                    </p>
                  </div>
                )}
              </div>

              {/* OFFER LETTER PDF (CONDITIONAL - HIDDEN IF NONE) */}
              {(user.offerLetter || user.document) && (
                <div className="bg-[#f2f2f2] border border-[#dddddd] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#cc0000]/10 flex items-center justify-center shrink-0">
                      <FiFileText className="text-[#cc0000] text-2xl" />
                    </div>

                    <div>
                      <h4 className="text-[#222222] font-semibold">
                        Offer Letter
                      </h4>
                      <p className="text-[#555555] text-xs mt-0.5">
                        Verified official Offer Letter PDF document
                      </p>
                    </div>
                  </div>

                  <a
                    href={getMediaUrl(user.offerLetter || user.document)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-5 rounded-xl bg-[#cc0000] hover:bg-[#a90000] transition text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shrink-0"
                  >
                    <FiDownload />
                    View Offer Letter
                  </a>
                </div>
              )}

              {/* 3 TRACKING STAGES */}
              <div className="bg-white border border-[#dddddd] rounded-2xl p-6">
                <h4 className="text-[#222222] text-lg font-semibold mb-5 flex items-center gap-2">
                  <FiClock className="text-[#cc0000]" />
                  Application Tracking Stages
                </h4>

                <div className="space-y-4">
                  {user.tracking && user.tracking.length > 0 ? (
                    user.tracking.map((step, i) => {
                      const done = step.status === "Done";
                      const trackingTitles = [
                        "Signed Offer Letter",
                        "LMIA Issued",
                        "ETA Approved"
                      ];
                      const title = trackingTitles[i] || step.title;

                      return (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3.5 rounded-xl bg-[#f2f2f2] border border-[#e5e5e5]"
                        >
                          <div className="flex items-center gap-3.5">
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                done
                                  ? "bg-green-600 text-white"
                                  : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                              }`}
                            >
                              {done ? "✓" : i + 1}
                            </div>

                            <span className="text-[#222222] text-sm font-medium">
                              {title}
                            </span>
                          </div>

                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              done
                                ? "bg-green-50 text-green-700 border border-green-200"
                                : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                            }`}
                          >
                            {done ? "Completed" : "In Progress"}
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-[#777777] text-sm">
                      Tracking stages being initialized.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-7 py-5 border-t border-[#dddddd] bg-[#f2f2f2]">
              <button
                onClick={() => setUser(null)}
                className="w-full h-12 rounded-xl bg-[#cc0000] hover:bg-[#a90000] transition text-white font-semibold text-sm"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verify;
