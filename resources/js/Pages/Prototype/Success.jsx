import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function Success() {
    return (
        <div className="max-w-screen bg-checkout h-screen flex">
            <div className="container flex flex-row items-center justify-center">
                <div className="w-[820px] bg-white ">
                    <div className="px-[110px] py-[92px] flex flex-col items-center gap-[60px] w-full">
                        <div>
                            <h1 className="font-sans text-[32px] font-bold leading-normal text-secondary">
                                Payment Successfully!
                            </h1>
                        </div>
                        <div>
                            <svg
                                width="241"
                                height="240"
                                viewBox="0 0 241 240"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="120.5"
                                    cy="120"
                                    r="35"
                                    fill="#00D72F"
                                />
                                <circle
                                    cx="120.5"
                                    cy="120"
                                    r="35"
                                    fill="#00D72F"
                                />
                                <circle
                                    cx="120.5"
                                    cy="120"
                                    r="60"
                                    fill="#00D72F"
                                    fill-opacity="0.8"
                                />
                                <circle
                                    cx="120.5"
                                    cy="120"
                                    r="90"
                                    fill="#00D72F"
                                    fill-opacity="0.6"
                                />
                                <circle
                                    cx="120.5"
                                    cy="120"
                                    r="120"
                                    fill="#00D72F"
                                    fill-opacity="0.4"
                                />
                                <path
                                    d="M120.5 93.3334L127.504 98.4427L136.175 98.4267L138.837 106.677L145.861 111.76L143.167 120L145.861 128.24L138.837 133.323L136.175 141.573L127.504 141.557L120.5 146.667L113.496 141.557L104.825 141.573L102.163 133.323L95.1387 128.24L97.8333 120L95.1387 111.76L102.163 106.677L104.825 98.4267L113.496 98.4427L120.5 93.3334Z"
                                    stroke="white"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M111.167 120L117.833 126.667L131.167 113.333"
                                    stroke="white"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="mt-[24px] w-full">
                            <Link href={route("prototype.courses")}>
                                <PrimaryButton className="w-full">
                                    Back To Course
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
