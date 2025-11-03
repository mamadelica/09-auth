import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import NoteDetails from "@/app/(private routes)/notes/[id]/NoteDetails.client";
import { Metadata } from "next";
import { fetchNoteById } from "@/lib/api/serverApi";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return {
    title: `Note ${note.title}`,
    description: `${note.content.slice(0, 20)}`,
    openGraph: {
      title: `Note ${note.title}`,
      description: `${note.content.slice(0, 20)}`,
      url: `https://notehub.com/app/notes/${id}`,
      siteName: "NoteHub",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "Note Hub image",
        },
      ],
      type: "article",
    },
  };
}

const Note = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetails />
    </HydrationBoundary>
  );
};

export default Note;