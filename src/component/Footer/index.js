// components/Footer.tsx
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1d56a0] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-2 relative">
            Company
            <span className="block w-12 h-[2px] bg-orange-400 mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Refer & Earn</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-400">User Login</a></li>
            <li><a href="#" className="hover:text-orange-400">Admin Login</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-2 relative">
            Services
            <span className="block w-12 h-[2px] bg-orange-400 mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Income Tax</a></li>
            <li><a href="#" className="hover:text-orange-400">GST</a></li>
            <li><a href="#" className="hover:text-orange-400">Payroll</a></li>
            <li><a href="#" className="hover:text-orange-400">Company Incorporation</a></li>
            <li><a href="#" className="hover:text-orange-400">Accounting Services</a></li>
            <li><a href="#" className="hover:text-orange-400">Personal Consultancy</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="font-bold text-lg mb-2 relative">
            Get In Touch
            <span className="block w-12 h-[2px] bg-orange-400 mt-1"></span>
          </h3>
          <p className="text-sm mb-4">
            <strong>Location:</strong><br />
            Yashada Supreme, Survey No. 96, 97, Dhayrkar Wadi Road, Alandi - Moshi Road,<br />
            Next to RJSPM College, Dudulgaon, Moshi - 412105, Pune, MH, India
          </p>
          <p className="text-sm mb-1"><strong>Phone:</strong> +91 7499998759, +91 9503755349</p>
          <p className="text-sm"><strong>Mail Us:</strong> info@shreepadprofessionals.in</p>
        </div>

        {/* Location / Map */}
        <div>
          <h3 className="font-bold text-lg mb-2 relative">
            Location
            <span className="block w-12 h-[2px] bg-orange-400 mt-1"></span>
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="150"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#222831] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>
            © 2025 <span className="text-orange-400">Shreepad Professionals</span>. All Rights Reserved. | Powered By{" "}
            <span className="text-orange-400">Netwings Solutions</span>
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="p-2 bg-[#1d56a0] rounded-full hover:bg-orange-400"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-[#1d56a0] rounded-full hover:bg-orange-400"><FaTwitter /></a>
            <a href="#" className="p-2 bg-[#1d56a0] rounded-full hover:bg-orange-400"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-[#1d56a0] rounded-full hover:bg-orange-400"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
