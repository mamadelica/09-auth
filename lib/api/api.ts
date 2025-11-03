import { Note } from "@/types/note";
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  withCredentials: true,
});

export type ApiError = AxiosError<{ error: string }>;

export  interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
  tag?: string;
}

export interface SessionCheckResponse {
  success: boolean;
}


