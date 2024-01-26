"use client"

import ClickButton from "@/app/components/ClickButton";
import FormError from "@/app/components/FormError";
import Input from "@/app/components/Input";
import { SignIn } from "@/app/services/UserService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser } from "react-icons/fa";


interface ErrorProps {
    auth: string;
}

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<ErrorProps>({ auth: "" });
    const router = useRouter();

    const auth = async () => {
        const result = await SignIn({ email, password });
        (result?.error) && setError(result.error)
        if (result.access_token) {
            // redirect top page
            router.push('/');
        }
    }

    const isDisable = () => !(email && password);

    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex text-2xl justify-center font-bold">
                <FaUser className="mt-1 me-3" />
                Sign in
            </h1>

            <div>
                <Input type="email" placeholder="Email" onChange={setEmail} />
                <Input type="password" placeholder="Password" onChange={setPassword} />

                <FormError message={error?.auth} />
            </div>

            <div>
                <ClickButton
                    label="Sign in"
                    onClick={auth}
                    disabled={isDisable()}
                />

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
                    Register
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;