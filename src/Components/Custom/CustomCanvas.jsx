import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
   useGLTF,
   Stage,
   PresentationControls,
   Environment,
   OrbitControls,
   ContactShadows,
} from '@react-three/drei';

// function Model(props) {
//    const { scene } = useGLTF(${});
//    return <primitive object={scene} {...props} />;
// }

const RotatingModel = ({ scene }) => {
   const ref = useRef();

   useFrame(() => {
      if (ref.current) {
         ref.current.rotation.y += 0.002;
      }
   });

   return <primitive ref={ref} object={scene} scale={0.05} />;
};

const CustomCanvas = ({ imgUrl, style }) => {
   const { scene } = useGLTF(`${imgUrl}`);
   return (
      <Canvas
         dpr={[1, 3]}
         shadows
         camera={{ fov: 45 }}
         style={{ width: '100px', height: '100px', background: 'transparent' }}
         gl={{ alpha: true }}>
         <ambientLight intensity={2} />
         <OrbitControls enableZoom={false} />

         <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="sunset">
               <RotatingModel scene={scene} />
            </Stage>
         </PresentationControls>
         <Environment preset="sunset" />
      </Canvas>
   );
};

export default CustomCanvas;