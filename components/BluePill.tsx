import { useRef, useState } from 'react';
import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

export default function BlueRedPill(props: ThreeElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [active, setActive] = useState(false);

    return (
        <mesh
            { ... props}
            ref={mesh}
            scale={active ? 1.2 : 1}
            rotation={new THREE.Euler(0, 0, Math.PI / 2)}
            onClick={(e) => setActive(!active)}
        >
            <capsuleGeometry args={[0.8, 2.5, 32, 32]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
}
