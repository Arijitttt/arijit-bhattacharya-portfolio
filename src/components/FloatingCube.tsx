
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingCubeProps {
  position: [number, number, number];
}

export const FloatingCube = ({ position }: FloatingCubeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.6}
        wireframe={Math.random() > 0.5}
      />
    </mesh>
  );
};
