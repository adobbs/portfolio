import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, ThreeElements } from '@react-three/fiber';

export default function RedPill(props: ThreeElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => {
      mesh.current.rotation.z -= (delta * 0.7);
      mesh.current.rotation.x -= (delta * 0.5);
    });
    return (
        <mesh
            { ... props}
            ref={mesh}
            scale={active ? 1.2 : 1}
            onClick={(e) => setActive(!active)}
        >
            <capsuleGeometry args={[1, 2.5, 32, 32]} />
            <meshStandardMaterial color="red" />
        </mesh>
    );
  }