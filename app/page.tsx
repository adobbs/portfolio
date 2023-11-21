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
        <meta name="description" content="I create products that make companies more profitable." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex gap-4 justify-center items-center px-8 pt-8 bg-black">
            <div className="w-32 h-12 bg-white -skew-x-[13deg]"></div>
            <div className="w-8 h-12 bg-[#ffe347] -skew-x-[13deg]"></div>
            <div className="w-8 h-12 bg-white -skew-x-[13deg]"></div>
            <div className="w-8 h-12 bg-black -skew-x-[13deg]"></div>
            <div className="w-8 h-12 bg-white -skew-x-[13deg]"></div>
            <div className="w-32 h-12 bg-white -skew-x-[13deg]"></div>
      </nav>
      <div className="flex justify-center mt-32">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">Andy <span className="text-[#ffe347]">Dobbs</span></h1>
      </div>
      <div className="flex justify-center mt-16">
        <p className="text-xl sm:text-3xl md:text-4xl font-medium">I create products that make companies more profitable.</p>
      </div>
      <div className="mx-auto mt-48 px-4 max-w-[1024px]">
        <div className="flex flex-col max-w-4xl">
            <div className="flex items-center gap-4">
                <div className="w-4 h-12 bg-[#ffe347] -skew-x-[13deg]"></div>
                <p className="text-xl sm:text-3xl md:text-4xl font-medium uppercase">Highlights</p>
                <div className="w-4 h-12 bg-[#ffe347] -skew-x-[13deg]"></div>
                <div className="w-4 h-6 bg-white -skew-x-[13deg]"></div>
                <div className="w-4 h-6 bg-black -skew-x-[13deg]"></div>
                <div className="w-4 h-6 bg-white -skew-x-[13deg]"></div>
                <div className="w-4 h-6 bg-[#ffe347] -skew-x-[13deg]"></div>
                <div className="w-4 h-6 bg-white -skew-x-[13deg]"></div>
                <div className="w-4 h-6 bg-black -skew-x-[13deg]"></div>
                <div className="w-4 h-6 bg-[#ffe347] -skew-x-[13deg]"></div>
                <div className="w-4 h-6 bg-white -skew-x-[13deg]"></div>
            </div>
        </div>
      </div>
      {/* <div className="relative w-4/5 md:w-[600px] p-8 sm:p-12 -skew-x-[13deg] mt-[128px] ml-auto lg:ml-[128px] xl:ml-[192px] 2xl:ml-[256px]  mr-auto bg-[#ffe347]">
        <p className="m-0 text-base sm:text-xl md:text-2xl font-medium skew-x-[13deg] text-black">Highlights</p>
      </div>
      <div className="relative w-4/5 md:w-[600px] p-8 sm:p-12 -skew-x-[13deg] mt-[128px] mr-auto lg:mr-[128px] xl:mr-[192px] 2xl:mr-[256px] ml-auto bg-white">
        <p className="m-0 text-base sm:text-xl md:text-2xl font-medium skew-x-[13deg] text-black">Check out my design <Link href="/design-case-study" className="underline font-extrabold hover:text-[#ffe347]">case study</Link>. Code samples on <a className="underline font-extrabold hover:text-[#ffe347]" href="https://github.com/adobbs" target="_blank">GitHub</a>. More upon request.</p>
      </div> */}
      {/* <div className="flex h-4 mt-40 ml-8 mr-8 mb-8 rounded-full bg-white"></div> */}
    </>
  )
}
