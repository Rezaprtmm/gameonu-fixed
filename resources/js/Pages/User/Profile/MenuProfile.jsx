import React from "react";

export default function MenuProfile({ icon, title, description }) {
    return (
        <div className="flex flex-row gap-[8px] mb-[20px]">
            {icon}
            <div className="flex flex-col">
                <h1 className="font-sans text-[16px] font-bold leading-normal text-secondary">
                    {title}
                </h1>
                <p className="font-text text-[16px] font-normal leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
}
