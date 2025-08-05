import React from 'react'
import { FaBook, FaReact, FaRocket } from "react-icons/fa";
const links = [
    {
        name: "Vite Documentation",
        icon: <FaBook />,
        href: "#",
    },
    {
        name: "React Guide",
        icon: <FaReact />,
        href: "#",
    },
    {
        name: "Frontend Trends",
        icon: <FaRocket />,
        href: "#",
    },
];
const Aside = () => {
    return (
        <aside className='p-6 bg-gray-200 rounded shadow-md'>
            <h2 className='text-xl font-bold'>📌Related Links</h2>
            <ul className='mt-2 space-y-2'>
                {links.map(link => (
                    <li>
                        <a href={link.href} className='flex items-center text-blue-800 gap-1 hover:underline'>
                            {link.icon}
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
export default Aside;