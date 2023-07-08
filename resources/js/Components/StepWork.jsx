import React from "react";

export default function StepWork({ number, title, description }) {
    return (
        <div className="flex gap-[32px] flex-row items-center">
            <div className="bg-secondary h-[40px] flex justify-center origin-center items-center rotate-45">
                <h1 className="font-sans text-[24px] text-white font-bold leading-normal px-[13px] transform -rotate-45">
                    {number}
                </h1>
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="font-sans text-[20px] font-bold leading-normal text-secondary">
                    {title}
                </h1>
                <p className="font-text text-[16px] font-normal leading-normal mt-[16px]">
                    {description}
                </p>
            </div>
        </div>
    );
}
