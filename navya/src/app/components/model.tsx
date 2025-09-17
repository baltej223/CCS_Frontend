"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import {Mesh} from "three"; 

function MovingBox(){
    const {scene} = useGLTF("/models/CCS_NAME.glb");
    const meshRef = useRef<Mesh>(null!);
    const[keys, setKeys] = useState<{[key:string]:boolean}>({});

    useFrame(() => {
    if (!meshRef.current) return;

    if (keys["ArrowUp"]) meshRef.current.position.z -= 0.1;
    if (keys["ArrowDown"]) meshRef.current.position.z += 0.1;
    if (keys["ArrowLeft"]) meshRef.current.position.x -= 0.1;
    if (keys["ArrowRight"]) meshRef.current.position.x += 0.1;
  });
    return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function CcsLogo({src}:{src: string}){
    const gltf = useGLTF(src);

    return(
        <Canvas>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10,15,10]}/>
            <Suspense fallback ={null}>
                <primitive object={gltf.scene} scale={1.5
                } position={[0,-1,0]}/>
            </Suspense>
            <MovingBox />
            <OrbitControls enableZoom={false} />
            
        </Canvas>
    );
}
// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, OrbitControls } from "@react-three/drei";
// import { useRef } from "react";
// import { Group } from "three";

// // ✅ Load your model
// function Model(props: any) {
//   const { scene } = useGLTF("/models/CCS_NAME.glb"); // place your file in /public
//   return <primitive object={scene} {...props} />;
// }

// function FloatingModel() {
//   const ref = useRef<Group>(null!);

//   useFrame(({ clock }) => {
//     if (!ref.current) return;

//     // Make it float up and down
//     ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.8; 
//     // (0.2 = amplitude, adjust for bigger/smaller float)
//   });

//   return (
//     <group ref={ref} position={[0, 0, 0]} scale={1.5}>
//       <Model />
//     </group>
//   );
// }

// export default function Page() {
//   return (
//     <Canvas camera={{ position: [0, 2, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       <FloatingModel />
//       <OrbitControls /> {/* optional: move the camera */}
//     </Canvas>
//   );
// }
