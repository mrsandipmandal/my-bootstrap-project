// src/app/about/page.js
"use client"; // Ensure this directive is at the top if you're using Next.js 13+ with the app directory

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <h1>About Us</h1>
        <p>This is the about page.</p>
      </div>
      <Footer />
    </div>
  );
}
