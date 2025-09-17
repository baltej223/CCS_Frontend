"use client";
import logo from '../../../public/mask-group.png';
import Image from 'next/image';

export default function Navbar(){
    return(
        <div >
            <nav
            className="flex justify-between items-center px-8 py-4 
                        bg-[linear-gradient(90deg,_rgba(91,89,89,0.28)_0%,_rgba(162,162,162,0.28)_100%)]
                        text-white font-bold font-righteous text-2xl
                        rounded-[3rem] mx-50 my-5 shadow-md">
            <Image src={logo} alt="CCS Logo" className="h-10 w-20 mr-4"/>
            <ul className="flex gap-8 text-lg">
                <li>
                    <a href="/" className="hover:text-orange-400 transition-colors duration-200">
                        Home
                    </a>
                </li>
                <li>
                <a href="/teams" className="hover:text-orange-400 transition-colors duration-200">
                    Team
                </a>
                </li>  
                <li>
                    <a href="/alumni" className="hover:text-orange-400 transition-colors duration-200">
                        Alumni
                    </a>
                </li>
                <li>
                    <a href="/events" className="hover:text-orange-400 transition-colors duration-200">     
                        Events
                    </a>
                </li>
                <li>
                <a href="/about" className="hover:text-orange-400 transition-colors duration-200">
                    About
                </a>
                </li>


            </ul>
            </nav>
        </div>

    )
}