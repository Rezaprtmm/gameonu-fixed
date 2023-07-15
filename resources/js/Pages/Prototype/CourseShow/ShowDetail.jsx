import ReactPlayer from "react-player";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { ListRelease } from "./ListRelease";
import Release from "./Release";
import Lessons from "./Lessons";
import CardReviews from "@/Components/CardReviews";
import Flickity from "react-flickity-component";

export default function ShowDetail() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true, // Add the contain property
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: true,
        draggable: ">1",
    };
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div className="max-w-screen w-full mt-[60px]">
                <div className="container mx-auto flex flex-col w-full">
                    <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="font-sans text-secondary text-[40px] font-bold leading-normal">
                            Online Course
                        </h1>
                        <h1 className="font-sans text-secondary text-[40px] font-bold leading-normal">
                            Introduction to Game Development
                        </h1>
                        <div className="flex gap-[30px] mt-[40px]">
                            {ListRelease.map((item, index) => (
                                <Release
                                    key={`${index}-${item.index}`}
                                    icon={item.icon}
                                    title={item.title}
                                />
                            ))}
                        </div>
                        <div className="flex flex-row text-center mt-[40px] gap-[122px]">
                            <div className="">
                                <h3 className="font-text text-[16px] font-normal leading-normal">
                                    Member
                                </h3>
                                <p className="font-text text-[24px] font-normal leading-normal flex">
                                    <b>100+</b> enrolled
                                </p>
                            </div>
                            <div className="">
                                <h3 className="font-text text-[16px] font-normal leading-normal">
                                    Level
                                </h3>
                                <p className="font-text text-[24px] font-normal leading-normal">
                                    Newbie
                                </p>
                            </div>
                            <div className="">
                                <h3 className="font-text text-[16px] font-normal leading-normal">
                                    Certification
                                </h3>
                                <p className="font-text text-[24px] font-normal leading-normal text-[#007D23]">
                                    Yes
                                </p>
                            </div>
                            <div className="">
                                <h3 className="font-text text-[16px] font-normal leading-normal">
                                    Community
                                </h3>
                                <p className="font-text text-[24px] font-normal leading-normal text-[#007D23]">
                                    Yes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-[60px] border-secondary border-t-[3px]">
                        <div className="mt-[60px] px-[100px]">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=dQw4w9WgXcq"
                                controls
                                width="100%"
                                height="697px"
                            />
                        </div>
                    </div>
                    <div className="mt-[60px] flex w-full mb-[60px] border-secondary border-y-[3px]">
                        <div className="w-1/2 flex flex-col px-[100px] pt-[60px] border-secondary border-r-[3px] pb-[60px]">
                            <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                                5 Lessons (15 hours)
                            </h1>
                            <div className="mt-[24px]">
                                <Lessons
                                    title={"Introduction to Game Development"}
                                    time={3}
                                />
                                <Lessons
                                    title={"Software and Tools to Use"}
                                    time={3}
                                />
                                <Lessons
                                    title={
                                        "Basic Programming Concepts for Game Dev..."
                                    }
                                    time={3}
                                />
                                <Lessons
                                    title={
                                        "Create Simple Games with Game Engine"
                                    }
                                    time={3}
                                />
                                <Lessons
                                    title={
                                        "Introduction to Graphics in Game Develop..."
                                    }
                                    time={3}
                                />
                                <PrimaryButton
                                    type="button"
                                    className="w-[505px] h-[60px]"
                                >
                                    {" "}
                                    Join Course{" "}
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className="w-1/2 pt-[60px] px-[100px]">
                            <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                                About Course
                            </h1>
                            <p className="mt-[24px] font-text text-[16px] font-normal leading-normal text-justify">
                                The course provides a comprehensive introduction
                                to the exciting field of game development.
                                Designed for beginners, this course offers a
                                step-by-step approach to understanding the
                                fundamental concepts and skills required to
                                create games. Through a combination of
                                theoretical knowledge and practical exercises,
                                participants will gain a solid foundation in
                                game development and be equipped with the
                                necessary tools to pursue further learning or
                                even start developing their own games.
                            </p>
                        </div>
                    </div>
                    <div className="w-full pb-[60px] px-[100px]">
                        <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                            Reviews
                        </h1>
                        <div className="mt-[24px]">
                            <Flickity
                                className="gap-[30px]"
                                options={flickityOptions}
                            >
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <CardReviews
                                        name={"Jhon Doe"}
                                        job={"Student"}
                                        review={
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        }
                                        key={i}
                                    />
                                ))}
                            </Flickity>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
