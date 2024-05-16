"use client"
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Basket from "../../../public/images/basket.png";
import P1 from "../../../public/images/avatar/img1.png";
import Feedback  from "@/components/Feedback/Feedback";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {getProductsItem} from "@/util/serverActions";

 const ProductDetails = ({fetchedProduct ,postFavorite,postCart})  => {

     const [product, setProduct] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const url = new URL(window.location.href).toString();
     const id = url.split('/')[4];

     useEffect(() => {
         const fetchProduct = async () => {
             const fetched= await fetchedProduct(id);

             setProduct(fetched?.product);
             setIsLoading(false);
             // console.log("fetched " ,fetched?.product)
         };
         fetchProduct();
     }, []);
     console.log("FEATCHED " ,product)

  return (
      <>
          {isLoading ? "Loading" :
          (
              <>
            <div className="container flex flex-row-reverse mt-44" dir="ltr">
              <div className="w-1/2 h-96 rounded-xl mt-10 ml-16">
                  <div className="h-96 rounded-xl">
                      <Carousel>
                          <CarouselContent>
                              {product?.image.map((img, index) => (
                              <CarouselItem key={index}>
                                  <Image
                                      src={img}
                                      width={700}
                                      height={700}
                                      alt={`image ${index}`}
                                      className="flex w-96 h-96 m-auto rounded-xl"
                                  />
                              </CarouselItem>
                              ))}
                          </CarouselContent>
                          <CarouselPrevious/>
                          <CarouselNext/>
                      </Carousel>
                  </div>
              </div>

              <div className="flex flex-col w-1/2 h-auto  ">
                  <div className="info p-3 text-right">
                      <p className="font-extrabold text-4xl my-3">{product?.name} </p>
                      <p className="font-extrabold text-2xl text-green-600">دج {product?.price}  </p>
                      <p className="text-thin mt-2 w-auto">{product?.description}</p>

                      <div className="border-1 border-fuchsia-600 w-full my-5"/>

                      <div className="">
                          <p className="font-thin text-2xl">:تفاصيل المنتج </p>
                          <p className="text-thin mt-2 w-auto">{product?.description}</p>
                      </div>
                  </div>

                  {/*<div className="border-1 border-fuchsia-900 mt-5 ml-10"/>*/}

                  <div className="buttons flex">
                      <div className="w-full h-40 flex justify-end items-center cursor-pointer mx-5">
                          <button className="bg-fuchsia-600 w-fit h-fit p-2 rounded-full mr-12" onclick={() => postFavorite(product?.id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                              </svg>
                          </button>

                          <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-fuchsia-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
                           onClick={() => postCart(product?.id)}  >
                              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-fuchsia-600 group-hover:h-full"></span>
                              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6A0080"  className="bi bi-cart4" viewBox="0 0 16 16">
                                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                 </svg>
                              </span>
                              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                 </svg>
                                </span>
                              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">أضف الى السلة</span>
                          </button>
                      </div>
                  </div>

                  <div className="shop w-fit mx-auto ">
                      <div
                          className="flex flex-row-reverse w-[40rem] max-w-md h-20 px-4 py-2 mb-20 bg-white border-1  rounded-lg shadow-md  bg-gradient-to-b from-gray-50 to-white shadow-gray-200  dark:bg-gray-800">
                          <div className="relative flex flex-row-reverse my-auto w-2/3">
                              <Image
                                  className="abslote object-cover w-14 h-14 mb-0 border-0 border-white rounded-md dark:border-blue-400"
                                  alt="Testimonial avatar"
                                  src={product?.storeImages}
                                  width={30}
                                  height={30}
                              />
                              <div className="flex flex-col">
                                  <h2 className="text-xl text-right font-semibold text-gray-800 my-auto dark:text-white mx-3 md:mt-0">
                                      {product?.storeName}
                                  </h2>
                                  <p className="text-sm text-gray-600 my-auto dark:text-gray-400 mx-3">
                                      lorem ipsum dolor
                                      {/*{product.storeDescription}*/}
                                  </p>
                              </div>
                          </div>
                          <button
                              className=" flex px-2 py-2 justify-left m-auto justify-end text-center text-md w-fit font-semibold text-white transition-colors duration-300 transform bg-fuchsia-600 rounded hover:bg-fuchsia-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                              زيارة المتجر
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          <div className="container mt-10 ">
              <h3 className="font-thin py-4 text-3xl text-fuchsia-600" dir="rtl"> آراء العملاء</h3>
              <ScrollArea className="h-[500px] w-[max] rounded-md border-1 border-fuchsia-600 shadow-md p-4">
                  <div className="contain  rounded-xl ">
                      <div className="feed my-2">
                          <Feedback/>
                      </div>
                      <div className="feed my-2">
                          <Feedback/>
                      </div>
                      <div className="feed my-2">
                          <Feedback/>
                      </div>
                      <div className="feed my-2">
                          <Feedback/>
                      </div>
                      <div className="feed my-2">
                          <Feedback/>
                      </div>
                      <div className="feed my-2">
                          <Feedback/>
                      </div>
                  </div>
              </ScrollArea>
              <div className="feedback my-5 w-1/2 shadow-xl rounded-xl ">
              <div className="bg-white border-1 border-fuchsia-600 flex flex-col gap-2 rounded-xl p-2 text-sm">
                <h1 className="text-center text-fuchsia-600 text-xl font-bold col-span-6">
                  تقييمك للمنتج
                </h1>
                <div className="stars m-auto"></div>
                <textarea
                    dir="rtl"
                    placeholder="أرسل تقييمك ..."
                    className="bg-fuchsia-50 text-slate-600 h-24 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                ></textarea>
                <span className="col-span-2"></span>
                <button className="flex items-center bg-fuchsia-600 text-white w-fit gap-1 px-2 py-2 mr-3 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-fuchsia-400 duration-300 hover:gap-2 hover:translate-x-3">
                  إرسال
                  <svg
                      className="w-5 h-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
                  </>)}
      </>
  );
 }
export default ProductDetails;
