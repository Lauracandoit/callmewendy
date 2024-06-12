import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import logo from "../../public/images/homeimg1.png";
import Link from "next/link";
import Layout from "@/src/components/Home/Layout";
import { TypeAnimation } from "react-type-animation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Call me Laura</title>
        <meta name="description" content="Generated by next app" />
      </Head>
      <main className="flex items-center text-dark w-full dark:text-light min-h-screen">
        <Layout className="pt-0 tablet:p-20 sm:p-2 ">
          <div className="flex laptop:flex-row items-center justify-between w-full mobile:flex-col tablet:flex-col sm:flex-col">
            <div className="w-1/2 tablet:w-full">
              <Image
                src={logo}
                className="w-full h-auto tablet:inline-block tablet:w-full mobile:w-full sm:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
               (max-width:1200px) 50vw, 50vw"
              />
            </div>

            <div className="w-3/4 flex flex-col items-center self-center laptop:w-full laptop:text-center laptop:pt-3 tablet:pt-7 tablet:mx-10 mobile:pt-7 sm:pt-5  ">
              <h2 className="laptop:!text-8xl tablet:!text-4xl mobile:!text-xl font-extrabold ">
                <div className="mb-3 laptop:text-5xl sm:text-2xl"> Hi! I am</div>
              </h2>
              <div className="h-24 tablet:h-35 mobile:h-35 mobile:text-3xl tablet:text-5xl laptop:text-6xl sm:text-3xl ">
                <h2>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Laura ",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "A Web Developer",
                      1000,
                      "A Customer Support Team Lead ",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="mobile:!text-3xl tablet:!text-5xl laptop:text-6xl m-2 flex items-center justify-center text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  />
                </h2>
              </div>

              <p className="text-left my-4 laptop:text-base font-medium tablet:text-sm  ">
                {" "}
                Thank you for checking in on my website. CallmeLaura is the
                place I share my personal projects, my passion with daily stuff
                and my personal experience day by day. Hope you are enjoy the
                time here and find something interesting and helpful. Do not
                hesitate to reach out in case you have any questions for me. I
                wish you a nice journey and wonderful day{" "}
              </p>
              <div className="flex items-center self-center  mt-2 laptop:self-center  ">
                <Link
                  href="/nguyetlt_resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg border-white font-semibold hover:bg-white hover:text-black border-solid border-transparent hover:border-blackk border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base mx-5"
                  download={true}
                >
                  {" "}
                  Resume{" "}
                </Link>
                <Link
                  href="mailto:wendy.wnd77@gmail.com"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg border-white font-semibold hover:bg-white hover:text-black border-solid border-transparent hover:border-blackk border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base mx-5"
                >
                  {" "}
                  Contact
                </Link>
              </div>
              <div className="flex items-center self-center mt-10 lg:self-center ">
                <Link
                  href="https://buymeacoffee.com/callmewendy"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg border-white font-semibold hover:bg-white hover:text-black border-solid border-transparent hover:border-blackk border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base mx-5"
                >
                  Buy me a coffee &#128123;
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
