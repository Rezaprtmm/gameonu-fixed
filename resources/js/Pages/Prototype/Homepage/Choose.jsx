export default function Choose() {
    return (
        <div className="max-w-screen flex bg-white w-full mt-[146px]">
            <div className="container mx-auto flex w-full">
                <div className="w-[35%] flex flex-col border-secondary border-t-[3px] border-b-[3px]  ">
                    <div className="pl-[110px] w-full h-[300px] flex flex-col justify-center border-secondary border-b-[1.5px] pr-[60px]">
                        <h1 className="font-sans text-[20px] font-bold leading-normal text-right text-secondary">
                            Comprehensive Curriculum
                        </h1>
                        <p className="font-text text-[16px] font-normal leading-normal text-right">
                            A comprehensive curriculum covering all important
                            aspects of game development
                        </p>
                    </div>
                    <div className="pl-[110px] w-full h-[300px] flex flex-col justify-center border-secondary border-t-[1.5px] pr-[60px]">
                        <h1 className="font-sans text-[20px] font-bold leading-normal text-right text-secondary">
                            Structured Roadmap
                        </h1>
                        <p className="font-text text-[16px] font-normal leading-normal text-right">
                            We offer a structured roadmap with courses
                            classified based on levels, starting from beginner
                            to advanced.
                        </p>
                    </div>
                </div>
                <div className="w-[30%] flex flex-col justify-center items-center border-secondary border-[3px]">
                    <h1 className="font-sans text-[36px] font-bold leading-normal text-secondary flex">
                        Why <br />
                        Choose <br />
                        Our <br />
                        Courses
                        <span className="-mt-[60px] -ml-[50px]">
                            <img src="/svg/search.svg" alt="search" />
                        </span>
                    </h1>
                </div>
                <div className="w-[35%] border-secondary border-t-[3px] border-b-[3px] ">
                    <div className="pr-[110px] w-full h-[300px] flex flex-col justify-center border-secondary border-b-[1.5px] pl-[60px]">
                        <h1 className="font-sans text-[20px] font-bold leading-normal text-left text-secondary">
                            Learning Community
                        </h1>
                        <p className="font-text text-[16px] font-normal leading-normal text-left">
                            GameOnU provides a forum or discussion space where
                            students can interact, exchange ideas, etc.
                        </p>
                    </div>
                    <div className="pr-[110px] w-full h-[300px] flex flex-col justify-center border-secondary border-t-[1.5px] pl-[60px]">
                        <h1 className="font-sans text-[20px] font-bold leading-normal text-left text-secondary">
                            Most Updated Material
                        </h1>
                        <p className="font-text text-[16px] font-normal leading-normal text-left">
                            Regularly update the materials content according to
                            the latest developments in the gaming industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
