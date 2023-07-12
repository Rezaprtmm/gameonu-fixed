import { Link } from "@inertiajs/react";

export default function CardRight({
    number,
    step,
    description,
    link,
    className = "",
    className2 = "",
}) {
    return (
        <div
            className={`w-full flex flex-row items-center justify-center mt-[150px] ${className}`}
        >
            <div className="w-[45%] flex flex-col items-end justify-center">
                <hr className="w-[462px] bg-black h-[3px]" />
            </div>
            <div className="w-[10%] flex items-center justify-center">
                <div className="bg-secondary h-[40px] w-[40px] flex justify-center origin-center items-center rotate-45">
                    <h1 className="font-sans text-[24px] text-white font-bold leading-normal px-[13px] transform -rotate-45">
                        {number}
                    </h1>
                </div>
                <hr className="h-[216px] w-[3px] bg-black absolute mt-[360px]" />
            </div>
            <div className={`w-[45%] flex flex-col -mb-[25px] ${className2}`}>
                <hr className="w-[38px] h-[3px] bg-black absolute mt-[100px]" />
                <div className="bg-white w-[400px] border-secondary border-[3px] ml-[60px] shadow-custom1">
                    <div className="px-[20px] py-[30px]">
                        <h1 className="font-sans text-[16px] font-bold leading-normal">
                            Step {number}: {step}
                        </h1>
                        <p className="font-text text-[16px] font-normal leading-normal mt-[16px]">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="ml-[60px] mt-[30px] w-[200px] -mb-[30px]">
                    <Link
                        href={link}
                        className="flex gap-[10px] bg-white border-secondary border-[3px] px-[30px] p-[10px] shadow-custom2"
                    >
                        Go To Course{" "}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_298_1351)">
                                <path
                                    d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_298_1351">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
