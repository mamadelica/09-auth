import React from 'react'
import css from './not-found.module.css'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: `Not-found 404 of Note Hub App`,
  description: "There is no such page, please visit https://notehub.com/",
  openGraph: {
    title: `404 - Note Hub App`,
    description: "This page is not found",
    url: `https://notehub.com/`,
    siteName: "NoteHub",
    images: [
      {
        url: "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-10.png",
        width: 1200,
        height: 630,
        alt: "Note Hub not-found image",
      },
    ],
    type: "article",
  },
};

export default function NotfoundPage() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
<p className={css.description}>Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}
