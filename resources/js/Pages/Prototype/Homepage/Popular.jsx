export default function Popular() {
    return (
        <div className="max-w-screen flex bg-white w-full mt-[146px]">
            <div className="container mx-auto flex w-full">
                <div className="pl-[110px] w-1/4">
                    <h1 className="font-sans text-[36px] font-bold text-primary leading-normal">
                        Most <br />
                        Popular Courses
                    </h1>
                    <p className="font-text text-[16px] font-normal leading-normal mt-[16px]">
                        Start an incridible{" "}
                        <span className="text-secondary">Game Development</span>{" "}
                        course with us. You can learn the most requested
                        courses.
                    </p>
                    <div className="mt-[36px]">
                        <a
                            href="#"
                            className="text-white font-sans text-[16px] font-bold leading-normal bg-primary px-[30px] py-[10px]"
                        >
                            Choose courses
                        </a>
                    </div>
                </div>
                <div className="w-3/4 pl-[75px] flex gap-[31px]">
                    <div className="w-[400px] border-secondary border-[3px] shadow-custom">
                        <div className="px-[20px] pt-[20px]">
                            <div className="w-full">
                                <img
                                    src="/images/placeholder.webp"
                                    alt=""
                                    className="w-[357px]"
                                />
                            </div>
                            <h1 className="font-sans text-[20px] font-bold leading-normal text-secondary mt-[16px]">
                                C#
                            </h1>
                            <div className="flex gap-[110px] mt-[8px] pb-[27px]">
                                <p className="font-text text-[16px] font-bold leading-normal text-[#737373]">
                                    8 lessons • 3 hours
                                </p>
                                <p className="font-text text-[16px] font-bold leading-normal text-[#737373]">
                                    Level: Newbie
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[400px] border-secondary border-[3px] shadow-custom">
                        <div className="px-[20px] pt-[20px]">
                            <div className="w-full">
                                <img
                                    src="/images/placeholder.webp"
                                    alt=""
                                    className="w-[357px]"
                                />
                            </div>
                            <h1 className="font-sans text-[20px] font-bold leading-normal text-secondary mt-[16px]">
                                C#
                            </h1>
                            <div className="flex gap-[110px] mt-[8px] pb-[27px]">
                                <p className="font-text text-[16px] font-bold leading-normal text-[#737373]">
                                    8 lessons • 3 hours
                                </p>
                                <p className="font-text text-[16px] font-bold leading-normal text-[#737373]">
                                    Level: Newbie
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
