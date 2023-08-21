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
        <meta name="description" content="Product Designer | Frontend Engineer | UI/UX Expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex justify-between items-center px-8 pt-8 bg-black">
        <div className="flex gap-12">
          <div className="relative hidden lg:flex items-center lg:w-[128px] xl:w-[224px] 2xl:w-[256px] h-12 rounded-l-full bg-white text-black
              after:absolute after:content-[''] after:w-16 after:h-12 after:top-0 lg:after:left-[96px] xl:after:left-[192px] 2xl:after:left-[224px] after:bg-white after:-skew-x-[20deg]">
          </div>
          <div className="hidden xl:block w-8 h-12 bg-white -skew-x-[20deg]"></div>
          <div className="hidden xl:block -ml-8 w-8 h-12 bg-white -skew-x-[20deg]"></div>
        </div>
        <div className="flex gap-12">
          <Link className="text-3xl font-semibold text-white uppercase hover:text-[#ffe347] hover:cursor-pointer" 
            href="/design-case-study"
          >
            Case Study
          </Link>
          <a className="text-3xl font-semibold text-white uppercase hover:text-[#ffe347] hover:cursor-pointer" 
            href="/AndyDobbsResume.pdf" target="_blank">Resume</a>
        </div>
        <div className="flex gap-12">
          <div className="hidden xl:block w-8 h-12 bg-white -skew-x-[20deg]"></div>
          <div className="relative hidden lg:flex justify-end items-center gap-4 lg:w-[192px] xl:w-[288px] 2xl:w-[320px] h-12 rounded-r-full bg-white text-black 
            before:absolute before:content-[''] before:w-16 before:h-12 lg:before:right-[160px] xl:before:right-[256px] 2xl:before:right-[288px] before:bg-white before:-skew-x-[20deg]">
              <a href="https://www.linkedin.com/in/dobbs/" target="_blank" className="hover:text-[#ffe347] hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a href="https://github.com/adobbs" target="_blank" className="mr-8 hover:text-[#ffe347] hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center mt-32">
        <h1 className="text-6xl font-extrabold uppercase"><em className="italic text-[#ffe347]">Dobbs</em> Gets it Done</h1>
      </div>
      <div className="flex justify-center items-center mt-12">
        <p className="text-4xl font-medium">Great work starts with <em className="italic text-[#ffe347]">attitude</em> and <em className="italic text-[#ffe347]">effort</em>.</p>
      </div>
      <div className="flex justify-center items-center mt-32">
        <Image
          className="rounded-3xl mb-12"
          src="/embedded-insights.png"
          alt="Embedded insights"
          width={1068}
          height={1138}
          priority
          unoptimized
        />
      </div>
      <div className="relative w-[600px] p-12 -skew-x-[20deg] ml-[128px] mt-[128px] mr-auto bg-[#ffe347]">
        <p className="m-0 text-2xl font-medium skew-x-[20deg] text-black">I believe great teams&ndash;and teammates&ndash;strive for continuous <strong className="font-extrabold">collaboration</strong> and <strong className="font-extrabold">iteration</strong>.</p>
      </div>
      <div className="relative w-[600px] p-12 -skew-x-[20deg] mr-[128px] mt-[128px] ml-auto bg-white">
        <p className="m-0 text-2xl font-medium skew-x-[20deg] text-black">Check out my design <Link href="/design-case-study" className="font-extrabold hover:text-[#ffe347]">case study</Link>. Code samples on <a className="font-extrabold hover:text-[#ffe347]" href="https://github.com/adobbs" target="_blank">GitHub</a>. More upon request.</p>
      </div>
      <div className="flex h-4 mt-40 ml-8 mr-8 mb-8 rounded-full bg-white"></div>
    </>
  )
}
