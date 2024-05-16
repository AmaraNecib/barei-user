"use client";
import React from 'react';
import "./globals.css";
import Box from "@mui/material/Box"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AddItional({ onDelete }){
  const handleDelete = () => {
    setTimeout(() => {
      onDelete();
    }, 170);
  }

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])
  return(
          <div className="relative py-3 sm:max-w-xl sm:mx-auto h-auto mt-4" data-aos="fade-left" >
            <Box />
            <div  className="relative px-4 py-10 bg-gray-50  mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto -mt-2" >
              
                <Tooltip className="-mr-8 ">
                        <IconButton onClick={handleDelete}>
                          <DeleteIcon />
                        </IconButton>
                </Tooltip>
                  
                      <form className="mt-2 container"  >
                        <div className="container mx-4">
                            <label for="Option-name"  
                            className="font-semibold text-sm text-gray-700 pb-1 block "> 
                                إسم الخيار
                            </label>
                            <input type="text" 
                              id="Option-name" 
                              className="border w-full h-11 shadow-purple-200 shadow-md  rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="container mx-4" >
                              <label htmlFor="Value"  
                              className="font-semibold text-sm text-gray-700 pb-1 block"
                              > القيم
                              </label>
                              <input 
                                type='text'
                                id="Value" 
                                className="border w-full h-11 shadow-purple-200 shadow-md  rounded-lg px-3 py-2 mt-1 mb-5 text-sm  focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                              />   
                        </div>
                      </form>
                    
            </div>
            </div>
           
          </div>
     
        );
}
