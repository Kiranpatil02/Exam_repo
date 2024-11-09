import React from 'react'
import DashCard from './dashcard'
export default function Dashboard(){
    return(
        <>
        <div className='flex flex-wrap gap-20 gap-y-10  justify-center w-full items-center  mt-5'>
            <DashCard/>
        </div>
        
        </>
    )
}