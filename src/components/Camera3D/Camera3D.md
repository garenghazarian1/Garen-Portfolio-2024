# Camera3D — 3D Rotating Camera with Image Lens (2025 Ultra Version)

## Description

A fully interactive 3D Camera component for portfolio built using:

- React Three Fiber
- Drei Helpers
- Three.js
- GLTF Model of Camera
- Texture Loader for Image inside the lens
- Smooth Rotation Animation until front-facing stop

## Tech Stack Used

| Library            | Purpose                             |
| ------------------ | ----------------------------------- |
| @react-three/fiber | Render WebGL in React               |
| @react-three/drei  | Helpers (OrbitControls, useGLTF)    |
| three              | Core 3D engine                      |
| GLTF Model         | /public/lens.glb — 3D Camera body   |
| Texture            | /public/g02.jpg — Image inside lens |

## Structure of Camera3D.jsx

```
<Canvas>
  <ambientLight />
  <pointLight />
  <RotatingCamera />
  <OrbitControls enableZoom={false} enablePan={false} />
</Canvas>
```

## RotatingCamera Logic

| Element                          | Purpose                                       |
| -------------------------------- | --------------------------------------------- |
| <group ref={groupRef}>           | Entire camera + lens image rotate together    |
| <primitive object={cam.scene} /> | The imported GLTF camera model                |
| <mesh>                           | Circular image on the lens                    |
| useFrame                         | Animate rotation until perfect front (y-axis) |

## Key Transformations

```
<primitive
  object={cam.scene}
  scale={80}
  position={[0.08, 0, 0]}
/>
<mesh
  position={[-1.5, 0, 0]}
  rotation={[0, -Math.PI / 2, 0]}
>
  <circleGeometry args={[1, 64]} />
  <meshStandardMaterial map={texture} transparent opacity={0.95} />
</mesh>
```

## Rotation Logic

```
useFrame((state, delta) => {
  if (!rotationDone && groupRef.current) {
    groupRef.current.rotation.y += delta * 1;
    if (groupRef.current.rotation.y >= Math.PI * 2.48) {
      groupRef.current.rotation.y = 1.5;
      setRotationDone(true);
    }
  }
});
```

## Position & Rotation Logic

| Element       | Value              | Why                                       |
| ------------- | ------------------ | ----------------------------------------- |
| Camera Scale  | 80                 | GLB model scaling                         |
| Lens Position | [-1.5, 0, 0]       | Perfect fit on lens                       |
| Lens Rotation | [0, -Math.PI/2, 0] | Rotate image left-right to face correctly |

## Notes

- Load GLTF model: const cam = useGLTF("/lens.glb")
- Load texture: const texture = useLoader(THREE.TextureLoader, "/g02.jpg")

## Next Steps Ideas

| Feature                | How                                    |
| ---------------------- | -------------------------------------- |
| Lens Glow              | Add second mesh with emissive material |
| Auto Zoom at End       | Animate groupRef.current.scale         |
| GSAP Smooth Rotation   | Replace useFrame with GSAP Timeline    |
| Lens Reflection Shader | Custom ShaderMaterial                  |

## Final Result

- Realistic 3D Camera
- Rotating until front
- Image inside lens rotates together
- Perfectly clean responsive integration
