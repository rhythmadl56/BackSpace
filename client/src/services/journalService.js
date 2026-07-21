import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/journals",
});

export const createJournal = (journalData) => {
  return API.post("/", journalData);
};

export const getJournals = () => {
  return API.get("/");
};

export const deleteJournal = (id) => {
    return API.delete(`/${id}`);
};