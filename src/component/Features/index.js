"use client";
import Image from "next/image";
import { FaRegMoneyBillAlt, FaUserTie, FaClipboardCheck, FaThumbsUp } from "react-icons/fa";

const features = [
  {
    id: "01",
    title: "Affordable Prices",
    desc: "Providing high-quality services at affordable prices, we prioritize delivering value to our clients without compromising on excellence.",
    icon: <FaRegMoneyBillAlt className="text-blue-800 text-2xl" />,
  },
  {
    id: "02",
    title: "Proactive Compliance",
    desc: "We assure timely compliance and minimize your compliance risks, ensuring a streamlined and risk-free operational environment.",
    icon: <FaClipboardCheck className="text-blue-800 text-2xl" />,
  },
  {
    id: "03",
    title: "Expert Consulting",
    desc: "Our experienced team of professionals across diverse sectors offers tailored services for individuals and businesses.",
    icon: <FaUserTie className="text-blue-800 text-2xl" />,
  },
  {
    id: "04",
    title: "Data Security",
    desc: "At our forefront is the top priority of securing your financial data. Complying with data security rules.",
    icon: <FaThumbsUp className="text-blue-800 text-2xl" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Why Choose Us?
        </h2>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            {features.slice(0, 2).map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                <span className="text-5xl font-bold text-gray-200 mt-2">{item.id}</span>
                <hr className="mt-2 border-gray-200" />
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image
              src="/why-us.jpg" // replace with your image path
              alt="Why Choose Us"
              width={350}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            {features.slice(2, 4).map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                <span className="text-5xl font-bold text-gray-200 mt-2">{item.id}</span>
                <hr className="mt-2 border-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
