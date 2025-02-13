import React from 'react'
const datainput  =[
  {
       image: "../src/assets/Rectangle23.png",
       title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
       profile:"../src/assets/Lina.png",
       text: "Lina",
       description:
       "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },

    {
       image: "../src/assets/Rectangle32.png",
       title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
       profile:"../src/assets/Lina.png",
       text: "Lina",
       description:
       "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  }
]
const CardTwo = ({ image, profile, title, text ,description }) => {
  return (
    <div className="bg-white w-full h-[410px] shadow-lg rounded-xl overflow-hidden max-w-sm">
      <img src={image} alt="Card Image" className="w-full h-52 object-cover p-4 overflow-hidden rounded-xl"/>
      <div className='ml-4'>
      <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex items-center space-x-3 ">
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full border-2 border-emerald-500 mt-2" />
          <h3 className="text-lg font-semibold text-gray-800">{text}</h3>
        </div>
          <p className=' p-2 font-light font-sans'>{description}</p>
      </div>
    </div>
  );
};
export default function BlogDetail() {
  return (
  <>
   <div className='w-full h-auto object-cover'>
    <img src="../src/assets/Group7.png" alt="" />
   </div>
   <div className=" w-[83%] mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Why Swift UI Should Be on the Radar of Every Mobile Developer
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        TOTC is a platform that allows educators to create online classes 
        whereby they can store the course materials online; manage 
        assignments, quizzes, and exams; monitor due dates; grade results 
        and provide students with feedback all in one place.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        TOTC is a platform that allows educators to create online classes 
        whereby they can store the course materials online; manage 
        assignments, quizzes, and exams; monitor due dates; grade results 
        and provide students with feedback all in one place.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
      TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
      TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage 
      </p>
      <div className="flex gap-6 mb-7 py-4 h-16 ">
        {["affordable", "stunning", "making", "madbrains"].map((tag, index) => (
          <span key={index} className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center">
          <img src="../src/assets/Lina.png" alt="Author" className="w-12 h-12  mr-3" />
          <div>
            <p className="text-gray-900 font-semibold">Written by</p>
            <p className="text-blue-800 font-semibold">Lina</p>
          </div>
        </div>
        <button className="px-7 py-2 text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition">
          Follow
        </button>
      </div>
    </div>
    <div className=' h-[540px] bg-sky-100 mt-14'>
      <div className='w-[1230px] m-auto flex justify-between p-4 text-green-800 font-light'>
        <h1>Related Blog</h1>
        <h1>See All</h1>
      </div>
     <div className="w-[1230px] h-[400px] m-auto flex justify-evenly p-2 ">
     {datainput.map((item, index) => (
    <CardTwo key={index}
              image={item.image} 
              title={item.title }
              profile={item.profile} 
              text={item.text } 
              description={item.description} 
              />       
         ))}
      </div>
    </div> 
  </>
  )}  