// api.ts
import axios from "axios";
import { ENDPOINTS } from "./Endpoint";


export const api = axios.create({
  baseURL: ENDPOINTS.BASE_URL,
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`, // opcional, se quiser autenticar
  },
});
