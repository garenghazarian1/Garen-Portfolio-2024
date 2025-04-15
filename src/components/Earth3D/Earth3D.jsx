"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import styles from "./Earth3D.module.css";

export default function Earth3D() {
  return (
    <div className={styles.wrapper}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingModel />
      </Canvas>
    </div>
  );
}

function RotatingModel() {
  const earth = useGLTF("/earthquakes.glb");
  const groupRef = useRef();
  const [rotationDone, setRotationDone] = useState(false);

  useFrame((_, delta) => {
    if (!rotationDone && groupRef.current) {
      groupRef.current.rotation.y += delta;
      if (groupRef.current.rotation.y >= Math.PI * 2.48) {
        groupRef.current.rotation.y = 1.5;
        setRotationDone(true);
      }
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={earth.scene}
        scale={0.3}
        position={[0.08, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}
