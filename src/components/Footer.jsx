import React from 'react';
import {FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
const Footer = () => {
    return (
     <footer className='bg-gray-900 text-white text-center py-6'>
        <p>🌍 @ 2025 My Website All Rights Reserved.</p>
        <div className='flex justify-center space-x-2 mt-4 gap-1'>
            <a href='#' className='text-blue-400 hover:text-blue-600 flex items-center'>
            <FaFacebook/>Facebook</a>
            <a href='#' className='text-blue-400 hover:text-blue-600 flex items-center'>
            <FaTwitter/>Twitter</a>
            <a href='#' className='text-blue-400 hover:text-blue-600 flex items-center'>
            <FaInstagram/>Instagram</a>
        </div>
     </footer>
    );
};
export default Footer;