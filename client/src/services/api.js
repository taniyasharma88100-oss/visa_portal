import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// ✅ attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

/* =========================
   USER (VISA & OFFER LETTER) APIs
========================= */

// GET ALL (with pagination, search, filter)
export const getUsers = (params) =>
  API.get("/api/user", { params });

// GET BY REF ID / PASSPORT (public)
export const getUserByRefId = (refId) =>
  API.get(`/api/user/${encodeURIComponent(refId)}`);

// GET BY ID (ADMIN)
export const getUserById = (id) =>
  API.get(`/api/user/id/${id}`);

// ADD USER
export const addUser = (data) =>
  API.post("/api/user", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

// UPDATE USER
export const updateUser = (id, data) =>
  API.put(`/api/user/${id}`, data);

// DELETE USER
export const deleteUser = (id) =>
  API.delete(`/api/user/${id}`);

// Backward compatibility aliases
export const getInsurance = getUsers;
export const getInsuranceByRefId = getUserByRefId;
export const getInsuranceById = getUserById;
export const addInsurance = addUser;
export const updateInsurance = updateUser;
export const deleteInsurance = deleteUser;

export default API;