// src/app/page.js
"use client"; // Ensure this directive is at the top if you're using Next.js 13+ with the app directory

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <h1>Welcome to Home page</h1>
      <p>This is the homepage.</p>
      <Footer/>
    </div>
  );
}
