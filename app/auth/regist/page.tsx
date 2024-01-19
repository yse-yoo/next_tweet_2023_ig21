"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/Input";
import Link from "next/link";
import { useState } from "react";

const RegistPage = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const regist = async () => {
        const url = "http://localhost:8000/api/regist/store";
        console.log(name, email, password)

        const response = await fetch(url,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
        }
    }

    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex text-2xl justify-center font-bold">
                <FaUser className="mt-1 me-3" />
                Register
            </h1>

            <div>
                <Input type="name" placeholder="Your Name" onChange={setName} />
                <Input type="email" placeholder="Email" onChange={setEmail} />
                <Input type="password" placeholder="Password" onChange={setPassword} />
            </div>

            <div>
                <button className="
                w-full bg-black
                text-white hover:bg-gray-800
                py-2 px-4 my-3
                rounded-lg" onClick={regist}>
                    Sign up
                </button>

                <Link
                    href="/auth/regist"
                    className="
                flex justify-center
                w-full bg-gray-200
                text-gray-600 
                hover:bg-gray-300
                py-2 px-4 my-3
                rounded-lg
                ">
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default RegistPage;