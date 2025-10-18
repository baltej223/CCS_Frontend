"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center} from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import { Children } from "react";
import Navbar from "../components/Navbar";
import CcsLogo from "../components/model";

function Model(props: any) {
  const { scene } = useGLTF("/models/bulb.glb");
  return <primitive object={scene} {...props} />;
}

function FloatingModel() {
  const ref = useRef<Group>(null!);


  return (
    <Center>
    <group ref={ref} scale={50} position={[0,-1,0]}>
      <Model />
    </group>
    </Center>
  );
}


type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

export default function EventsPage() {
  return (
    <div>
        <Navbar />
        <Canvas
          camera={{ position: [-2.5, 3.5, 5.5], fov: 40 }}
          className="absolute inset-0 z-0 opacity-50"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} castShadow shadow-mapSize={[1024, 1024]} />
          <FloatingModel />
          <OrbitControls enableZoom={false} />
        </Canvas>        
    </div>

  );
}