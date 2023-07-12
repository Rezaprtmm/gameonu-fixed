import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/react";

export default function Register() {
    return (
        <div className="max-w-screen">
            <div className="container flex flex-row items-center justify-center">
                <div className="w-[65%] bg-login h-screen flex items-center justify-center">
                    <img src="/images/PixelBook-register.png" alt="register" />
                </div>
                <div className="w-[35%] flex flex-col px-[60px] h-screen justify-center">
                    <div className="flex items-center justify-center">
                        <img src="/images/GameOnU-v2.png" alt="logo" />
                    </div>
                    <div className="mt-[60px]">
                        <h1 className="font-sans text-[24px] font-bold leading-normal">
                            Create an account
                        </h1>
                        <p className="font-text text-[16px] font-normal leading-normal">
                            Let’s get started to become a great Game Developer
                        </p>

                        <div className="mt-[24px]">
                            <TextInput
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                            />
                            <TextInput
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                            />
                            <TextInput
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                            />
                            <TextInput
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="mt-[8px] w-full border-black border-t-0 border-x-0 border-b-[1px] font-text text-[16px] font-normal leading-normal"
                            />
                            <div className="mt-[16px]">
                                <PrimaryButton className="w-full">
                                    Login
                                </PrimaryButton>
                                <div className="flex mt-[8px] gap-[3px]">
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        Already have an account?
                                    </p>
                                    <Link className="font-text text-[16px] font-normal leading-normal text-secondary">
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
