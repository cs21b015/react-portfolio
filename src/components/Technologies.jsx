import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'

const Technologies = () => {
  return (
    <div >

     <h1 className='my-20 text-4xl text-center'>Technology</h1>
     <div className="flex justify-center gap-4 item-center " >
        <div className="p-4 border-4 border-purple-300 rounded-2xl">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4 border-4 border-purple-300 rounded-2xl">
        <TbBrandNextjs className="text-7xl"/>
        </div>
        <div className="p-4 border-4 border-purple-300 rounded-2xl">
        <FaNodeJs className="text-green-500 text-7xl"/>
        </div>
        <div className="p-4 border-4 border-purple-300 rounded-2xl">
        <SiMongodb className="text-green-500 text-7xl"/>
        </div>
     </div>
    </div>
  )
}

export default Technologies
