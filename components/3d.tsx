import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "@/public/3DImage/Scene";
import { Suspense } from "react";


const Fallback = ()=>{
  return (
    <div className="">
    Oops!!! An error occured.
    </div>
  )
}

const ThreeImage = () => {
  return (
    <div className='w-full h-full cursor-grab'>
      <Canvas>
        <ambientLight intensity={1.25} />
        <Suspense fallback={<Fallback/>}>
        <Model />
        </Suspense>
        <Environment preset="apartment" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeImage;
