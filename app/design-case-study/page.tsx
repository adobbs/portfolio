import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function DesignCaseStudy() {
    return (
        <>
            <Head>
            <title>Andy Dobbs - Design Case Study</title>
            <meta name="description" content="Product Designer | Frontend Engineer | UX Expert" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="flex justify-between items-center px-8 pt-8 bg-black">
                <div className="flex gap-12">
                <div className="relative hidden lg:flex items-center lg:w-[128px] xl:w-[224px] 2xl:w-[256px] h-12 rounded-l-full bg-white text-black
                    after:absolute after:content-[''] after:w-16 after:h-12 after:top-0 lg:after:left-[96px] xl:after:left-[192px] 2xl:after:left-[224px] after:bg-white after:-skew-x-[13deg]">
                </div>
                <div className="hidden xl:block w-8 h-12 bg-white -skew-x-[13deg]"></div>
                <div className="hidden xl:block -ml-8 w-8 h-12 bg-white -skew-x-[13deg]"></div>
                </div>
                <div className="flex gap-12">
                <Link className="text-xl sm:text-3xl font-semibold text-white uppercase hover:text-[#ffe347] hover:cursor-pointer" 
                    href="/"
                >
                    Home
                </Link>
                <a className="text-xl sm:text-3xl font-semibold text-white uppercase hover:text-[#ffe347] hover:cursor-pointer" 
                    href="/AndyDobbsResume.pdf" target="_blank">Resume</a>
                </div>
                <div className="flex gap-12">
                <div className="hidden xl:block w-8 h-12 bg-white -skew-x-[13deg]"></div>
                <div className="relative hidden lg:flex justify-end items-center gap-4 lg:w-[192px] xl:w-[288px] 2xl:w-[320px] h-12 rounded-r-full bg-white text-black 
                    before:absolute before:content-[''] before:w-16 before:h-12 lg:before:right-[160px] xl:before:right-[256px] 2xl:before:right-[288px] before:bg-white before:-skew-x-[13deg]">
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
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase"><em className="italic text-[#ffe347]">Design</em> Case Study</h1>
            </div>
            <div className="mx-auto mt-32 px-4 max-w-[1536px]">
                <div className='md:mx-16 lg:mx-32 mt-20 py-16 items-center border-2 border-white'>
                    <div className="flex flex-col self-start mx-8 lg:mx-24 max-w-4xl">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase mb-4 sm:mb-6">Introduction</h2>
                        <Image
                            className="mb-4 sm:mb-6"
                            src="/vp-iq-steps.png"
                            alt="VP IQ steps screenshots"
                            width={1755}
                            height={936}
                            priority
                            unoptimized
                        />
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">The overall business goal for the Virgin Pulse health and wellbeing platform is to drive population health outcomes for employers (buyers) by improving personal health among employees (users).</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">VP IQ is an iOS, Android, and web experience that delivers on this goal by helping people improve health outcomes through personalized interactions powered by artificial intelligence, behavioral science, and machine learning.</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">The conversational experience adapts to signals of motivation and demotivation, then explores the underlying reason behind the change before prompting action or delivering content that is ranked by an ML algorithm. This includes all users in an intelligent feedback loop that helps guide them to the next best healthy action.</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">In addition to leading design on this feature, I led design of personalization and recommendation features for Virgin Pulse, a platform that reaches 14 million people and spans 22 languages. I created and socialized the design strategy for personalization that informs the work of a global 60 person product organization and 22 engineering teams.</p>
                        <p className="text-base sm:text-lg md:text-xl max-w-prose">I also contributed UX research, content strategy, and UX writing work on this feature, and I brought in content and research specialists as early as I could to work side-by-side with design, product management, and engineering. Bringing everyone together helped our team maximize the quality of our vision and the excellence of our execution.</p>
                    </div>
                </div>
                <div className='md:mx-16 lg:mx-32 mt-20 py-16 items-center border-2 border-white'>
                    <div className="flex flex-col self-start mx-8 lg:mx-24 max-w-4xl">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase mb-4 sm:mb-6">Problem</h2>
                        <Image
                            className="mb-4 sm:mb-6"
                            src="/vp-iq-personas.png"
                            alt="VP IQ persona summaries"
                            width={1574}
                            height={906}
                            priority
                            unoptimized
                        />
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">Our existing recommendations directed people in a coarse way using machine learning content recommendations. This directed action, but not toward specific solutions that could drive outcomes targeted toward an identified need. And these recommendations were delivered without any signals from people&apos;s health data.</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">We knew from foundational research that I synthesized into personas that people like Mateo need help taking specific actions. And people like Shannon want timely, relevant support to keep on track. Without a guided experience, Mateo would fall off track. And without recognition, Shannon would have less insight into whether she is really achieving her goals.</p>
                        <p className="text-base sm:text-lg md:text-xl max-w-prose">We could only drive health outcomes if we got people to change their behavior in the real world. That means we needed to react to data signals from real world behaviors, and align our massive content library with the underlying needs driving changes in people&apos;s behavior. Unlike other recommendation systems, we didn&apos;t win by getting people to watch one more video, listen to one more song, add one more item to their cart, or keep scrolling their feed for one more hour. We won every time one more life was changed for the better.</p>
                    </div>
                </div>
                <div className='md:mx-16 lg:mx-32 mt-20 py-16 items-center border-2 border-white'>
                    <div className="flex flex-col self-start mx-8 lg:mx-24 max-w-4xl">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase mb-4 sm:mb-6">Solution</h2>
                        <Image
                            className="rounded-3xl mb-4 sm:mb-6"
                            src="/vp-iq-system.png"
                            alt="VP IQ system diagram"
                            width={1600}
                            height={900}
                            priority
                            unoptimized
                        />
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">Inspired by cross-functional exploration, we harmonized around a dynamic set of conversational experiences that are triggered through statistical tests of validated health data.</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">We focused on a central question to guide our ideation: How might we personalize the health journey in a way that improves outcomes?</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">Two of these experiences, Interventions and Reflections, lead to a choose-your-own-adventure interaction that curates subsets of recommended content based on the reason people provide for why their data has trended in a positive or negative direction.</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">Guided by governance rules, people may also receive an experience that helps them set their goals or receive a simple positivity booster called a Celebration.</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">Most of the content in this experience is dynamic, and all the copy is served from a custom CMS we built for our content team. The CMS also stores translations in 22 different languages.</p>
                        <p className="text-base sm:text-lg md:text-xl max-w-prose">A variety of UX research studies conducted throughout the lifecycle of product discovery and delivery informed the solution every step of the way, helping us refine our approach. The biggest takeaways from that research are that agency increases trust, conversations create comfort, and exploring the root cause is essential.</p>
                    </div>
                </div>
                <div className='md:mx-16 lg:mx-32 mt-20 py-16 items-center border-2 border-white'>
                    <div className="flex flex-col self-start mx-8 lg:mx-24 max-w-4xl">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase mb-4 sm:mb-6">Results</h2>
                        <Image
                            className="rounded-3xl mb-4 sm:mb-6"
                            src="/vp-iq-principles.png"
                            alt="VP IQ design principles"
                            width={1600}
                            height={900}
                            priority
                            unoptimized
                        />
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">Personalization is a broad topic that extends beyond the idea of curated ML recommendations. To help convey what we learned and help other designers and product teams build off that knowledge, I created and shared research-validated design principles for personalization used by the entire product organization.</p>
                        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 max-w-prose">The design, technical, and strategic foundations of this feature were used by many teams to improve how the platform drives impact across the product experience. As detailed in the introduction above, I led design of personalization across the organization, doing hands-on work with one engineering team and consulting with many teams across a global market leader.</p>
                        <p className="text-base sm:text-lg md:text-xl max-w-prose">Data gathered through UX research showed that personalization features like VP IQ that I designed are a key driver of behavior change and satisfaction. 87% of users said Virgin Pulse changed their lives, and our NPS score was above 50. VP IQ, the signature personalization feature in the platform, even received a virtual standing ovation from our client success and growth teams due to its ability to help them tell an innovation and engagement story that drives revenue and health outcomes.</p>
                    </div>
                </div>
            </div>
            <div className="flex h-4 mt-40 ml-8 mr-8 mb-8 rounded-full bg-white"></div>
        </>
    );
}
