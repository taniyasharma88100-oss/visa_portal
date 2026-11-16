import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../../services/api";
import toast from "react-hot-toast";
import { FiArrowLeft } from "react-icons/fi";

const TRACKING_STAGES = [
  "Signed Offer Letter",
  "LMIA Issued",
  "ETA Approved",
];

const DEFAULT_TRACKING = [
  { title: "Signed Offer Letter", status: "Pending" },
  { title: "LMIA Issued", status: "Pending" },
  { title: "ETA Approved", status: "Pending" },
];

const UserTracking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [tracking, setTracking] = useState(DEFAULT_TRACKING);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getUserById(id);
        setUserName(res.data.name || "");
        if (res.data.tracking && res.data.tracking.length > 0) {
          const synced = TRACKING_STAGES.map((title, i) => ({
            _id: res.data.tracking[i]?._id,
            title,
            status: res.data.tracking[i]?.status || "Pending",
          }));
          setTracking(synced);
        } else {
          setTracking(DEFAULT_TRACKING);
        }
      } catch {
        toast.error("Failed to load tracking data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (index, value) => {
    const updated = [...tracking];
    updated[index].status = value;
    setTracking(updated);
  };

  const handleSave = async () => {
    try {
      await updateUser(id, { tracking });
      toast.success("Tracking timeline updated successfully");
    } catch {
      toast.error("Failed to update tracking");
    }
  };

  const completed = tracking.filter((t) => t.status === "Done").length;
  const progress = tracking.length ? (completed / tracking.length) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => navigate(`/admin/user/${id}`)}
            className="text-gray-400 hover:text-white flex items-center gap-2 text-sm mb-3 transition"
          >
            <FiArrowLeft /> Back to Details
          </button>
          <h1 className="text-3xl font-bold text-white">Tracking Timeline</h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage and update visa progress for {userName || "Applicant"}
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-8 shadow-2xl">
        {/* PROGRESS */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Overall Progress</span>
            <span className="font-semibold text-white">
              {completed} of {tracking.length} Completed
            </span>
          </div>

          <div className="w-full bg-[#0f172a] h-3 rounded-full overflow-hidden border border-[#1f2937]">
            <div
              className="bg-gradient-to-r from-[#10b981] to-[#059669] h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="space-y-6">
          {tracking.map((step, index) => {
            const isDone = step.status === "Done";

            return (
              <div key={index} className="flex gap-5">
                {/* LEFT INDICATOR */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-semibold transition ${
                      isDone
                        ? "bg-[#10b981] text-white shadow-lg shadow-emerald-500/20"
                        : "bg-[#1f2937] text-gray-400"
                    }`}
                  >
                    {isDone ? "✓" : index + 1}
                  </div>

                  {index !== tracking.length - 1 && (
                    <div
                      className={`w-[2px] flex-1 my-2 transition ${
                        isDone ? "bg-[#10b981]" : "bg-[#1f2937]"
                      }`}
                    ></div>
                  )}
                </div>

                {/* CARD */}
                <div className="flex-1 bg-[#0f172a] border border-[#1f2937] rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-white text-base font-semibold">
                        {step.title}
                      </h3>

                      <p
                        className={`text-xs mt-1 font-medium ${
                          isDone ? "text-green-400" : "text-yellow-400"
                        }`}
                      >
                        {isDone ? "Completed" : "In Progress / Pending"}
                      </p>
                    </div>

                    <select
                      value={step.status}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="bg-[#111827] border border-[#1f2937] text-white px-4 py-2 rounded-xl text-sm outline-none focus:border-[#2563eb]"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SAVE */}
        <button
          onClick={handleSave}
          className="w-full mt-10 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserTracking;
