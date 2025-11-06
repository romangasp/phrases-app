import axios from "axios";
import { ENDPOINTS } from "./endpoint";

export const axiosBase = axios.create({
    baseURL: `${ENDPOINTS.ROOT}`,
    headers: { "Content-Type": "application/json" },
})