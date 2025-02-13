import React from 'react'
import { Link } from 'react-router-dom'
import CartComponent from '../../components/ui/CartComponent'
import { CardFooter } from '@chakra-ui/react';

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
    <div className="bg-white w-full h-[410px] shadow-lg rounded-xl overflow-hidden max-w-sm ">
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

// Card-Courses
const data = [
  {
    image : "../src/assets/Rectangle33.png",
    category :"Design",
    duration :"3 months",
    title : "AWS Certified solutions Architect",
    text : "3 months",
    profile :"../src/assets/Lina.png",
    instructor : "Lina",
    oldPrice :"100",
    newPrice :"80",
    description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  }
  , 
  {
    image : "../src/assets/Rectangle99.png",
    category :"Design",
    duration :"3 months",
    title : "AWS Certified solutions Architect",
    text : "3 months",
    profile :"../src/assets/Lina.png",
    instructor : "Lina",
    oldPrice :"100",
    newPrice :"80",
    description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    image : "../src/assets/Rectangle32.png",
    category :"Design",
    duration :"3 months",
    title : "AWS Certified solutions Architect",
    text : "3 months",
    profile :"../src/assets/Lina.png",
    instructor : "Lina",
    oldPrice :"100",
    newPrice :"80",
    description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    image : "../src/assets/Rectangle71.png",
    category :"Design",
    duration :"3 months",
    title : "AWS Certified solutions Architect",
    text : "3 months",
    profile :"../src/assets/Lina.png",
    instructor : "Lina",
    oldPrice :"100",
    newPrice :"80",
    description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  }
]

const Card = ({ text, category, duration, title, description, instructor, oldPrice, newPrice, image ,profile }) => {
  return (
    <div className="bg-white w-[300px] rounded-2xl shadow-lg p-4 m-auto">
      <div className="w-full h-40 overflow-hidden rounded-xl">
        <img src={image} alt="Course" className="w-full h-full object-cover"/>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-gray-600 text-sm mb-2">
          <span className="bg-emerald-100 text-emerald-500 px-2 py-1 rounded-md">{category}</span>
          <span>{duration}</span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full border-2 border-emerald-500 " />
            <span className="font-medium p-2">{instructor}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 line-through">${oldPrice}</span>
            <span className="text-emerald-600 font-semibold">${newPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BlongPage() {
  return (
  <>{}
<section className="relative bg-sky-100 flex">
  <div className="relative mx-auto max-w-screen-xl px-14 py-32 sm:px-6 lg:flex lg:items-center lg:px-8 ml-28">
    <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right text-left">
       <p className="text-[30px] font-semibold text-black">
       By Themadbrains in 
      <span className="text-teal-700 ml-2">Inspiration</span>
     </p>
      <h1 className="text-sky-800 font-extrabold text-5xl leading-tight">
        Why SwiftUI Should Be on the Radar of Every Mobile Developer
      </h1>

      <p className="mt-4 text-lg font-light text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded-md bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto"
        >
          Start Learning Now
        </a>
      </div>
      
    </div>
  </div>
  <div className=" justify-around items-center m-auto bg-blue-100 ">
      <img className='w-[550px] m-auto mr-24' src="../src/assets/Rectangle32.png"  alt="" />
    </div>
</section>
    <div class="w-10/12 h-10 mt-5 m-auto p-2 ml-44 font-semibold">
         <h1>Reading blog list</h1>
     </div>     
    <div className="w-10/12 h-64 m-auto p-3 flex justify-evenly"> 
    <Link to="/blogdetail">        
        <div class="card text-start w-64 h-52">
            <img src="../src/assets/Group249.png" alt="" />
        </div>
     </Link>   
     <Link to="/blogdetail">   
        <div class="card text-start w-64 h-52">
            <img src="../src/assets/Group236.png" alt="" />
            </div>
      </Link>        
      <Link to="/blogdetail">    
        <div class="card text-start w-64 h-52"> 
            <img src="../src/assets/javascript.png" alt="" />
        </div>  
      </Link> 
      <Link to="/blogdetail">
        <div class="card text-start w-64 h-52">
        <img src="../src/assets/Group251.png" alt="" />
        </div>
      </Link>    
    </div> 
    <div>
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
    <div className='h-7 m-auto w-[82%]  p-2 mt-8 flex justify-between font-light'>
          <h1>Marketing Articles</h1>
          <h1>See All</h1>
    </div>
   <div className=" flex w-[90%] m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  md:p-8">
           {data.map((item, index) => (          
            <Card key={index} 
              image={item.image}
              text={item.text}
              category={item.category}
              duration={item.duration}
              title={item.title}
              instructor={item.instructor}
              profile={item.profile}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              description={item.description}
            />
           ))}
      </div>
    </div>       

 </>
  )
}
