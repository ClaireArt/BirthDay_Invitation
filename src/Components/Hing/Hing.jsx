import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
   useGLTF,
   Stage,
   PresentationControls,
   Environment,
   OrbitControls,
   ContactShadows,
} from '@react-three/drei';

function Model(props) {
   const { scene } = useGLTF('3d_number_-_5_five (1).glb');
   return <primitive object={scene} {...props} />;
}

const Hing = ({url, style}) => {
   return (
      <Canvas
         dpr={[1, 3]}
         shadows
         camera={{ fov: 45 }}
         style={{ position: 'absolute', width: '100px', height: '100px', background: 'transparent' }}
         gl={{ alpha: true }}
      >
         <ambientLight intensity={2} />
         <OrbitControls enableZoom={false} />
        
         <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={'sunset'}>
               <Model scale={0.05} />
            </Stage>
         </PresentationControls>
         <Environment preset="sunset" />
         <ContactShadows
            position={[0, -2, 0]}
            opacity={0}
            scale={20}
            blur={1}
            far={50}
            resolution={250}
            // color={'#000000'}
         />
      </Canvas>
   );
};

export default Hing;
