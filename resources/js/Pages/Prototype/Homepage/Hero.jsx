import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Hero() {
    return (
        <div className="max-w-screen flex bg-white w-full border-secondary border-b-2">
            <div className="container flex mx-auto w-full">
                <div className="pt-[46px] w-[55%] border-secondary border-r-[3px] flex flex-col justify-center">
                    <h1 className="font-sans text-[64px] font-bold text-secondary pl-[110px]">
                        Learning by <br /> Making. Doing. <br />
                        Coding.
                    </h1>
                    <p className="mt-[24px] font-sans text-[20px] font-normal pl-[110px]">
                        Create your own game, learn everything at GameOnU
                    </p>
                    <div className="mt-[24px] flex items-center pl-[110px]">
                        <div className="mr-[13px]">
                            <Link href={route("prototype.courses")}>
                                <PrimaryButton type="button">
                                    Learn More
                                </PrimaryButton>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center gap-[10px]">
                            <img
                                src="/images/watch.png"
                                className="rounded-full"
                            />
                            <Link
                                href="#"
                                className="font-sans text-[14px] font-bold text-secondary"
                            >
                                Watch Demo
                            </Link>
                        </div>
                    </div>
                    <div className="flex mt-[125px] w-full border-secondary border-t-[3px] border-b-[1px]">
                        <div className="flex gap-[16px] pr-[50px] border-secondary border-r-[3px] pl-[110px]">
                            <div className="flex items-center">
                                <img
                                    src="/images/tutors.png"
                                    alt="tutors"
                                    className="py-[20px]"
                                />
                            </div>
                            <div className="font-text py-[20px]">
                                <h1 className="text-secondary text-[24px] font-bold">
                                    40+
                                </h1>
                                <p className="text-[16px] font-normal">
                                    Certified Tutors
                                </p>
                            </div>
                        </div>
                        <div className="font-text pl-[20px] pr-[50px] border-secondary border-r-[3px]">
                            <div className="py-[20px]">
                                <h1 className="text-secondary text-[24px] font-bold">
                                    120
                                </h1>
                                <p className="text-[16px] font-normal">
                                    Hours of course
                                </p>
                            </div>
                        </div>
                        <div className="font-text pl-[20px] pr-[50px]">
                            <div className="py-[20px]">
                                <h1 className="text-secondary text-[24px] font-bold">
                                    300+
                                </h1>
                                <p className="text-[16px] font-normal">
                                    Students Enrolled
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] flex flex-col">
                    <img src="/images/hero.png" className="w-full" />
                </div>
            </div>
        </div>
    );
}
