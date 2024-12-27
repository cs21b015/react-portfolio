import React from 'react'
import {EXPERIENCES} from '../constant/Index'

const Experience = () => {
  return (
    <div border-b border-neutral-300>
      <h1 className="py-20 text-4xl text-center">Expericence</h1>
      {EXPERIENCES.map((i,index)=>{ return(
        <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
            <div className="w-full lg:w-1/4 ">
                <p className='mb-2 text-sm text-neutral-400'>{i.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>{i.role}-<span className='text-sm'>{i.company}</span></h6>
                <p >
                    {i.description}
                </p>
                {i.technologies.map((tech,index)=>{
                    return(
                        <span className='px-2 py-1 mt-4 mr-2 font-medium text-purple-400' key={index}>{tech}</span>
                    )
                })}
            </div>
            
        </div>
)})}
    </div>
  )
}
export default Experience
