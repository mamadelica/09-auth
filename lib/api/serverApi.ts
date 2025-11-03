import { Note } from "@/types/note";
import { api } from "./api";
import { FetchNotesParams, FetchNotesResponse } from "./api";
import { User } from "@/types/user";
import { cookies } from "next/headers";

export const fetchNotes = async (
  params: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const cookieStore = await cookies();
  const response = await api.get<FetchNotesResponse>(`/notes`, {
    params,
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
};

export async function fetchNoteById(id: string) {
  const cookieStore = await cookies();
  const res = await api.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}

export async function getServMe(): Promise<User> {
  const cookieStore = await cookies();
  const res = await api.get("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}

export async function checkSession() {
  const cookieStore = await cookies();
  const res = await api.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
}
