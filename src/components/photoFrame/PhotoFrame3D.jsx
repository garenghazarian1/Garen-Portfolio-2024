"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import styles from "./PhotoFrame3D.module.css";

export default function PhotoFrame3D() {
  return (
    <div className={styles.wrapper}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <FrameWithImage />
      </Canvas>
    </div>
  );
}

function FrameWithImage() {
  const glb = useGLTF("/frame.glb"); // 👉 your frame model path
  const texture = useLoader(THREE.TextureLoader, "/g02.jpg"); // 👉 your image
  const frameRef = useRef();
  const photoRef = useRef();

  useFrame(() => {
    if (frameRef.current) {
      frameRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={frameRef}>
      <primitive object={glb.scene} scale={0.5} position={[0, 0, 0]} />
      <mesh ref={photoRef} position={[0, 0, 0.4]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.8, 1.2]} />
        <meshStandardMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}
