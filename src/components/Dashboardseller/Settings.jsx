"use client";
import React from "react";
import Box from "@mui/material/Box";
import data from "../../data/data.json";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import Gender from "./Gender";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد ملف النمط الخاص ب AOS


//import React, { useState, useEffect } from 'react';
export default function accountSettings() {
  /*const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // استرداد بيانات المستخدم من local storage أو قاعدة البيانات
    const userData = retrieveUserData(); // افترضت أن هذه الدالة تسترجع بيانات المستخدم

    // تحديث حقول النموذج بقيم المستخدم إذا كانت البيانات متاحة
    if (userData) {
      setUserName(userData.userName);
      setEmail(userData.email);
    }
  }, []); */ // [] للتأكد من أن useEffect ينفذ مرة واحدة فقط عند تحميل الصفحة
  const validateAge = (event) => {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - selectedDate.getFullYear();
    const selectedDate = new Date(event.target.value);
    const monthDiff = currentDate.getMonth() - selectedDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < selectedDate.getDate())
    ) {
      age--;
    }

    if (age < 18) {
      alert("يجب أن يكون العمر 18 عامًا أو أكثر.");
      event.target.value = ""; // إفراغ القيمة إذا كانت أقل من 18 عامًا
    }
  };

  //const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="px-12 py-3 h-auto w-auto my-12">
      <Box />
   
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10  ">
        <h1 className="text-center text-xl mb-4"> معلومات الحساب</h1>
        <hr />
        <div >
        <div className="max-w-md mx-auto">
          <form className="mt-5">
            <div className="flex gap-4">
              <div>
                <label
                  for="user-name"
                  className="font-semibold text-sm text-gray-700 pb-1"
                >
                  <BadgeOutlinedIcon /> إسم المستخدم
                </label>
                <input
                  type="text"
                  id="user-name"
                  aria-describedby="helper-text-explanation"
                  className="border w-64 shadow-purple-200 shadow-md  rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  aria-label="User Name"
                  // value={userName} // تعبئة حقل اسم المستخدم
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="helper-text"
                  className="font-semibold text-sm text-gray-700 pb-1"
                >
                  <MailOutlinedIcon /> البريد الاكتروني
                </label>
                <input
                  type="email"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="border w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  aria-label="Email Address"
                  //value={email} // تعبئة حقل البريد الإلكتروني
                  //onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="font-semibold text-sm text-gray-700 pb-1"
                >
                  <ContactPhoneOutlinedIcon /> رقم الهاتف
                </label>
                <input
                  placeholder="+213"
                  className="border w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="(\+213|0)([5-7])([0-9]){8}"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-gray-700 pb-1"
                  htmlFor="city"
                >
                  <ApartmentOutlinedIcon /> المدينة
                </label>
                <select
                  id="city"
                  className="border w-64 h-10 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value=""></option>
                  {data.map((city, index) => (
                    <option key={index} value={city.city}>
                      {city.city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <label
                  for="dob"
                  className="font-semibold text-sm text-gray-700 pb-1"
                >
                  <SpaOutlinedIcon />
                  العمر
                </label>
                <input
                  type="date"
                  id="dob"
                  className="border w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  onChange={validateAge} // إضافة معالج العمر
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-gray-700 pb-1"
                  htmlFor="Domain"
                >
                  <DomainAddOutlinedIcon /> مجال النشاط التجاري
                </label>
                <select
                  id="Domain"
                  className="border w-64 h-10 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value=""></option>
                  <option value="">الألعاب</option>
                  <option value="">المنتجات المدرسية</option>
                  <option value="">الفن</option>
                  <option value="">المنزل والمعيشة</option>
                  <option value="">الجمال و المنتجات</option>
                  <option value="">المجوهرات</option>
                  <option value="">الإكسسوارات</option>
                  <option value="">الأعراس</option>
                  <option value="">الديكور</option>
                  <option value="">الأطفال</option>
                  <option value="">الحقائب و المحافظ</option>
                  <option value="">الأزياء</option>
                  <option value="">الحرفيات</option>
                </select>
              </div>
            </div>
            <div className="flex gap-9">
            <div>
                 <Gender />
              </div>
              <div className=" text-center w-96">
              <Button className=" mt-10  bg-fuchsia-700 duration-500 hover:bg-fuchsia-600 text-center py-2 text-white ease-in font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon style={{marginLeft: '10'}} />}
                  >
                    رفع صورة متجرك 
                    <VisuallyHiddenInput type="file" />
                  </Button>
              </div>
              
              
            </div>
          </form>
        </div>
      </div>
      </div>
      
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 mt-20">
        <h1 className="text-center text-xl mb-4"> تغيير كلمة السر </h1>
        <hr />
        <div className="max-w-md mx-auto">
          <form className="my-5 text-center">
            <div style={{ position: "relative" }}>
              <label
                htmlFor="password"
                className="font-semibold text-sm text-gray-700 pb-1 mx-4"
              >
                كلمة السر القديمة
              </label>
              <input
                type="password"
                id="password"
                className="border w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                aria-label="Password"
              />
            </div>
            <div style={{ position: "relative" }}>
              <label
                htmlFor="password"
                className="font-semibold text-sm text-gray-700 pb-1 mx-4"
              >
                كلمة السر الجديدة
              </label>
              <input
                type="password"
                id="password"
                className="border w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                aria-label="Password"
              />
            </div>
            <div style={{ position: "relative" }}>
              <label
                htmlFor="password"
                className="font-semibold text-sm text-gray-700 pb-1 mx-4"
              >
                تأكيد كلمة السر
              </label>
              <input
                type="password"
                id="password"
                className="border mr-3 w-64 shadow-purple-200 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                aria-label="Password"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="relative bg-white md:mx-0 shadow rounded-3xl sm:p-10 mt-20">
        <div className="text-center">
          <button
            onClick={handleClick}
            variant="outline"
            className=" py-2 bg-fuchsia-700 w-48  text-center hover:bg-amber-300 duration-500 text-white ease-in font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-lg"
            type="submit"
          >
            حفظ
          </button>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            message="تم حفظ التغييرات"
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

      <div className="">
        <p className="text-center -mb-12 mt-20 text-slate-700">
          &copy; جميع الحقوق محفوظة لشركة بارع 2024
        </p>
      </div>
    </div>
  );
}
