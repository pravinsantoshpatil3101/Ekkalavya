"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      {/* Top bar (hidden on mobile) */}
      <div className="bg-blue-800 text-white text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <FaPhoneAlt size={14} />
              <span>+91 7499987579</span>
            </span>
            <span className="flex items-center space-x-1">
              <MdEmail size={16} />
              <span>info@shreepadprofessionals.in</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span>Follow Us</span>
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/images/logo.png" alt="Shreepad Logo" className="h-10" />
          <span className="text-xl font-bold text-blue-800">SHREEPAD</span>
          <span className="text-sm tracking-wide text-gray-600 hidden sm:block">PROFESSIONALS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-blue-800 font-medium">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/about" className="hover:text-orange-500">About Us</Link>
          <div className="group relative">
            <button className="hover:text-orange-500">Services</button>
            {/* Dropdown */}
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
              <Link href="/services/service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</Link>
              <Link href="/services/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</Link>
              <Link href="/services/service3" className="block px-4 py-2 hover:bg-gray-100">Service 3</Link>
            </div>
          </div>
          <Link href="/refer" className="hover:text-orange-500">Refer & Earn</Link>
          <Link href="/contact" className="hover:text-orange-500">Contact Us</Link>
        </nav>

        {/* Right section: login + burger */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Login
          </Link>
          {/* Hamburger (only mobile) */}
          <button
            className="md:hidden text-3xl text-blue-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-6 space-y-4 text-blue-800 font-medium">
          {/* Top bar contents in mobile */}
          <div className="border-b pb-4 mb-4">
            <p className="flex items-center space-x-2">
              <FaPhoneAlt size={14} />
              <span>+91 7499987579</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <MdEmail size={16} />
              <span>info@shreepadprofessionals.in</span>
            </p>
            <div className="flex items-center space-x-3 mt-3">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          {/* Nav links */}
          <Link href="/" className="block hover:text-orange-500">Home</Link>
          <Link href="/about" className="block hover:text-orange-500">About Us</Link>
          <div>
            <p className="font-semibold">Services</p>
            <div className="ml-4 space-y-2 mt-2">
              <Link href="/services/service1" className="block hover:text-orange-500">Service 1</Link>
              <Link href="/services/service2" className="block hover:text-orange-500">Service 2</Link>
              <Link href="/services/service3" className="block hover:text-orange-500">Service 3</Link>
            </div>
          </div>
          <Link href="/refer" className="block hover:text-orange-500">Refer & Earn</Link>
          <Link href="/contact" className="block hover:text-orange-500">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
