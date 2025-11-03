import { Note } from "@/types/note";
import { api, FetchNotesParams, FetchNotesResponse, SessionCheckResponse } from "./api";
import { User, UserData, UserRegisterData } from "@/types/user";


export const fetchNotes = async ({
  page = 1,
  perPage = 12,
  search = '',
  tag
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await api.get<FetchNotesResponse>('/notes',{
    params: {
      page,
      perPage,
      search,
      tag,
    },
  });
  return response.data;
};

export const createNote = async (
  newNote: Omit<Note,
  'id' | 'createdAt' | 'updatedAt'>
): Promise<Note> => {
  const response = await api.post<Note>('/notes', newNote);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${noteId}`);
  return response.data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
    const response = await api.get<Note>(`/notes/${noteId}`);
    return response.data;
}

export async function register(data: UserRegisterData): Promise<User> {
  const res = await api.post<User>("/auth/register", data);
  return res.data;
}

export async function login(data: UserRegisterData): Promise<User> {
  const res = await api.post<User>("/auth/login", data, {
    withCredentials: true,
  })
;
  return res.data;
}

export async function logout(): Promise<void> {
  await api.post("/auth/logout");
}

export async function checkSession(): Promise<SessionCheckResponse> {
  const res = await api.get("/auth/session");
  return res.data;
}

export async function getMe(): Promise<User> {
  const res = await api.get("/users/me");
  return res.data;
}

export async function updateMe(data: UserData): Promise<User> {
  const res = await api.patch("/users/me", data);
  return res.data;
}
