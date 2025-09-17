"use client";

import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mr. Ulhas Bhopale",
    text: "I have always had a great experience when dealing with the team at shreepad professional. They always go the extra mile on both advice and also customer service. The staff is very polite and humble.",
    rating: 5,
  },
  {
    name: "Mr. Muralikrishna Nair",
    text: "Professionals with very high amount of service quality and domain knowledge. Very much happy with the service. Looking forward for a long term relationship with this firm.",
    rating: 5,
  },
  {
    name: "Mr. Nikheel Shinde",
    text: "Best Firm, polite and proper support, where I came to know all the details about my file. Strongly recommend you.",
    rating: 5,
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
  >
    <FaChevronLeft className="text-gray-500" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
  >
    <FaChevronRight className="text-gray-500" />
  </button>
);

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,       // ✅ Auto slide
    autoplaySpeed: 3000,  // ✅ 3 seconds
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#f3f6fb] py-12">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-10">
          Customers Experience
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center h-full">
                <div className="text-gray-500 mb-4 text-5xl">❝</div>
                <p className="text-gray-600 mb-6">{item.text}</p>
                <h3 className="text-blue-900 font-semibold">{item.name}</h3>
                <div className="flex justify-center mt-3">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-orange-400 text-lg">★</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
