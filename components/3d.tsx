import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "@/public/3DImage/Scene";
import { Suspense } from "react";

const ThreeImage = () => {
  return (
    <div className='w-full h-full cursor-grab'>
      <Canvas>
        <ambientLight intensity={1.25} />
        <Suspense fallback={null}>
        <Model />
        </Suspense>
        <Environment preset='sunset' />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeImage;
