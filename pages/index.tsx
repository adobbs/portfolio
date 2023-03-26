import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
                width={96}
                height={96}
                priority
                unoptimized
            />
            <h1 className="text-2xl md:text-4xl text-center mb-2">Andy Dobbs</h1>
            <h2 className="text-zinc-300 text-base md:text-xl text-center font-light mb-12">UX Engineer</h2>
            <section className="bg-zinc-700 flex flex-col items-center text-base max-w-3xl mb-6 p-4 md:py-8 md:px-10 border rounded-lg">
                <Image
                    src="/vp-iq-steps.png"
                    alt="VP IQ steps screenshots"
                    width={960}
                    height={540}
                    priority
                />
                <h2 className="text-base md:text-xl text-center font-light mb-12">AI/ML Health Conversations</h2>
                <button className="hover:text-[#aaff80] py-2 px-4 border hover:border-[#aaff80]  rounded-full">View case study</button>
            </section>
          </div>
      </div>
    </>
  )
}
