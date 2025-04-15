// import styles from "./Loading.module.css";

// function Loading() {
//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.spinner}></div>

//       </div>
// or
//<div className={styles.loaderWrapper}>
//     <div className={styles.loader}></div>
// </div>
//     </>
//   );
// }

// export default Loading;

"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import styles from "./Loading.module.css";

export default function Loading3D() {
  return (
    <div className={styles.loaderWrapper}>
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} />
        <SpinningGLB />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

function SpinningGLB() {
  const model = useGLTF("/loading.glb"); // <--- your GLB path here
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.02;
    }
  });

  return <primitive ref={modelRef} object={model.scene} scale={0.3} />;
}
