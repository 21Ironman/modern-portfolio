import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, TorusKnot, Image, Environment } from '@react-three/drei';
import * as THREE from 'three';

function PremiumGlassTorus() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base slow rotation
      meshRef.current.rotation.x += delta * 0.05;
      
      // Scroll-based smooth rotation and parallax
      const scrollY = window.scrollY;
      const targetRotationY = scrollY * 0.002;
      const targetPositionY = -scrollY * 0.002;
      
      // Smoothly interpolate current state to target state for buttery Apple-like feel
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetPositionY, 0.05);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <TorusKnot ref={meshRef} args={[1.5, 0.5, 256, 64]} position={[2, 0, -3]}>
        <MeshTransmissionMaterial 
          backside
          samples={4}
          thickness={3}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
          resolution={1024}
        />
      </TorusKnot>
    </Float>
  );
}

function FloatingImages() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      const scrollY = window.scrollY;
      // Scroll based floating parallax moving opposite to the glass orb
      const targetY = scrollY * 0.003;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
        <Image 
          url="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" 
          scale={[5, 3]} 
          position={[-4, 2, -5]} 
          rotation={[0.1, 0.3, -0.05]}
          transparent
          opacity={0.3}
          grayscale={1} // Monochromatic for premium feel
        />
      </Float>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <Image 
          url="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
          scale={[6, 3.5]} 
          position={[3, -4, -8]} 
          rotation={[-0.1, -0.2, 0.05]}
          transparent
          opacity={0.15}
          grayscale={1}
        />
      </Float>
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#a1a1aa" />
        
        {/* High dynamic range environment map for realistic glass refraction */}
        <Environment preset="city" />
        
        <FloatingImages />
        <PremiumGlassTorus />
      </Canvas>
    </div>
  );
}
