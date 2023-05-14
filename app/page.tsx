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
        <div className='flex flex-col md:mx-16 lg:mx-32 pt-8 pb-20 items-center border-l border-r border-zinc-700 bg-zinc-900'>
          <nav className="inline-flex flex-row justify-center px-6 py-2 mb-20 rounded-full border border-zinc-700 bg-zinc-800">
            <Link className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
              href="/design-case-study">Case Study</Link>
            <a className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
              href="/AndyDobbsResume.pdf" target="_blank">Resume</a>
            <a className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
              href="https://www.linkedin.com/in/dobbs/" target="_blank">LinkedIn</a>
            <a className="text-zinc-300 hover:text-[#aaff80] text-sm" 
              href="https://github.com/adobbs" target="_blank">GitHub</a>
          </nav>

          <div className="flex flex-col self-start ml-24 max-w-2xl">
            <Image
              className="rounded-full border border-zinc-700 mb-4"
              src="/headshot.png"
              alt="Andy Dobbs headshot"
              width={72}
              height={72}
              priority
              unoptimized
            />
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight uppercase mb-4 md:mb-8">Dobbs gets it done.</h1>
            <p className="text-zinc-400 text-base">I'm Andy, an all-around UI/UX expert with 10+ years as a designer, engineer, writer, and researcher. My passion is complex, data-intensive applications where my systems thinking ability helps teams create dynamic experiences that drive business results.</p>
          </div>
          <div className="flex flex-col self-start ml-24 mt-12 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Key Results</h2>
            <p className="text-zinc-400 text-base italic mb-2">Designed reporting and gamification features utilized to optimize care for ~800k patients.
              These features helped a large health system generate $20m in surplus revenue.</p>
            <p className="text-zinc-400 text-base self-end mr-20 mb-2">&ndash; Lead Product Designer @ Stellar Health</p>
            <p className="text-zinc-400 text-base italic mt-4 mb-2">Designed AI / ML personalization features for an iOS, Android, and web platform that
              spanned 22 languages. 87% of surveyed users said Virgin Pulse changed their lives.</p>
            <p className="text-zinc-400 text-base self-end mr-20 mb-2">&ndash; Senior UX Designer @ Virgin Pulse</p>
            <p className="text-zinc-400 text-base italic mt-4 mb-2">Created the design system for analytics dashboards and data visualization. Self-serve
              reports helped the company achieve a 95% client retention rate across 4,000 enterprise clients—including 84 of the Global Fortune 500.</p>
            <p className="text-zinc-400 text-base self-end mr-20">&ndash; Senior UX Designer @ Virgin Pulse</p>
          </div>
          <div className="flex flex-col self-start ml-24 mt-12 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Work Samples</h2>
            <p className="text-zinc-400 text-base mb-4">Check out my <Link href="/design-case-study" className="underline underline-offset-2 hover:text-[#aaff80]">case study</Link> for a design deep dive. Code samples are on <a href="https://github.com/adobbs" target="_blank" className="underline underline-offset-2 hover:text-[#aaff80]">GitHub</a>.</p>
            <p className="text-zinc-400 text-base">Below are snapshots of my latest work. Thank you!</p>
          </div>
          <div className="flex flex-col self-start mx-24 mt-12">
          <h3 className="text-lg md:text-xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Embedded Insights Component</h3>
            <Image
                className="rounded-3xl max-w-4xl mb-12"
                src="/embedded-insights.png"
                alt="Embedded insights"
                width={1068}
                height={1138}
                priority
                unoptimized
            />
            <h3 className="text-lg md:text-xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Upcoming Visits Email</h3>
            <Image
                className="rounded-3xl max-w-4xl mb-12"
                src="/upcoming-visits.png"
                alt="Upcoming visits"
                width={1000}
                height={1023}
                priority
                unoptimized
            />
            <h3 className="text-lg md:text-xl font-semibold tracking-tight uppercase mb-2 md:mb-4">User Activity Report</h3>
            <Image
                className="rounded-3xl max-w-4xl"
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
