import React from 'react'
import { Tilt } from 'react-tilt'

import HocWraper from '../components/hoc'

import { FaGithub } from "react-icons/fa";

import { MdOutlineArrowOutward } from "react-icons/md";

import { projects } from '../data/data'

const ProjectPage = () => {
  const options = {
    max: 10,
    scale: 1,
    speed: 350
  }


  return (
    <section className='flex items-start justify-center min-h-screen pt-[80px] pb-12 w-screen'>
      <div className='flex flex-col w-full max-w-[1400px] sm:gap-20 gap-12 pt-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='sm:text-5xl text-4xl font-[600]'>
            projects .
          </h1>
          <p className='sm:text-2xl text-[1.3rem]'>
            Take a Look at my Best Work
          </p>
        </div>
        <div className='flex flex-wrap justify-evenly w-full gap-4'>
          {projects.map((project) => {
            return (
              <Tilt options={options} key={project.id} className='flex max-w-[800px]'>
                <div className='relative flex flex-col justify-between sm:p-4 p-2 bg-g_Background_Shaded rounded-[15px] gap-4'>
                  <img src={project.img} alt="project intro image" className='rounded-[10px]' />
                  <div className='flex flex-col gap-0'>
                    <div className='flex justify-end w-full md:text-[1.3rem] text-[1.1rem]'>
                      <span>{project.nameE}</span>
                      <span>{project.name}</span>
                    </div>
                    <span style={{direction: 'rtl'}} className='felx gap-1 [&>*]:w-full md:text-[1.1rem] text-[.9rem] mt-2'>{project.dis}</span>                    
                  </div>
                  <div className='flex absolute sm:top-6 top-4 sm:right-6 right-4 gap-4'>
                    {project.Link.map((link) => {
                      console.log(link.name)
                      return (
                        <a href={link.path} className='flex items-center justify-center w-8 h-8 bg-gray-900 rounded-full scale-125'>
                          {link.name == 'Github' ? <FaGithub /> : <MdOutlineArrowOutward /> }
                        </a>
                      )
                    })}
                  </div>
                  {/* <div className='flex flex-wrap w-full justify-around gap-[.1rem]'>
                    {project.skill.map((skill) => {
                      return (
                        <p className='relative flex items-center justify-center rounded-[5px]'>
                          {skill}
                          <span className='absolute bottom-0 right-0 left-0 h-[1px] bg-g_Text_White'></span>
                        </p>
                      )
                    })}
                  </div> */}
                </div>
              </Tilt>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HocWraper(ProjectPage, 'projects')