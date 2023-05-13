'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Andy Dobbs</title>
        <meta name="description" content="UX Engineer / Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:mx-16 lg:mx-32 py-8 items-center border-l border-r border-zinc-700 bg-zinc-900'>
          <nav className="inline-flex flex-row justify-center px-6 py-2 mb-20 rounded-full border border-zinc-700 bg-zinc-800">
            <a className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
              href="/AndyDobbsResume.pdf" target="_blank">Resume</a>
            <a className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
              href="https://www.linkedin.com/in/dobbs/" target="_blank">LinkedIn</a>
            <a className="text-zinc-300 hover:text-[#aaff80] text-sm" 
              href="https://github.com/adobbs" target="_blank">GitHub</a>
          </nav>

          <div className="flex flex-col">
            <Image
              className="rounded-full border border-zinc-700 mb-4"
              src="/headshot.png"
              alt="Andy Dobbs headshot"
              width={72}
              height={72}
              priority
              unoptimized
            />
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight uppercase mb-1 md:mb-2">Dobbs Gets it Done</h1>
            <h2 className="text-zinc-300 text-base md:text-xl font-light mb-12">UX Engineer / Designer</h2>
          </div>

          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center w-40 sm:w-48 md:w-56">
              <Link href="/design-case-study">
                <button className="hover:text-[#aaff80] hover:border-[#aaff80] py-2 px-6 border rounded-full">design case</button>
              </Link>
            </div>
            <div className="flex flex-col items-center w-40 sm:w-48 md:w-56">
              <Link href="https://github.com/adobbs/winq-demo" target="_blank">
                <button className="hover:text-[#aaff80] hover:border-[#aaff80] py-2 px-6 border rounded-full">code sample</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
