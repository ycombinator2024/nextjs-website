import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './index.module.css';
import React from 'react';

function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Payments Calendar</h1>
        <iframe src="https://razvedchik.org/" className="w-screen h-screen"></iframe>
      </div>

      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;