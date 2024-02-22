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
        <title>Call me Wendy</title>
        <meta name="description" content="Generated by next app" />
      </Head>
      <main className="flex items-center text-dark w-full dark:text-light min-h-screen">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={logo}
                className="w-full h-auto md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
               (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center lg:pt-3 ">
              <h2 className="xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-1xl !text-6xl font-extrabold ">
                <div className="mb-3 sm:text-2xl"> Hi! I am</div>
              </h2>
              <div className="h-24 sm:h-32 ">
                <h2>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Wendy ",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "A Web Developer",
                      1000,
                      "A Customer Support Team Lead ",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="sm:!text-3xl text-5xl lg:text-6xl m-2 flex items-center justify-center text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  />
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                {" "}
                Thank you for checking in on my website. CallmeWendy is the
                place I share my personal projects, my passion with daily stuff
                and my personal experience day by day. Hope you are enjoy the
                time here and find something interesting and helpful. Do not
                hesitate to reach out in case you have any questions for me. I
                wish you a nice journey and wonderful day{" "}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="/lenguyet.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg border-white font-semibold hover:bg-white hover:text-black border-solid border-transparent hover:border-blackk border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  {" "}
                  Resume{" "}
                </Link>
                <Link
                  href="mailto:wendy.wnd77@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  {" "}
                  Contact
                </Link>
                
              </div>
              <div className="flex items-center self-start mt-2 lg:self-center ">
              <Link
                  href="https://buymeacoffee.com/callmewendy"
                  className="flex items-center bg-dark text-light p-2.5 mt-5 px-10 rounded-lg text-lg border-white font-semibold hover:bg-white hover:text-black border-solid border-transparent hover:border-blackk border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Buy me a coffee
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
