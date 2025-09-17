"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        {/* Heading */}
        <h3 className="text-orange-500 font-semibold text-lg mb-2">
          About Us
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Simplify your Compliance need
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed mb-8">
          Welcome to Shreepad Professionals Pvt. Ltd., your trusted partner in tax,
          corporate compliance, and investment advisory services. We specialize in
          providing comprehensive and proactive solutions to meet the evolving
          regulatory needs of businesses across industries. Our expert team ensures
          timely adherence to tax laws, corporate regulations, and financial reporting
          standards, helping you mitigate risks and optimize operations. Whether
          you’re a small business or a large corporation, we offer personalized
          services tailored to your unique needs, empowering your business to thrive
          in a complex regulatory landscape.
        </p>

        {/* Button + Google Review */}
        <div className="flex items-center space-x-6">
          {/* Button */}
          <Link
            href="/about"
            className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-md font-medium hover:bg-orange-500 hover:text-white transition"
          >
            Read More
          </Link>

          {/* Google Reviews */}
          <div className="flex items-center space-x-2">
            <Image
              src="/google-logo.png" // replace with your google logo file
              alt="Google Reviews"
              width={100}
              height={30}
            />
            <span className="text-gray-600 text-sm">Reviews ⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
    </section>
  );
}
