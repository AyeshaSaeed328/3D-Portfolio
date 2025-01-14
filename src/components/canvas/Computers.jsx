import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({
  isMobile,
  isVeryNarrow,
  isTall,
  isExtraTall,
  isDoubleExtraTall,
}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Adjust position based on screen properties
  const position = isDoubleExtraTall
    ? [0, -1, -2.2] // For very tall screens (>1200px)
    : isExtraTall
    ? [0, -2.5, -1.5] // For extra tall screens (>1000px)
    : isTall
    ? [0, -2, -1.5] // For tall screens (>800px)
    :isVeryNarrow
    ? [0, -3.5, -1.5] 
    : isMobile
    ? [0, -2.5, -1.5] // For mobile and very narrow screens
    
    : [0, -3.25, -1.5]; // Default for other screens

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile || isVeryNarrow ? 0.5 : 0.7}
        position={position} // Dynamically set the position
        rotation={[-0.01, -0.2, -0.1]}
      />
     
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVeryNarrow, setIsVeryNarrow] = useState(false);
  const [isTall, setIsTall] = useState(false);
  const [isExtraTall, setIsExtraTall] = useState(false);
  const [isDoubleExtraTall, setIsDoubleExtraTall] = useState(false);

  useEffect(() => {
    // Add listeners for screen size changes
    const updateScreenProperties = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update states based on conditions
      setIsMobile(width <= 500);
      setIsVeryNarrow(width <= 350); // Check for very narrow screens
      setIsTall(height > 800);
      setIsExtraTall(height > 1000);
      setIsDoubleExtraTall(height > 1200);
    };

    // Run the function initially
    updateScreenProperties();

    // Add resize event listener
    window.addEventListener("resize", updateScreenProperties);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", updateScreenProperties);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          isMobile={isMobile}
          isVeryNarrow={isVeryNarrow}
          isTall={isTall}
          isExtraTall={isExtraTall}
          isDoubleExtraTall={isDoubleExtraTall}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
