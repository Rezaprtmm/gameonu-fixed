import React from "react";

export default function CardCourse({ name, rating, lessons, hours, level }) {
    return (
        <div className="w-[400px] border-[#e1d2f9] border-[1px] absolute group mr-[30px]">
            <div className="w-full">
                <div className="w-full">
                    <img
                        src="/images/placeholder.webp"
                        alt=""
                        className="w-full"
                    />
                </div>
                <div className="flex flex-row items-center justify-between px-[16px] mt-[16px]">
                    <h1 className="font-sans text-[20px] font-bold leading-normal text-secondary flex items-center">
                        {name}
                    </h1>
                    <p className="font-text text-[#737373] text-[16px] font-normal leading-nornmal flex items-center gap-[4px]">
                        {rating} / 5{" "}
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M4.85417 18.3333L6.20833 12.4792L1.66667 8.54167L7.66667 8.02083L10 2.5L12.3333 8.02083L18.3333 8.54167L13.7917 12.4792L15.1458 18.3333L10 15.2292L4.85417 18.3333Z"
                                    fill="#FFD02B"
                                />
                            </svg>
                        </span>
                    </p>
                </div>
                <div className="flex justify-between mt-[8px] pb-[27px] px-[16px]">
                    <p className="font-text text-[16px] font-bold leading-normal text-[#737373]">
                        {lessons} lessons • {hours} hours
                    </p>
                    <p className="font-text text-[16px] font-bold leading-normal text-[#737373]">
                        Level: {level}
                    </p>
                </div>
            </div>
        </div>
    );
}
