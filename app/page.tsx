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
      <nav className="flex justify-between items-center p-8 bg-black">
        <div className="flex gap-12">
          <div className="relative flex items-center w-[256px] h-12 rounded-l-full bg-white text-black
              after:absolute after:content-[''] after:w-16 after:h-12 after:top-0 after:left-[224px] after:bg-white after:-skew-x-[20deg]">
            <div className="ml-8 text-2xl font-extrabold uppercase italic">
              Dobbs
            </div>
          </div>
          <div className="w-8 h-12 bg-white -skew-x-[20deg]"></div>
          <div className=" -ml-8 w-8 h-12 bg-white -skew-x-[20deg]"></div>
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
          <div className="w-8 h-12 bg-white -skew-x-[20deg]"></div>
          <div className="relative flex justify-end items-center gap-4 w-[320px] h-12 rounded-r-full bg-white text-black 
            before:absolute before:content-[''] before:w-16 before:h-12 before:top-0 before:right-[288px] before:bg-white before:-skew-x-[20deg]">
              <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-[#ffe347] hover:cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-8 hover:text-[#ffe347] hover:cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
          </div>
        </div>
      </nav>
      <div className="mx-auto md:px-4 max-w-[1536px]">
        <div className='flex flex-col md:mx-16 lg:mx-32 pt-8 pb-20 items-center border-l border-r border-zinc-700 bg-zinc-900'>
          

          {/* <a className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
              href="https://www.linkedin.com/in/dobbs/" target="_blank">LinkedIn</a>
            <a className="text-zinc-300 hover:text-[#aaff80] text-sm" 
              href="https://github.com/adobbs" target="_blank">GitHub</a> */}

          <div className="flex flex-col self-start mx-8 lg:mx-24 max-w-4xl">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight uppercase mb-4 md:mb-8">Dobbs gets it done.</h1>
            <p className="text-zinc-400 text-base mb-12 max-w-prose">I&apos;m Andy, an all-around UI/UX expert with 10+ years as a designer, engineer, writer, and researcher. My passion is complex, data-intensive applications where my systems thinking ability helps teams create dynamic experiences that drive business results.</p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Key Results</h2>
            <p className="text-zinc-400 text-base italic mb-2 max-w-prose">Designed reporting and gamification features utilized to optimize care for ~800k patients.
              These features helped a large health system generate $20m in surplus revenue.</p>
            <p className="text-zinc-400 text-base sm:ml-48 lg:ml-64 mb-2">&ndash; Lead Product Designer @ Stellar Health</p>
            <p className="text-zinc-400 text-base italic mt-4 mb-2 max-w-prose">Designed AI / ML personalization features for an iOS, Android, and web platform that
              spanned 22 languages. 87% of surveyed users said Virgin Pulse changed their lives.</p>
            <p className="text-zinc-400 text-base sm:ml-48 lg:ml-64 mb-2">&ndash; Senior UX Designer @ Virgin Pulse</p>
            <p className="text-zinc-400 text-base italic mt-4 mb-2 max-w-prose">Created the design system for analytics dashboards and data visualization. Self-serve
              reports helped the company achieve a 95% client retention rate across 4,000 enterprise clients—including 84 of the Global Fortune 500.</p>
            <p className="text-zinc-400 text-base sm:ml-48 lg:ml-64 mb-12">&ndash; Senior UX Designer @ Virgin Pulse</p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Work Samples</h2>
            <p className="text-zinc-400 text-base mb-4 max-w-prose">Check out my <Link href="/design-case-study" className="underline underline-offset-2 hover:text-[#aaff80]">case study</Link> for a design deep dive. Code samples are on <a href="https://github.com/adobbs" target="_blank" className="underline underline-offset-2 hover:text-[#aaff80]">GitHub</a>.</p>
            <p className="text-zinc-400 text-base mb-12 max-w-prose">Below are snapshots of my latest work. Thank you!</p>
            <h3 className="text-lg md:text-xl font-semibold tracking-tight uppercase mb-2">Embedded Insights Component</h3>
            <p className="text-zinc-400 text-base mb-4 max-w-prose">This component captures activity metrics and translates that activity into the impact on people&apos;s lives. Copy, data visualization, and UI design are mine. Illustration is stock.</p>
            <Image
                className="rounded-3xl mb-12"
                src="/embedded-insights.png"
                alt="Embedded insights"
                width={1068}
                height={1138}
                priority
                unoptimized
            />
            <h3 className="text-lg md:text-xl font-semibold tracking-tight uppercase mb-2">Upcoming Visits Email</h3>
            <p className="text-zinc-400 text-base mb-4 max-w-prose">This triggered email reminds users when they may need to re-engage with the app. Copy, design, and illustration are mine.</p>
            <Image
                className="rounded-3xl mb-12"
                src="/upcoming-visits.png"
                alt="Upcoming visits"
                width={1000}
                height={1023}
                priority
                unoptimized
            />
            <h3 className="text-lg md:text-xl font-semibold tracking-tight uppercase mb-2">User Activity Report</h3>
            <p className="text-zinc-400 text-base mb-4 max-w-prose">This report provides critical information to practice managers about staff activity. Copy, data visualization, and UI design are mine.</p>
            <Image
                className="rounded-3xl"
                src="/user-activity.png"
                alt="User activity report"
                width={1440}
                height={1718}
                priority
                unoptimized
            />
          </div>
        </div>
      </div>
    </>
  )
}
