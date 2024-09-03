'use client';

import Head from 'next/head';
import { Inter } from 'next/font/google';
import React, { useEffect, useState, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] })

interface NewsletterSignupProps {
    title: string;
    description: string;
    formId: string;
    linkText: string;
  }
  
function NewsletterSignup({ title, description, formId, linkText }: NewsletterSignupProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen && formContainerRef.current) {
      const script = document.createElement('script');
      script.src = `https://adobbs.ck.page/${formId}/index.js`;
      script.async = true;
      script.setAttribute('data-uid', formId);
      
      formContainerRef.current.innerHTML = '';
      formContainerRef.current.appendChild(script);

      return () => {
        if (formContainerRef.current) {
          formContainerRef.current.innerHTML = '';
        }
      };
    }
  }, [isModalOpen, formId]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <div className="w-1.5 lg:w-2 h-4 sm:h-5 lg:h-7 bg-white -skew-x-[13deg]"></div>
        <div className="font-extrabold uppercase">{title}</div>
        <div className="w-1.5 lg:w-2 h-4 sm:h-5 lg:h-7 bg-white -skew-x-[13deg]"></div>
      </div>
      <p className="mt-4 leading-relaxed font-semibold">
        {description}{' '}
        <a 
          href="#"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          className="underline cursor-pointer"
        >
          {linkText}
        </a>.
      </p>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg px-6 pb-6 max-w-md w-full">
            <div className="flex w-full justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="mt-4 -mr-4 mb-4 px-4 py-2 focus:outline-none text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div ref={formContainerRef}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
        <Head>
            <title>Andy Dobbs</title>
            <meta name="description" content="Author (Fairweather) | Athlete (8x800) | Designer" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col">
            <main className="flex flex-col">
                <div className="flex gap-4 justify-center items-center lg:mt-16 p-4">
                    <div className="w-8 h-6 bg-white -skew-x-[13deg]"></div>
                    <div className="w-32 h-6 bg-white -skew-x-[13deg]"></div>
                    <div className="w-8 h-6 bg-black -skew-x-[13deg]"></div>
                    <div className="w-32 h-6 bg-white -skew-x-[13deg]"></div>
                    <div className="w-8 h-6 bg-[#ffe347] -skew-x-[13deg]"></div>
                    <div className="w-8 h-6 bg-white -skew-x-[13deg]"></div>
                </div>
                <div className="flex gap-4 justify-center items-center mt-12 lg:mt-24">
                    <h1 className="text-3xl lg:text-6xl font-extrabold uppercase">Andy</h1>
                    <div className="w-2 lg:w-4 h-8 lg:h-16 bg-[#ffe347] -skew-x-[13deg]"></div>
                    <h1 className="text-3xl lg:text-6xl font-extrabold uppercase">Dobbs</h1>
                </div>
                <div className="mx-auto mt-16 lg:mt-32 px-4 max-w-[1024px]">
                    <div className="hidden lg:flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-4 h-6 lg:h-12 bg-[#ffe347] -skew-x-[13deg]"></div>
                            <p className="text-4xl font-extrabold uppercase">Projects</p>
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
                    <div className="flex flex-col gap-12 lg:gap-16 lg:mt-16 text-sm sm:text-base lg:text-2xl">
                        <NewsletterSignup
                            title="8x800 Athletics"
                            description="We are all athletes. Lace up and run toward better health with the"
                            formId="0c29f2e34c"
                            linkText="8x800 newsletter"
                        />
                        <NewsletterSignup
                            title="Fairweather Series"
                            description="The next must-read epic fantasy. Take flight with the"
                            formId="0dba5570c8"
                            linkText="Fairweather newsletter"
                        />
                        <NewsletterSignup
                            title="The Gift"
                            description="Follow my recovery from PTSD and learn about aphantasia in the"
                            formId="9657823810"
                            linkText="Gift newsletter"
                        />
                      </div>
                </div>
            </main>
            <footer className="mt-12 lg:mt-32 mb-4 lg:mb-16">
              <div className="flex w-full gap-4 justify-center items-center mx-auto max-w-[1024px] p-4">
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
            </footer>
          </div>
    </>
  )
}
