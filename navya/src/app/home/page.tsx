

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center} from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
// import Card from "../components/card";

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
    <div className="relative w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen mt-4 ">
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
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] pt-3">
            CREATIVE<br /> COMPUTING <br /> SOCIETY
          </span>
          <p className="mt-10 text-l md:text-xl text-gray-200 max-w-2xl drop-shadow-lg">
            Creative Computing Society (CCS) is one of the oldest and the most prestigious societies of Thapar Institute of Engineering and Technology. With the knowledge and experience of 21 years, the society aims to create and promote a healthy technical environment at TIET.
          </p>
        </div>
      </section>

      {/* NEXT SECTION */}
    <section className="relative w-full py-20 bg-black overflow-hidden text-center">
      <span className="block text-5xl font-extrabold text-white mb-16">
        WHY CCS?
      </span>

      {/* Moving Cards Row */}
      {/* <div className="flex justify-center gap-10">
        {items.map((item, idx) => (
          <Card key={idx} delay={idx * 1.3}>
            {item}
          </Card>
        ))} */}
      {/* </div> */}
    </section>
    </div>
  );
}

// function Card({ children, delay }: { children: React.ReactNode; delay: number }) {
//   return (
//     <motion.div
//       className="w-[250px] h-[250px] flex items-center justify-center 
//                  bg-white shadow-xl rounded-3xl text-xl font-bold text-gray-800"
//       animate={{ x: ["120%" , "0%"] }} // start from right, move left
//       transition={{
//         duration: 8,       // how long one loop takes
//         repeat: Infinity,  // infinite loop
//         ease: "linear",    // smooth constant speed
//         delay,
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

function Card(){
    return(
        <div>
            HI
        </div>
    )
}