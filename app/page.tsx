'use client';

import Head from 'next/head';
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
        <div className="hidden lg:flex gap-4 justify-center items-center mt-16">
            <div className="w-8 h-6 bg-white -skew-x-[13deg]"></div>
            <div className="w-32 h-6 bg-white -skew-x-[13deg]"></div>
            <div className="w-8 h-6 bg-black -skew-x-[13deg]"></div>
            <div className="w-32 h-6 bg-white -skew-x-[13deg]"></div>
            <div className="w-8 h-6 bg-[#ffe347] -skew-x-[13deg]"></div>
            <div className="w-8 h-6 bg-white -skew-x-[13deg]"></div>
        </div>
        <div className="flex gap-4 justify-center items-center mt-16 lg:mt-32">
            <h1 className="text-3xl lg:text-6xl font-extrabold uppercase">Andy</h1>
            <div className="w-2 lg:w-4 h-8 lg:h-16 bg-[#ffe347] -skew-x-[13deg]"></div>
            <h1 className="text-3xl lg:text-6xl font-extrabold uppercase">Dobbs</h1>
        </div>
        <div className="flex justify-center mt-8 lg:mt-16">
            <p className="p-2 sm:p-0 text-center text-xl lg:text-4xl font-semibold">I create products that make companies more profitable.</p>
        </div>
        <div className="mx-auto mt-24 lg:mt-48 px-4 max-w-[1024px]">
            <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-4 h-6 lg:h-12 bg-[#ffe347] -skew-x-[13deg]"></div>
                    <p className="text-4xl font-extrabold uppercase">Highlights</p>
                    <div className="w-4 h-6 lg:h-12 bg-[#ffe347] -skew-x-[13deg]"></div>
                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <div className="w-4 h-6 bg-white -skew-x-[13deg]"></div>
                    <div className="w-4 h-6 bg-white -skew-x-[13deg]"></div>
                    <div className="w-16 h-6 bg-white -skew-x-[13deg]"></div>
                    <div className="w-4 h-6 bg-black -skew-x-[13deg]"></div>
                    <div className="w-16 h-6 bg-white -skew-x-[13deg]"></div>
                    <div className="w-4 h-6 bg-[#ffe347] -skew-x-[13deg]"></div>
                    <div className="w-4 h-6 bg-white -skew-x-[13deg]"></div>
                    <div className="w-16 h-6 bg-white -skew-x-[13deg]"></div>
                </div>
            </div>
            <div className="flex flex-col gap-16 mt-16 text-sm sm:text-base lg:text-2xl">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 lg:w-2 h-4 sm:h-6 lg:h-8 bg-white -skew-x-[13deg]"></div>
                        <div className="font-extrabold uppercase">Goldcast</div>
                    </div>
                    <p className="mt-4 leading-relaxed font-semibold">I created enterprise-readiness features that served high priority needs for 17% of existing customers, including all of the largest clients. This enabled go-to-market to target new business with organizations that have an annual contract value 2-3x the average customer.</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 lg:w-2 h-4 sm:h-6 lg:h-8 bg-white -skew-x-[13deg]"></div>
                        <div className="font-extrabold uppercase">Stellar Health</div>
                    </div>
                    <p className="mt-4 leading-relaxed font-semibold">I designed reporting and gamification features utilized to optimize care for 800k patients. These features helped a large health system generate $20m in surplus revenue.</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 lg:w-2 h-4 sm:h-6 lg:h-8 bg-white -skew-x-[13deg]"></div>
                        <div className="font-extrabold uppercase">Virgin Pulse</div>
                    </div>
                    <p className="mt-4 leading-relaxed font-semibold">I created AI / ML features for a consumer behavior change experience that 87% of users said changed their lives. Along with my data visualization and reporting work, these features helped secure a 95% retention rate among existing customers.</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 lg:w-2 h-4 sm:h-6 lg:h-8 bg-white -skew-x-[13deg]"></div>
                        <div className="font-extrabold uppercase">Buildium</div>
                    </div>
                    <p className="mt-4 leading-relaxed font-semibold">I designed a pricing page that increased yearly plan signups from 12% to 31%. I created an onboarding UX that reduced new customer churn from 30% to 18%. My work helped drive financial growth that led to a successful exit for the founders, investors, and employees.</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 lg:w-2 h-4 sm:h-6 lg:h-8 bg-white -skew-x-[13deg]"></div>
                        <div className="font-extrabold uppercase">Arnold</div>
                    </div>
                    <p className="mt-4 leading-relaxed font-semibold">My client work alone funded a 7-person design team during a dry spell. I helped build the digital presence used by millions of customers for some of the largest brands in the world: Jack Daniel&apos;s, Progressive, Sanofi, American Eagle, Santander, Ocean Spray, and more.</p>
                </div>
            </div>
        </div>
        <div className="flex gap-4 justify-center items-center mx-auto mt-32 mb-16 max-w-[1024px]">
            <div className="w-full h-6 bg-white -skew-x-[13deg]"></div>
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
            <a href="https://github.com/adobbs" target="_blank" className="hover:text-[#ffe347] hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
            </a>
            <div className="w-8 h-6 bg-white -skew-x-[13deg]"></div>
        </div>
    </>
  )
}
