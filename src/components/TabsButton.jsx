import React, { useEffect, useState } from 'react'
import './TabButton.css'
import { datalist } from '../demodata/datalist'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const url = datalist
// console.log(url, "name")
const TabsButton = () => {

    const [loading , setLoading] = useState(true)
    const [jobs , setJobs] = useState([])
    const [value , setValue] = useState(0)

    const fetchjobs = async()=>{
        try {
            // const response = await fetch(url)
            // const newjobs = await response.json()
            //  console.log(url)
           
                setJobs(url)
           
            setLoading(false) 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
        fetchjobs()
    }, 3000)
    },[])
    
    if(loading){
        return <section className='w-full h-screen flex justify-content-center items-center text-center'><p>Loading.............</p></section>
    }
    
    const {company, duties, title, dates} = jobs[value]
   
  return (
    <div className='w-[90%] m-auto py-20'>
        <h2 className='text-4xl font-semibold mb-10'>Experience</h2> 
        <div className='flex gap-10'>
            <div className='flex flex-col w-58 border border-white p-2 shadow'>
                {
                    jobs.map((item, index)=>{
                        return <button key={item.id} onClick={()=>setValue(index)} className={`job-btn w-52 uppercase  ${index === value && 'active-btn'}`} >{item.company}</button>
                    })
                }
            </div>
            <div>
                <h2 className='text-3xl font-semibold mb-5 text-purple-400'>{title}</h2>
                <p className='text-2xl mb-3'>{dates}</p>
                {/* <p> <MdOutlineKeyboardDoubleArrowRight/> {duties}</p> */}
                {duties.map((duty, index)=>{
                    return(
                        <div key={index} className='flex gap-5 leading-9 items-center pl-10 text-xl'>
                            <span><MdOutlineKeyboardDoubleArrowRight/></span>
                            <p>{duty}</p>
                        </div>
                )
                })}
                <br />
                <span className='bg-orange-800 font-semibold px-4 py-2 rounded-lg uppercase'>{company}</span>
            </div>
        </div>
    </div>
  )
}

export default TabsButton