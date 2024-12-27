import React from 'react'
import {PROJECTS} from '../constant/Index'

const Projects = () => {
  return (
    <div>
        <h1 className="py-20 text-4xl text-center">Projects</h1>
        {PROJECTS.map((i,index)=>{
            return(
                <div className='flex flex-wrap mb-8 lg:justify-center' key={index}>
                    <div className='w-full lg:w-1/4'>
                    <p className='mb-2 font-semibold '>{i.title}</p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                    <p className='mb-4 text-neutral-400'>{i.description}</p>
                    {i.technologies.map((tech,index)=>{
                    return(
                        <span className='px-2 py-1 mt-4 mr-2 font-medium text-purple-400' key={index}>{tech}</span>
                    )
                })}
                    </div>
                </div>
            )
        })}
        
            
    </div>
  )
}

export default Projects
