import React from "react";
import Head from "next/head";
import Layout from "@/src/components/Home/Layout";
import AnimatedText from "@/src/components/Home/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/src/components/Home/Icons";
import project1 from "../../public/images/pic6.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/src/components/Home/TransitionEffect";
import logo from "../../public/images/homeimg1.png";

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shawdow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl  dark:bg-light " />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-poiter overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto max-w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col  items-start justify-between pl-6  lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm ">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:boder-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:p-4  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-poiter overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto max-w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
            (max-width:1200px) 50vw, 33vw"
        ></FramerImage>
      </Link>
      <div className="flex flex-col w-full items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between  ">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6 ">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> CallmeWendy | Projects Page </title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 p-20 flex flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Work Hard, Play Hard!"
            className="mb-16 lg:text-6xl sm:mb-8 sm:!text-3xl"
          ></AnimatedText>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeatureProject
                title=" Personal Web Application "
                img={logo}
                summary="A personal web application using React, Tailwind CSS, and React Router. This project embodies my deep understanding and expertise in these technologies"
                link="/"
                github="/"
                type="Feature Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title=" Crypto Screener Application "
                img={project1}
                link="/"
                github="/"
                type="Feature Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="  Crypto Screener Application "
                img={project1}
                link="/"
                github="/"
                type="Feature Project"
              />{" "}
            </div>

            <div className="col-span-12">
              <FeatureProject
                title="  Crypto Screener Application "
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                link="/"
                github="/"
                type="Feature Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="  Crypto Screener Application "
                img={project1}
                link="/"
                github="/"
                type="Feature Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="  Crypto Screener Application "
                img={project1}
                link="/"
                github="/"
                type="Feature Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
