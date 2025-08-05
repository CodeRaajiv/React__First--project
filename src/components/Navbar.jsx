// App.jsx
import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaPhone, // Replacing FaContact
} from "react-icons/fa";

// Navigation links data
const navLinks = [
  {
    name: "Home",
    icon: <FaHome/>,
    href: "#home"
  },
  {
    name: "About",
    icon: <FaInfoCircle/>,
    href: "#about"
  },
  {
    name: "Services",
    icon: <FaServicestack/>,
    href: "#services"
  },
  {
    name: "Contact",
    icon: <FaEnvelope/>,
    href: "#contact"
  },
  {
    name: "Support",
    icon: <FaPhone/>,
    href: "#support"
  },
];

// Navbar component
export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">🚀MyWebsite</h1>
        <ul className="flex space-x-6">
          {navLinks.map((link,index)=>(
            <li key={index}>
            <a className="flex items-center gap-2 text-white hover:text-blue-400"
            href={link.href}>
                 {link.icon}
                 {link.name}
             </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

