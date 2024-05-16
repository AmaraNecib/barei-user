'use client'
import "./globals.css";
import Image from "next/image";
import p1 from "../../../public/images/avatar/img1.png";

export default function Feedback() {
  return (
    <>
      <div
        className="w-full h-auto rounded-xl text-center border p-2 blur-5"
        dir="rtl"
      >
        <div className="flex p-2">
          <Image
            src={p1}
            width={50}
            height={50}
            alt="image"
            className="border-2 rounded-full"
          />
          <h6 className="font-extrabold p-1 my-auto mr-2 text-slate-500">
            اسم الحساب
          </h6>
          <div className="my-auto mr-auto">
          </div>
        </div>

        <p className="text p-1 mb-0 font-thin text-md ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          veritatis necessitatibus consectetur! Sunt, iusto ipsum qui modi
          labore quia hic, laborum nesciunt ad recusandae accusantium eius
          quaerat, doloremque amet doloribus?
        </p>
      </div>
    </>
  );
}
