'use client';

import { useRef } from 'react';
import * as THREE from 'three';
import { ThreeElements, useThree } from '@react-three/fiber';

export default function GroundPlane(props: ThreeElements['group']) {
    const group = useRef<THREE.Group>(null!);
    const mesh = useRef<THREE.Mesh>(null!);
    const { viewport } = useThree();

    return (
        <group ref={group}>
            <mesh ref={mesh} rotation-x={ - Math.PI * 0.3 } scale={[viewport.width / 2, viewport.height / 2, 1]}>
                <planeGeometry args={[ 1, 1, 16, 16 ]}/>
                <meshStandardMaterial color="green" wireframe />
            </mesh>
        </group>
    );
}
