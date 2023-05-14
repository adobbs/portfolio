import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function DesignCaseStudy() {
    return (
        <>
            <Head>
            <title>Andy Dobbs - Design Case Study</title>
            <meta name="description" content="UX Engineer / Designer" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto md:px-4 max-w-[1536px]">
                <div className='flex flex-col md:mx-16 lg:mx-32 pt-8 pb-20 items-center border-l border-r border-zinc-700 bg-zinc-900'>
                    <nav className="inline-flex flex-row justify-center px-6 py-2 mb-20 rounded-full border border-zinc-700 bg-zinc-800">
                        <Link className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
                            href="/">Home</Link>
                        <a className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
                            href="/AndyDobbsResume.pdf" target="_blank">Resume</a>
                        <a className="text-zinc-300 hover:text-[#aaff80] text-sm mr-6" 
                            href="https://www.linkedin.com/in/dobbs/" target="_blank">LinkedIn</a>
                        <a className="text-zinc-300 hover:text-[#aaff80] text-sm" 
                            href="https://github.com/adobbs" target="_blank">GitHub</a>
                    </nav>
                    <div className="flex flex-col self-start mx-8 lg:mx-24 max-w-4xl">
                        <h1 className="text-2xl md:text-4xl font-bold tracking-tight uppercase mb-4 md:mb-8">Design Case Study</h1>
                        <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Introduction</h2>
                        <Image
                            className="mb-4"
                            src="/vp-iq-steps.png"
                            alt="VP IQ steps screenshots"
                            width={1755}
                            height={936}
                            priority
                            unoptimized
                        />
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">The overall business goal for the Virgin Pulse health and wellbeing platform is to drive population health outcomes for employers (buyers) by improving personal health among employees (users).</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">VP IQ is an iOS, Android, and web experience that delivers on this goal by helping people improve health outcomes through personalized interactions powered by artificial intelligence, behavioral science, and machine learning.</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">The conversational experience adapts to signals of motivation and demotivation, then explores the underlying reason behind the change before prompting action or delivering content that is ranked by an ML algorithm. This includes all users in an intelligent feedback loop that helps guide them to the next best healthy action.</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">In addition to leading design on this feature, I led design of personalization and recommendation features for Virgin Pulse, a platform that reaches 14 million people and spans 22 languages. I created and socialized the design strategy for personalization that informs the work of a global 60 person product organization and 22 engineering teams.</p>
                        <p className="text-zinc-400 text-base mb-12 max-w-prose">I also contributed UX research, content strategy, and UX writing work on this feature, and I brought in content and research specialists as early as I could to work side-by-side with design, product management, and engineering. Bringing everyone together helped our team maximize the quality of our vision and the excellence of our execution.</p>
                        <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Problem</h2>
                        <Image
                            className="mb-4"
                            src="/vp-iq-personas.png"
                            alt="VP IQ persona summaries"
                            width={1574}
                            height={906}
                            priority
                            unoptimized
                        />
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">Our existing recommendations directed people in a coarse way using machine learning content recommendations. This directed action, but not toward specific solutions that could drive outcomes targeted toward an identified need. And these recommendations were delivered without any signals from people&apos;s health data.</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">We knew from foundational research that I synthesized into personas that people like Mateo need help taking specific actions. And people like Shannon want timely, relevant support to keep on track. Without a guided experience, Mateo would fall off track. And without recognition, Shannon would have less insight into whether she is really achieving her goals.</p>
                        <p className="text-zinc-400 text-base mb-12 max-w-prose">We could only drive health outcomes if we got people to change their behavior in the real world. That means we needed to react to data signals from real world behaviors, and align our massive content library with the underlying needs driving changes in people&apos;s behavior. Unlike other recommendation systems, we didn&apos;t win by getting people to watch one more video, listen to one more song, add one more item to their cart, or keep scrolling their feed for one more hour. We won every time one more life was changed for the better.</p>
                        <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Solution</h2>
                        <Image
                            className="rounded-3xl mb-4"
                            src="/vp-iq-system.png"
                            alt="VP IQ system diagram"
                            width={1600}
                            height={900}
                            priority
                            unoptimized
                        />
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">We focused on a central question to guide our ideation: How might we personalize the health journey in a way that improves outcomes?</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">Inspired by cross-functional exploration, we harmonized around a dynamic set of conversational experiences that are triggered through statistical tests of validated health data.</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">Two of these experiences, Interventions and Reflections, lead to a choose-your-own-adventure interaction that curates subsets of recommended content based on the reason people provide for why their data has trended in a positive or negative direction.</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">Guided by governance rules, people may also receive an experience that helps them set their goals or receive a simple positivity booster called a Celebration.</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">Most of the content in this experience is dynamic, and all the copy is served from a custom CMS we built for our content team. The CMS also stores translations in 22 different languages.</p>
                        <p className="text-zinc-400 text-base mb-12 max-w-prose">A variety of UX research studies conducted throughout the lifecycle of product discovery and delivery informed the solution every step of the way, helping us refine our approach. The biggest takeaways from that research are that agency increases trust, conversations create comfort, and exploring the root cause is essential.</p>
                        <h2 className="text-xl md:text-2xl font-semibold tracking-tight uppercase mb-2 md:mb-4">Results</h2>
                        <Image
                            className="rounded-3xl mb-4"
                            src="/vp-iq-principles.png"
                            alt="VP IQ design principles"
                            width={1600}
                            height={900}
                            priority
                            unoptimized
                        />
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">Personalization is a broad topic that extends beyond the idea of curated ML recommendations. To help convey what we learned and help other designers and product teams build off that knowledge, I created and shared research-validated design principles for personalization used by the entire product organization.</p>
                        <p className="text-zinc-400 text-base mb-2 max-w-prose">The design, technical, and strategic foundations of this feature were used by many teams to improve how the platform drives impact across the product experience. As detailed in the introduction above, I led design of personalization across the organization, doing hands-on work with one engineering team and consulting with many teams across a global market leader.</p>
                        <p className="text-zinc-400 text-base max-w-prose">Data gathered through UX research showed that personalization features like VP IQ that I designed are a key driver of behavior change and satisfaction. 87% of users said Virgin Pulse changed their lives, and our NPS score was above 50. VP IQ, the signature personalization feature in the platform, even received a virtual standing ovation from our client success and growth teams due to its ability to help them tell an innovation and engagement story that drives revenue and health outcomes.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
