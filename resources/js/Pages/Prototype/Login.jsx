import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Login() {
    return (
        <div className="max-w-screen">
            <div className="container flex flex-row items-center justify-center">
                <div className="w-[35%] flex flex-col px-[60px] h-screen justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/images/GameOnU-v2.png" alt="logo" />
                    </div>

                    <h1 className="font-sans text-[24px] font-bold leading-normal mt-[60px]">
                        Wellcome Back, brodi!
                    </h1>
                    <div className="flex gap-[3px] mt-[8px]">
                        <p className="font-text text-[16px] font-normal leading-normal">
                            New to GameOnU?
                        </p>
                        <Link className="font-text text-[16px] font-normal leading-normal text-secondary">
                            Sign Up for free.
                        </Link>
                    </div>

                    <div className="mt-[24px]">
                        <p className="font-text text-[16px] font-normal leading-normal">
                            Please enter your details.
                        </p>
                        <TextInput
                            type="email"
                            name="email"
                            placeholder="Username or Email"
                            className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                        />
                        <TextInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                        />
                        <div className="mt-[8px]">
                            <Link className="font-text text-[16px] font-bold leading-normal text-secondary">
                                Forgot Password?
                            </Link>
                        </div>

                        <div className="mt-[24px]">
                            <PrimaryButton className="w-full">
                                Login
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="w-[65%] bg-login h-screen flex items-center justify-center">
                    <img src="/images/mac-login.png" alt="gameonu" />
                </div>
            </div>
        </div>
    );
}
