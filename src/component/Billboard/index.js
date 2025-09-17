"use client";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "../About";

const billboard = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg" // change to your image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl text-left px-6">
        {/* Tag */}
        <div className="inline-block bg-white border-2 border-blue-600 rounded-md px-4 py-1 mb-4">
          <span className="text-blue-700 font-semibold">
            Shreepad Professionals Pvt. Ltd.
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug mb-6">
          Trusted Advisors for <br /> Your Financial Growth
        </h1>

        {/* Button */}
        <Link
          href="/about"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium"
        >
          Read More
        </Link>
      </div>
    </section>
    
  )
}

export default billboard