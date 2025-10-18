

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center} from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import Marquee from "../components/movingCards";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";



interface CardProps {
  children: React.ReactNode;  
  delay?: number;             
}


import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Card from "../components/card";


// Floating 3D Model
function Model(props: any) {
  const { scene } = useGLTF("/models/ccs(1).glb");
  return <primitive object={scene} {...props} />;
}

function FloatingModel() {
  const ref = useRef<Group>(null!);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1; // up & down
    // ref.current.rotation.y += 0.003; // slow spin
  });

  return (
    <Center>
    <group ref={ref} scale={1.5} position={[0,-1,0]}>
      <Model />
    </group>
    </Center>
  );
}



export default function Page() {
  const items = [
    "Workshops",
    "Hackathons",
    "Projects",
    "Seminars",
    "Competitions",
    "Innovations",
  ];

  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen mt-4">
        <Navbar />

        {/* 3D Background */}
        <Canvas
          camera={{ position: [-2.5, 3.5, 5.5], fov: 40 }}
          className="absolute inset-0 z-0 opacity-50"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} castShadow shadow-mapSize={[1024, 1024]} />
          <FloatingModel />
          <OrbitControls enableZoom={false} />
        </Canvas>

        {/* Foreground Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="absolute w-[1000px] h-[1000px] rounded-full bg-white opacity-12 blur-3xl"></div>
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] pt-3 animate-typing">
            CREATIVE<br /> COMPUTING <br /> SOCIETY
          </span>
          <p className="mt-10 text-l md:text-xl text-gray-200 max-w-2xl drop-shadow-lg">
            Creative Computing Society (CCS) is one of the oldest and the most prestigious societies of Thapar Institute of Engineering and Technology. With the knowledge and experience of 21 years, the society aims to create and promote a healthy technical environment at TIET.
          </p>
        </div>
      </section>

      {/* WHY CCS Section */}
      <section className="relative w-full py-20 bg-black text-center overflow-hidden">
        <span className="block text-5xl font-extrabold text-white mb-16">
          WHY CCS?
        </span>
        <Marquee />
      </section>
      {/* //an year at ccs */}
        <span className="text-5xl font-extrabold text-white mb-16 flex justify-center align-middle">
          AN YEAR AT CCS
        </span>
    <section className="py-20 bg-black text-white space-y-24">

      <div className="flex flex-col md:flex-row items-center justify-between px-10 gap-10 group">
        <img
          src="orientation_week.jpg"
          alt="Introductory Week"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="relative w-full md:w-1/2 h-[250px] flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-400/20 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out rounded-2xl"></div>
          <div className="relative z-10 text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            <h2 className="text-3xl font-extrabold mb-2 text-white">INTRODUCTORY WEEK</h2>
            <p className="text-white">
              The newly recruited members are introduced to various fields of computer science and technology by the core members.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-between px-10 gap-10 group">
        <img
          src="events.png"
          alt="Events"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="relative w-full md:w-1/2 h-[250px] flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-gray-400/20 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out rounded-2xl"></div>
          <div className="relative z-10 text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            <h2 className="text-3xl font-extrabold mb-2 text-white">INTRA-COLLEGE EVENTS</h2>
            <p className="text-white">
              Various intra-college events are organised by our society as parts of CHAKRAVYUH and HELIX weeks; one in both semesters.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-10 gap-10 group">
        <img
          src="hack.png"
          alt="Hackathon"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="relative w-full md:w-1/2 h-[250px] flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-400/20 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out rounded-2xl"></div>
          <div className="relative z-10 text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            <h2 className="text-3xl font-extrabold mb-2 text-white">HACKATHONS</h2>
            <p className="text-white">
              Hackathons organised by CCS are competitive overnight events where participants collaborate to build innovative ideas.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-between px-10 gap-10 group">
        <img
          src="workshops.png"
          alt="workshop"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="relative w-full md:w-1/2 h-[250px] flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-gray-400/20 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out rounded-2xl"></div>
          <div className="relative z-10 text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            <h2 className="text-3xl font-extrabold mb-2 text-white">WORKSHOPS</h2>
            <p className="text-white">
              CCS organises workshops to introduce new concepts for all the students of college. It's a great way to teach hands-on skills.
            </p>
          </div>
        </div>
      </div>

    </section>

    {/*CONTACT SECTION */}
    <section className="relative w-full py-20 bg-gray-900 text-center overflow-hidden">
      <span className="block text-5xl font-extrabold text-white mb-16">
        CONTACT US
      </span>
      
    </section>




    </div>
  );
}
