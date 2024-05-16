
"use client";
import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import Box from "@mui/material/Box"
import "./globals.css";
import { Textarea } from "@/components/ui/textarea"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import AddItional from './AddItional'
import Snackbar from "@mui/material/Snackbar";
import Image from "next/image";
// import ba2 from "../../../public/images/ba2.jpg";
import Slide from './Slide'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Producte(){
 

const [additionalComponents, setAdditionalComponents] = useState([]);
const [clickCount, setClickCount] = useState(0);
const [open, setOpen] = useState(false);

const handleClickAdd = () => {
  if (clickCount < 3) {
    setAdditionalComponents([...additionalComponents, <AddItional onDelete={() => handleDelete(additionalComponents.length)} key={additionalComponents.length} />]);
    setClickCount(clickCount + 1);
  }
};

const handleDelete = (index) => {
  setAdditionalComponents((prevComponents) => prevComponents.filter((_, i) => i !== index));
  setClickCount(clickCount - 1);
};

const handleClick = () => {
  setOpen(true);
};


useEffect(() => {
  AOS.init({
       duration: 800,
       once: false,
     })
}, [])

  return(
    <div className='px-12 py-3 h-auto w-auto my-12'>
      <Box />
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">   
             <h1 className="text-center text-xl mb-4">  بيانات المنتج الاساسية</h1>  
             <hr />
                 <div className="max-w-md mx-auto">
                    <div className=' mt-16'>
                      <h1 className='mb-3'>صور المنتج</h1>
                      <div className=' flex gap-16 w-auto'>
                        <div className='flex flex-col'>

                        <label for="file" class="custum-file-upload bg-slate-50">
                          <div class="icon">
                          <svg viewBox="0 0 24 24" fill=""  width="45"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                            <path fillRule="evenodd"clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
                          </div>
                          <div className="text ">
                            <span>حمل صور منتجك</span>
                          </div>
                          <input id="file" type="file"/>
                        </label>
                        
                        <div className='flex flex-col mt-3 mr-2 text-sm text-slate-500'>
                          <span>الصيغ المدعومة: png, jpg, jpeg, gif</span>
                          <span>  أبعاد الصور: 1000*1000</span>
                          <span> حجم الصورة لا يتجاوز: 5MB</span>
                    </div>

                        </div>

                      <Slide />
                     { /*  <div class="card">
  <div class="item item--1">
          <Image src={ba2} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
  
  </div>
  <div class="item item--2">
  <Image src={ba2} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
  </div>
  <div class="item item--3">
  <Image src={ba2} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
  </div>
  <div class="item item--4">
  <Image src={ba2} 
             className="placeholder='blur'"
             width={100}
             height={200}
             alt=""/>
  </div>
                        </div>*/}
                        
                {/*  <div className="containerr">
                    <div className="palette">
                      <div className="color" id="color1">
                      <Image src={logo} 
                            className="placeholder='blur'"
                            width={90}
                             height={80}
                            alt=""/>
                      </div>

                      <div className="color" id="color2">
                        <Image src={logo} 
                            className="placeholder='blur'"
                            width={90}
                            height={80}
                            alt=""/>
                      </div>

                      <div className="color" id="color3">
                      <Image src={logo} 
                            className="placeholder='blur'"
                            width={90}
                            height={80}
                            alt=""/>
                      </div>
                      <div className="color" id="color4">
                      <Image src={logo} 
                            className="placeholder='blur'"
                            width={90}
                            height={80}
                            alt=""/>
                      </div>
                      {/*<div id="color-code">
                        <div id="color-code-bg"></div>
                        <div id="color-code-text"></div>
  </div>
                    </div>
         
                  </div>*/}

                       {/* <Carousel>
                   <CarouselContent>
                            
                                  <CarouselItem>
                                    <div class="card">
                                          <div class="remove-when-use">
                                            <label>Hover over me to show details</label>
                                          </div>
                                          <div class="details">
                                            <label>Title</label>
                                            <p>
                                              A beautiful place at the shore of XYZ sea.
                                              <br/>
                                              <i>California, USA</i>
                                            </p>
                                          </div>
                                        </div>
                                  </CarouselItem>

                                  <CarouselItem>
                                    <div class="card">
                                          <div class="remove-when-use">
                                            <label>Hover over me to show details</label>
                                          </div>
                                          <div class="details">
                                            <label>Title</label>
                                            <p>
                                              A beautiful place at the shore of XYZ sea.
                                              <br/>
                                              <i>California, USA</i>
                                            </p>
                                          </div>
                                        </div>
                                  </CarouselItem>

                                  <CarouselItem>
                                    <div class="card">
                                          <div class="remove-when-use">
                                            <label>Hover over me to show details</label>
                                          </div>
                                          <div class="details">
                                            <label>Title</label>
                                            <p>
                                              A beautiful place at the shore of XYZ sea.
                                              <br/>
                                              <i>California, USA</i>
                                            </p>
                                          </div>
                                        </div>
                                    <CarouselPrevious />
                                  </CarouselItem> 
                                
                                  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
                         </Carousel>*/}
                        </div>
                       
                    </div>
                    


                    <form className="mt-5" >
                      <div className='flex gap-4'>
                        <div>
                            <label 
                              for="name-producte"  
                              className="font-semibold text-sm text-gray-700 pb-1"> 
                                إسم المنتج
                            </label>
                            <input 
                              type="text" 
                              id="name-producte" 
                              aria-describedby="helper-text-explanation" 
                              className="border w-64 shadow-purple-200 shadow-md  rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                              aria-label="User Name" 
                            />
                        </div>
                        <div>
                              <label for="pric-producte"  
                                  className="font-semibold text-sm text-gray-700 pb-1"> 
                                  سعر المنتج
                              </label>
                              <input 
                                  placeholder="0 دج" 
                                  type="text" 
                                  id="pric-producte" 
                                  aria-describedby="helper-text-explanation" 
                                  className="border w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                  aria-label="Email Address" 
                              />
                        </div>
                      </div>

                      <div className='flex gap-4'>
                      <div>
                            <label 
                              htmlFor="stouk" 
                              className="font-semibold text-sm text-gray-700 pb-1">
                                المخزن
                            </label>
                            <input 
                              placeholder="" 
                              className="border w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                              type="text" 
                              id="stouk" 
                            />
                        </div>
                        <div>
                            <label 
                              htmlFor="SKU" 
                              className="font-semibold text-sm text-gray-700 pb-1">
                                رمز المنتج SKU
                            </label>
                            <input 
                              placeholder="" 
                              className="border w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                              type="text" 
                              id="SKU"  
                            />
                        </div>
                      </div>
                      <div className='w-full'>
                      <label for=""  
                                className="font-semibold text-sm text-gray-700 pb-1"> 
                                  وصف المنتج
                            </label>

                        <Textarea />
                      </div>
                    </form> 
                 </div>
          </div> 
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 mt-5" >
            <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography> <h1 className=' text-base'>تفاصيل إضافية للمنتج</h1>
          </Typography>
     
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p> إضافة خيارات للمنتج مثل الألوان والمقاسات أو حتى الأحجام والقيم وغيرها من المتغيرات.</p>
          {additionalComponents.map((component, index) => (
              <React.Fragment key={index}>
                {component}
              </React.Fragment>
            ))}   
          <div className=' mr-96 pr-96'>
                          <button onClick={handleClickAdd}>
                            <p className=' text-fuchsia-700 hover:underline hover:text-fuchsia-500'>
                              <AddIcon />خيار إضافي</p>
                          </button>
                      </div>
           {/* { menudata == "additional" && <AddItional onDelete={handleDelete}  /> }*/}
          </Typography>
        </AccordionDetails>
            </Accordion>
          </div>
          <div className="relative bg-white md:mx-0 shadow rounded-3xl sm:p-10 mt-20" >
        <div className="text-center" >
          <button onClick={handleClick}
            variant="outline"
            className=" py-2 bg-fuchsia-700 w-48  text-center hover:bg-amber-300 duration-500 text-white  ease-in   font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-lg"
            type="submit"
          >
            حفظ و إضافة منتج جديد
          </button>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            message="تمت إضافة المنتج"
            ContentProps={{
              style: {
                backgroundColor: "white",
                color: "black",
                fontSize: "17px",
              },
            }}
          />
        </div>
      </div>
              <div className=''>
              <p className="text-center -mb-12 mt-20 text-slate-700">
                 &copy; جميع الحقوق محفوظة لشركة بارع 2024
              </p>
              </div>
             

             
    </div>
  );
}


