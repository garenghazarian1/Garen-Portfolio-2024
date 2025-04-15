"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";
import styles from "./Camera3D.module.css";

export default function Camera3D() {
  return (
    <div className={styles.wrapper}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCamera />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

function RotatingCamera() {
  const cam = useGLTF("/lens.glb");
  const texture = useLoader(THREE.TextureLoader, "/g02.jpg");
  const groupRef = useRef();
  const [rotationDone, setRotationDone] = useState(false);

  useFrame((state, delta) => {
    if (!rotationDone && groupRef.current) {
      groupRef.current.rotation.y += delta * 1;

      if (groupRef.current.rotation.y >= Math.PI * 2.48) {
        groupRef.current.rotation.y = 1.5;
        setRotationDone(true);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Camera Body */}
      <primitive
        object={cam.scene}
        scale={80}
        position={[0.08, 0, 0]}
        rotation={[0, 0, 0]}
      />

      {/* Lens Image */}
      <mesh position={[-1.5, 0, 0]} rotation={[0, Math.PI / -2, 0]}>
        <circleGeometry args={[1, 64]} />
        <meshStandardMaterial map={texture} transparent opacity={0.95} />
      </mesh>
    </group>
  );
}
