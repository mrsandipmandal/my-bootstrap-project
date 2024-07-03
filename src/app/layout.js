// src/app/layout/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'My Bootstrap Project',
  description: 'A project using Next.js and Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

