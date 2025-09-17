"use client";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "Income Tax",
    items: ["ITR Filing", "Expert Service for Filing (CA/CS)", "Notice / Assessment", "Audit"],
  },
  {
    title: "GST",
    items: ["GST Registration", "GST Return", "Notice / Assessment / Refund", "E-Way Bill", "LUT - Letter of Undertaking"],
  },
  {
    title: "Payroll",
    items: ["Salary Processing", "Labour Law Compliance", "Provident Fund (PF)", "ESIC", "Professional Tax (PT)"],
  },
  {
    title: "Company Incorporation",
    items: ["Private Limited", "Public Limited", "LLP", "Section 8 Company", "OPC", "MCA & Annual Filing", "XBRL Filing"],
  },
  {
    title: "Accounting & Others",
    items: ["Shop Act", "Food Licence", "Monthly Accounting", "TDS Return", "Udyam Registration", "CA/CS Assistance", "Trade Mark Registration"],
  },
  {
    title: "Personal Consultancy",
    items: [
      "We provide professional consultant to your business like - CA, CS, Lawyer & HR",
      "Provide business management consultant.",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Our Services
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-700">
                    <FaCheck className="text-orange-500 mt-1 flex-shrink-0" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="inline-block border-2 border-orange-500 text-orange-500 px-5 py-2 rounded-md font-medium hover:bg-orange-500 hover:text-white transition"
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
