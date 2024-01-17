"use client"

import Image from "next/image";
import imageMe from '@/public/images/me.png'

const ProfilePage = () => {
    return (
        <div>
            <Image 
            src={imageMe}
            className="h-36 w-36" 
            alt=""
            />
            <h1 className="text-2xl text-center font-bold">Profile</h1>
        </div>
    );
}

export default ProfilePage;
