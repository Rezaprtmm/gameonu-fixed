import { Link } from "@inertiajs/react";
import React from "react";

export default function CardCourse({
    slug,
    name,
    rating,
    price,
    level,
    thumbnail,
    className = "",
}) {
    price = price.toString();
    price = price.slice(0, -3);
    price = parseInt(price);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + "...";
    };

    return (
        <div
            className={`border-[#e1d2f9] border-[1px] group mr-[30px] flex items-center justify-center ${className}`}
        >
            <div className="w-full">
                <div className="w-full">
                    <img src={thumbnail} alt="" className="w-full" />
                </div>
                <div className="flex flex-row items-center justify-between px-[16px] mt-[16px]">
                    <h1 className="font-sans text-[20px] font-bold leading-normal text-secondary flex items-center truncate ">
                        {truncateText(name, 20)}
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
                    <p className="font-text text-[16px] font-bold leading-normal text-[#258540]">
                        IDR {price}K
                    </p>
                    <p className="font-text text-[16px] font-bold leading-normal text-[#737373]">
                        Level: {level}
                    </p>
                </div>
                <Link
                    href={route("prototype.courseShow.show", slug)}
                    className="inset-0 absolute z-50"
                ></Link>
            </div>
        </div>
    );
}
