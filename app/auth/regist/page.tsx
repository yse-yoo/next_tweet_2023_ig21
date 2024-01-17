"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/Input";

const RegistPage = () => {
    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex text-2xl text-center font-bold">
                <FaUser className="mt-1 me-3" />
                Register
            </h1>

            <div>
                <Input />
                <Input />
                <Input />
            </div>
        </div>
    );
}

export default RegistPage;