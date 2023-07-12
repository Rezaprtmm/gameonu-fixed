import PrimaryButton from "@/Components/PrimaryButton";

export default function Checkout() {
    return (
        <div className="max-w-screen bg-checkout h-screen flex">
            <div className="container flex flex-row items-center justify-center">
                <div className="w-[820px] bg-white">
                    <div className="px-[110px] py-[92px]">
                        <h1 className="font-sans text-[32px] font-bold leading-normal">
                            Checkout Details
                        </h1>
                        <div className="flex flex-row mt-[24px]">
                            <div className="mr-[176px]">
                                <div>
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Course Name
                                    </h1>
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        Introduction to Game Development
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Course Level
                                    </h1>
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        Newbie
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Checkout Date
                                    </h1>
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        2023 - 07 - 09
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Chekout Time
                                    </h1>
                                    <p className="font-text text-[16px] font-normal leading-normal">
                                        10:08:53
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Course Price
                                    </h1>
                                    <p className="font-text text-[16px] font-bold leading-normal text-[#269B40]">
                                        IDR 499K
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Tax / PPN 11%
                                    </h1>
                                    <p className="font-text text-[16px] font-bold leading-normal text-[#269B40]">
                                        IDR 54.89K
                                    </p>
                                </div>
                                <div className="mt-[16px]">
                                    <h1 className="font-sans text-[20px] font-bold leading-normal">
                                        Total
                                    </h1>
                                    <p className="font-text text-[16px] font-bold leading-normal text-[#269B40]">
                                        IDR 553.89K
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[24px]">
                            <PrimaryButton className="w-full">
                                Pay Now
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
