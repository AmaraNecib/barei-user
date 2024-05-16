"use client";
import Box from "@mui/material/Box"
import "./globals.css";
import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; // MenuItem instead of Option
import Option from '@mui/joy/Option';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function ToRequest(){
  const [direction, setDirection] = React.useState('column');
  const [placement, setPlacement] = React.useState('bottom');
    return(
     
        <div className='px-12 py-3 h-auto w-auto my-12'>
       <Box/>
       <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">   
       <h1 className="text-center text-xl mb-4">  جميع طلبات متجرك</h1>  
       <hr />
       <hr />
       
       <Tabs
        variant="outlined"
        orientation={direction.startsWith('row') ? 'vertical' : 'horizontal'}
        aria-label="Placement indicator tabs"
        defaultValue="a"
        sx={{
          gridColumn: '1/-1',
          height: 180,
          flexDirection: direction,
        }}
      >
        <TabList underlinePlacement={placement}>
          <Tab indicatorPlacement={placement} value="a">
           الكل
          </Tab>
          <Tab indicatorPlacement={placement} value="b">
           جديد
          </Tab>
          <Tab indicatorPlacement={placement} value="c">
           جاري التجهيز
          </Tab>
          <Tab indicatorPlacement={placement} value="d">
            جاهز
          </Tab>
          <Tab indicatorPlacement={placement} value="e">
            جاري التوصيل
          </Tab>
          <Tab indicatorPlacement={placement} value="f">
            مكتمل
          </Tab>
          <Tab indicatorPlacement={placement} value="g">
            ملغي
          </Tab>
          <Tab indicatorPlacement={placement} value="h">
             قيد الاسترجاع
          </Tab>
          <Tab indicatorPlacement={placement} value="i">
            مسترجع
          </Tab>
        </TabList>
        <TabPanel value="a">Content of Tab A</TabPanel>
        <TabPanel value="b">Content of Tab B</TabPanel>
        <TabPanel value="c">Content of Tab C</TabPanel>
        <TabPanel value="d">Content of Tab A</TabPanel>
        <TabPanel value="e">Content of Tab B</TabPanel>
        <TabPanel value="f">Content of Tab C</TabPanel>
        <TabPanel value="g">Content of Tab A</TabPanel>
        <TabPanel value="h">Content of Tab B</TabPanel>
        <TabPanel value="i">Content of Tab C</TabPanel>
      </Tabs>

       </div>

     </div>

    
  
  );
        
    
}