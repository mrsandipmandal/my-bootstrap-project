// src/app/components/Footer.js
"use client";

import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Link href="https://mdbootstrap.com/" className="text-body">MDBootstrap.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
