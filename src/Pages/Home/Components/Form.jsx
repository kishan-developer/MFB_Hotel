import React from 'react'

function Form() {


    return (
        <div className="w-[100%] h-[90] flex flex-col items-center justify-center py-10 bg-white ">
            <div className="w-[75%] h-[95%] py-5  border-2 border-black rounded-md flex flex-col items-center justify-center text-[0.9rem] font-serif ">
                <h2 className="text-[1.3rem] mb-3 text-black">Contact now</h2>
                <form className="flex flex-col gap-7">

                    <div className="parent_div w-full flex flex-col lg:flex lg:flex-row xl:flex xl:flex-row items-center justify-between gap-7">
                        <div className="flex  lg:flex-row gap-5 text-black">
                            <label>Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter you name" 
                                className="bg-transparent border-b-2 border-gray-800 outline-none cursor-pointer" 
                            />
                        </div>

                        <div className="flex gap-5 text-black">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter you email"
                                className="bg-transparent border-b-2 border-gray-800 outline-none cursor-pointer"
                            />
                        </div>

                    </div>

                    <div className="parent_div w-full flex items-center justify-between gap-7 flex-col lg:flex lg:flex-row xl:flex xl:flex-row">
                        <div className="flex gap-5 text-black">
                            <label>Phone</label>
                            <input
                                type="number"
                                placeholder="Contact No"
                                className="bg-transparent border-b-2 border-gray-800 outline-none cursor-pointer"
                            />
                        </div>

                       

                    </div>

                   
                </form>
            </div>
        </div>
    )
}

export default Form;