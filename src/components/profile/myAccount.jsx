'use client'
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import React, { useState } from 'react';
import avatar from "../../../public/images/avatar/img1.png";
import { follow } from "@/util/serverActions";
import { unFollow } from "@/util/serverActions";

export default function MyAccount({ follow, unFollow ,storeprofile}) {
    const url = new URL(window.location.href).toString();
    const id = url.split('/')[4];
    console.log( storeprofile)

    const [isFollowing, setIsFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(0);

    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing);
        if (isFollowing) {
            setFollowersCount(prevCount => prevCount - 1);
            unFollow(id); // Call unFollow function when unfollowing
        } else {
            setFollowersCount(prevCount => prevCount + 1);
            follow(id); // Call follow function when following
        } 
    };

    return(
        <div>
            <div className="profile">
                <div className="m-0 p-0 pb-5 box-border flex my-16 border-b-2">
                    <div className="profile-card mr-12">
                        <Image
                            src={avatar}
                            className="rounded-full my-auto"
                            alt="profile"
                            width={100}
                            height={100}
                        />
                        <div className="text-2xl">
                            <h1 className={'my-auto mt-3'}> barei-02</h1>
                        </div>
                    </div>
                    <div className="flex gap-4 max-h-10 my-auto mr-12">
                        <span className="text-center border-l-2 border-gray-400 pl-4">{followersCount}<br/>
                            المتابعين
                        </span>
                        <span className="text-center">  30 <br/>
                            المنتجات
                        </span>
                        <div className="tooltip-container mx-7">
                            <button className="text bg-fuchsia-700 py-2 px-3 rounded-lg" onClick={()=> handleFollowToggle(id)}>
                                {isFollowing ? 'إلغاء المتابعة' : 'متابعة'}
                            </button> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
