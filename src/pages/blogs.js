import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "../../public/images/pic2.jpg"
import article2 from "../../public/images/pic3.jpg"
import article3 from  "../../public/images/pic4.png"
import { motion, useMotionValue } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);
    const handleMouse = (event) => {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX);
        y.set(-10);
    }
    const handleMouseLeave = (event) => {
        imgRef.current.style.display = "none"
        x.set(0);
        y.set(0);
    }

    return (
        <Link href = {link} target ="_blank"
        onMouseMove = {handleMouse}
            onMouseLeave = {handleMouseLeave}>
            
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage style={{x:x, y:y}} 
            initial = {{opacity:0}}
            whileInView={{opacity:1, transition: {duration: 0.2}} }
            ref={imgRef} src= {img} alt ={title} className='z-10 w-96 h-auto hidden absolute rounded-lg'
            priority
            sizes ="(max-width: 768px) 100vw,
            (max-width:1200px) 50vw, 33vw"/>
        </Link>
    )
}

const Articel = ({img, title, date, link}) => {
  return (
      <motion.li 
      initial ={{y:200}}
      whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
      viewport={{once: true}}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first::mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light '>
          <MovingImg title = {title} img ={img} link ={link}/>
          <span className='text-primary dark:text-primaryDark font-semibold pl-4 '>{date}</span>
      </motion.li>
  )
}

const FeaturedArticle = ({img, title, time, summary, link }) => {
  return (
      <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'> 
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl '/>             
           <Link href ={link} target='_blank' className='w-full inline-block cursor-poiter overflow-hidden rounded-lg '>
              <FramerImage src= {img} alt={title} className='w-full h-auto' 
              whileHover ={{scale:1.05}}
              transition={{duration:0.2}}
              priority
              sizes ="(max-width: 768px) 100vw,
              (max-width:1200px) 50vw, 33vm"
              />
          </Link>
          <Link href = {link} target='_blank'>
              <h2 className='caplitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
          </Link>
          <p className='text-sm mb-2'>{summary}</p>
          <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
          
      </li>
  )
}





const blogs = () => {
  return (
    <div>
    < Head>
       <title> Blogs </title>
       <meta  name = "description" content='any description'/>
    </Head>

    <TransitionEffect /> 

    <main className='text-dark w-full mb-16 p-20 flex flex-col items-center justify-center overflow-hidden dark:text-light '>
      <Layout className='pt-16'>
          <AnimatedText text = "My Own World by Words " className='mb-16'></AnimatedText>
          <ul className='grid grid-cols-2 gap-16'>
              < FeaturedArticle 
              title = "A girl with a big dream"
              summary= "I dream about   "
              time = "9 min read"
              link ="/"
              img ={article2}
              /> 
              < FeaturedArticle 
              title = "My hobbies beside work"
              summary= "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time = "9 min read"
              link ="/"
              img ={article1}
              /> 
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16  mt-32'>All Aritcles</h2>
          <ul>
              <Articel 
              title = "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date = " 30/1/2021"
              link ="/"
              img ={article3}
              />
              <Articel 
              title = "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date = " 30/1/2021"
              link ="/"
              img ={article3}
              />
              <Articel 
              title = "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date = " 30/1/2021"
              link ="/"
              img ={article3}
              />
              <Articel 
              title = "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date = " 30/1/2021"
              link ="/"
              img ={article3}
              />
              <Articel 
              title = "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date = " 30/1/2021"
              link ="/"
              img ={article3}
              />
              <Articel 
              title = "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date = " 30/1/2021"
              link ="/"
              img ={article3}
              />
              <Articel 
              title = "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date = " 30/1/2021"
              link ="/"
              img ={article3}
              />
          </ul>
      </Layout>
    </main>
  </div>

  )
}

export default blogs
