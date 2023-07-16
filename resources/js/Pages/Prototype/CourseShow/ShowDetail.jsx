import ReactPlayer from "react-player";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { ListRelease } from "./ListRelease";
import Release from "./Release";
import Lessons from "./Lessons";
import CardReviews from "@/Components/CardReviews";
import Flickity from "react-flickity-component";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function ShowDetail({ slug, user }) {
    const [courses, setCourses] = useState([]);
    const [lessons, setLessons] = useState([]);
    let title = window.location.pathname.split("/");
    slug = title[3];
    let a = 0;
    title = title[3].replace(/-/g, " ");
    const save = [];

    let userCourse = user.course;
    let courseCheck;
    if (user.course) {
        courseCheck = userCourse.split(",");
    }
    console.log(courseCheck);
    let btnText = "Join Course";
    let btnAct = true;

    const fetchCourses = async () => {
        const response = await fetch("http://localhost:8000/api/courses");
        const data = await response.json();
        const responses = await fetch("http://localhost:8000/api/lessons");
        const datas = await responses.json();
        setLessons(datas);
        for (let i = 0; i < data.length; i++) {
            if (title === data[i].title) {
                setCourses(data[i]);
            }
        }
    };
    useEffect(() => {
        fetchCourses();
    }, []);

    for (let i = 0; i < 5; i++) {
        for (a; a < lessons.length; a++) {
            if (courses.cid === lessons[a].courseId) {
                save[i] = lessons[a];
                ++a;
                break;
            }
        }
    }

    const flickityOptions = {
        cellAlign: "left",
        contain: true, // Add the contain property
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: true,
        draggable: ">1",
    };

    if (courses.length != 0 && user.course) {
        for (let i = 0; i < courseCheck.length; i++) {
            if (courses.cid === courseCheck[i]) {
                btnText = "You already bought this";
                btnAct = true;
                break;
            }

            if (i === courseCheck.length - 1) {
                btnAct = false;
            }
        }
    } else {
        btnAct = false;
    }
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
                            {title}
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
                                    {courses.levels}
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
                                {save.map((row) => (
                                    <Lessons
                                        title={row.title}
                                        time={3}
                                        key={row.id}
                                    />
                                ))}
                                <Link
                                    href={route(
                                        "prototype.checkout.show",
                                        slug
                                    )}
                                >
                                    <PrimaryButton
                                        type="button"
                                        className="w-[505px] h-[60px]"
                                        disabled={btnAct}
                                    >
                                        {" "}
                                        {btnText}{" "}
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/2 pt-[60px] px-[100px]">
                            <h1 className="font-sans text-[24px] font-bold leading-normal text-secondary">
                                About Course
                            </h1>
                            <p className="mt-[24px] font-text text-[16px] font-normal leading-normal text-justify">
                                {courses.about1} {courses.about2}{" "}
                                {courses.about3}
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
                                        thumbnail={"/images/fatih.jpg"}
                                        name={"Fatih"}
                                        job={"Student"}
                                        review={
                                            "Kelasnya bagus banget saya merekomendasikan kelas ini ke teman-teman saya"
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
