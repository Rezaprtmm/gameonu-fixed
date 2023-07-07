import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";

export default function Hero() {
    return (
        <div className="max-w-screen flex bg-white w-full border-black border-b-2">
            <div className="container flex mx-auto w-full">
                <div className="pt-[46px] w-[55%] border-black border-r-[3px] flex flex-col justify-center">
                    <h1 className="font-sans text-[64px] font-bold text-primary pl-[110px]">
                        Learning by <br /> Making. Doing. <br />
                        Coding.
                    </h1>
                    <p className="mt-[24px] font-sans text-[20px] font-normal pl-[110px]">
                        Create your own game, learn everything at GameOnU
                    </p>
                    <div className="mt-[24px] flex items-center pl-[110px]">
                        <div className="mr-[13px]">
                            <a
                                href="#"
                                className="bg-primary px-[30px] py-[10px] font-text text-[16px] font-bold text-white"
                            >
                                Learn More
                            </a>
                        </div>
                        <div className="flex flex-row items-center gap-[10px]">
                            <img
                                src="/images/watch.png"
                                className="rounded-full"
                            />
                            <p className="font-sans text-[14px] font-bold text-primary">
                                Watch demo
                            </p>
                        </div>
                    </div>
                    <div className="flex mt-[129px] w-full border-black border-t-[3px] border-b-[1px]">
                        <div className="flex gap-[16px] pr-[50px] border-black border-r-[3px] pl-[110px]">
                            <div className="flex items-center">
                                <img
                                    src="/images/tutors.png"
                                    alt="tutors"
                                    className="py-[20px]"
                                />
                            </div>
                            <div className="font-text py-[20px]">
                                <h1 className="text-primary text-[24px] font-bold">
                                    40+
                                </h1>
                                <p className="text-[16px] font-normal">
                                    Certified Tutors
                                </p>
                            </div>
                        </div>
                        <div className="font-text pl-[20px] pr-[50px] border-black border-r-[3px]">
                            <div className="py-[20px]">
                                <h1 className="text-primary text-[24px] font-bold">
                                    120
                                </h1>
                                <p className="text-[16px] font-normal">
                                    Hours of course
                                </p>
                            </div>
                        </div>
                        <div className="font-text pl-[20px] pr-[50px]">
                            <div className="py-[20px]">
                                <h1 className="text-primary text-[24px] font-bold">
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
