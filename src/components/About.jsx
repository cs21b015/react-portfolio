import React from 'react'
import libraryimg from '../assets/image.png'
import { ABOUT_TEXT } from '../constant/Index'
const About = () => {
  return (
    <div>
    <h1 className="my-20 text-4xl text-center">About me</h1>
    <div className='flex flex-wrap '>
    <div className="w-1/2 h-auto max-w-full py-5 pr-5 "><img className="rounded"src={libraryimg} alt=""/></div>
    <div className="w-1/2 px-5 py-16 text-pink-300 from-neutral-300 lea6ding-relaxed">{ABOUT_TEXT}</div>
    </div>
    </div>  
  )
}

export default About

// import React from 'react';
// import libraryimg from '../assets/image.png';
// import { ABOUT_TEXT } from '../constant/Index';

// const About = () => {
//   return (
//     <div className="my-20">
//       <h1 className="mb-10 text-4xl text-center">About Me</h1>
      
//       {/* Flexbox container */}
//       <div className="flex flex-wrap">
//         {/* Image part */}
//         <div className="flex justify-center w-full h-full px-4 py-5 sm:w-1/2">
//           <img src={libraryimg} alt="Library" className="h-auto max-w-full" />
//         </div>
        
//         {/* Text part */}
//         <div className="flex items-center w-full px-4 py-5 sm:w-1/2">
//           <p className="text-lg text-neutral-300">{ABOUT_TEXT}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
