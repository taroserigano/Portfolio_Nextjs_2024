import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/laptops.png";
import profilePic from "../../public/images/profile/3.jpg";
import TransitionEffect from "@/components/TransitionEffect";

import { TypeAnimation } from "react-type-animation";


import hello from "../../public/images/hello.jpg";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";


function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}


export default function Home() {
  
  return (
    <>
      <Head>
      <title>Taro Serigano Portfolio | Next.js</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Taro Serigano, a Next.js developer with 
        expertise in React.js and full-stack development."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark 
         bg-teal-100 dark:bg-dark
          dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16 ">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="taroseri"
                className="h-auto w-full pt-b p-5 pb-6 md: w-100 sm:w-100 items-center "
                sizes="150vw"
                priority
              />
            </div>


            
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center
            "            >
              <TypeAnimation
              sequence={[
                "Taro Serigano",
                0
              ]}
              wrapper="span"
              speed={0}
              repeat={Infinity}
              className="
              !text-left !text-7xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                bg-clip-text 
                font-extrabold
                text-zinc-700	    
                
                "
            /><br />
            

          <h1 className="text-white mb-12 text-7xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">

            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
              Hello,
            </span>
            <br></br> */}
            <TypeAnimation
              sequence={[
                "Nice to Meet You!",
                1000,
                "Software Engineer",
                1000,
                "Fullstack Engineer",
                1000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="
              !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-8xl md:!text-4xl sm:!text-3xl
              
              text-transparent bg-clip-text bg-gradient-to-r 
              from-fuchsia-400 to-blue-700	                
              "
            />
          </h1>

              <div className="mt- ml-0 flex items-center self-start lg:self-center">
                <Link

                  href="/Taro_Serigano_CV.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid  p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent
            bg-emerald-500	            hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  My CV <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:taroserigano@gmail.com"
                  className="ml-4 text-xl font-semibold capitalize text-dark underline 
                  dark:text-light md:text-base
                  hover:bg-violet-700
                  hover:text-light"
                  
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe /> */}

        <div className="absolute right-8 bottom-8 inline-block w-28 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Codebucks"
          />
        </div>
      </article>

      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light `}
      >
        <Layout className="pt-16  ">
          <AnimatedText
            text="About me"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="
         
          dark:bg-dark 
          
          ">
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                Hello 🖐, I&apos;m <strong>Taro Serigano</strong>, a software developer with 7+ years of experience with proven skills and certifications in programming and cloud technology solutions. I offer strong expertise in React & Redux, TypeScript, Spring Boot, Python, SQL & noSQL, GraphQL and AWS.
              </p>
              <p className="my-4 font-medium">
              I constantly strive for acquiring new technology to add to my tech stack. In recent years, I&apos;ve been learning cutting edge technology like Next.js, TypeScript, GraphQL and AWS. I love learning in general so I&apos;d be happy to broadn my skill set if my Client needs something that is outside my tech stack. 

              </p>
              <p className="font-medium">
                This website is developed in Next.js and styled by Framer Motion and Tailwind CSS. It is serverside rendered, highly performant and SEO friendly. The website is hosted on AWS using S3, Route 53, and Amazon Cloudfront, which is a content delivery network to provide globally ditributed network with edge locations to improve access speed.

              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
               dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={hello}
                alt="Codebucks"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={10} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                   skills
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={7} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          </div>

          <Skills />
          <Experience />
          {/* <Education /> */} 
        </Layout>
      </main>
    </>
  );
}
