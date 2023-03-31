import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { BoxGeometry } from 'three';

const inter = Inter({ subsets: ['latin'] })

function BlueRedPill(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    mesh.current.rotation.z += (delta * 0.7);
    mesh.current.rotation.x += (delta * 0.5);
  });
  return (
    <mesh
      { ... props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <capsuleGeometry args={[1, 2.5, 32, 32]} />
      <meshStandardMaterial color={hovered ? 'red' : 'blue'} />
    </mesh>
  );
}

function RedBluePill(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    mesh.current.rotation.z -= (delta * 0.7);
    mesh.current.rotation.x -= (delta * 0.5);
  });
  return (
    <mesh
      { ... props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <capsuleGeometry args={[1, 2.5, 32, 32]} />
      <meshStandardMaterial color={hovered ? 'blue' : 'red'} />
    </mesh>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Andy Dobbs</title>
        <meta name="description" content="UI/UX expert who codes and designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-row justify-center mb-20">
          <a className="text-zinc-300 hover:text-[#aaff80] underline underline-offset-2 text-base font-light mr-8" 
            href="/AndyDobbsResume.pdf" target="_blank">Resume</a>
          <a className="text-zinc-300 hover:text-[#aaff80] underline underline-offset-2 text-base font-light mr-8" 
            href="https://www.linkedin.com/in/dobbs/" target="_blank">LinkedIn</a>
          <a className="text-zinc-300 hover:text-[#aaff80] underline underline-offset-2 text-base font-light" 
            href="https://github.com/adobbs" target="_blank">GitHub</a>
        </nav>
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full border border-white mb-4"
            src="/headshot.png"
            alt="Andy Dobbs headshot"
            width={72}
            height={72}
            priority
            unoptimized
          />
          <h1 className="text-2xl md:text-4xl text-center mb-2">Andy Dobbs</h1>
          <h2 className="text-zinc-300 text-base md:text-xl text-center font-light mb-12">UX Engineer</h2>
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center w-40 sm:w-48 md:w-56">
              <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <BlueRedPill />
              </Canvas>
              <Link href="/design-case-study">
                <button className="hover:text-[#aaff80] hover:border-[#aaff80] py-2 px-6 border rounded-full">design case</button>
              </Link>
            </div>
            <div className="flex flex-col items-center w-40 sm:w-48 md:w-56">
              <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <RedBluePill />
              </Canvas>
              <Link href="https://github.com/adobbs/portfolio" target="_blank">
                <button className="hover:text-[#aaff80] hover:border-[#aaff80] py-2 px-6 border rounded-full">code sample</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
