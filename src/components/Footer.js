import React from 'react'

import {TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon} from './Icons'

import {motion} from "framer-motion"
import Layout from './Layout'
import Link from 'next/link'




const footer = () => {
  return (
    <footer className=' text-dark w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-line  sm:text-base'>
      <Layout className='py-8 flex items-center justify-between dark:text-light dark:border-light lg:flex-col lg:py-6'>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className='flex items-center lg:py-2'>
          Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'> &#9825; </span> by&nbsp; <Link href="https://callmewendy.mom" className='underline underline-offset-2 '
          
          > CallMeWendy</Link>
        </div>

        <div className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://twitter.com/" target={'_blank'}
            whileHover = {{ y:-2}}
            whileTap = {{scale:0.9}}
            className='w-6 mr-3'>
              <TwitterIcon />
            </motion.a>

            <motion.a href="https://github.com/" target={'_blank'} whileHover = {{ y:-2}}  whileTap = {{scale:0.9}}
            className='w-6 mx-3'>
              < GithubIcon />
            </motion.a>

            <motion.a href="https://www.linkedin.com/" target={'_blank'}
            whileHover = {{ y:-2}}  whileTap = {{scale:0.9}}
            className='w-6 mx-3' >
              < LinkedInIcon /> 
            </motion.a>

            <motion.a href="https://www.pinterest.com/" target={'_blank'} whileHover = {{ y:-2}}  whileTap = {{scale:0.9}}
            className='w-6 mx-3 bg-light rounded-full ' >
              < PinterestIcon /> 
            </motion.a>

            <motion.a href="https://dribbble.com/" target={'_blank'} whileHover = {{ y:-2}}  whileTap = {{scale:0.9}}
            className='w-6 ml-3'>
              < DribbbleIcon /> 
            </motion.a>
        </div>
        </Layout>
      </footer>
  )
}

export default footer
